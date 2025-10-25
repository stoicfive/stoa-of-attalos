"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { APP_CONFIG } from "@/lib/constants";

const STORAGE_KEY = "stoa-vscode-workspace-path";
const DEFAULT_BRANCH = process.env.NEXT_PUBLIC_DEFAULT_BRANCH ?? "main";

interface UseVSCodeWorkspaceOptions {
  repositoryUrl?: string;
}

export interface VSCodeWorkspaceApi {
  workspacePath: string;
  hasWorkspacePath: boolean;
  usingEnvWorkspace: boolean;
  repositoryUrl?: string;
  repoPath?: string | null;
  copyCommand: () => Promise<"copied" | "error" | "unavailable">;
  openProject: () => void;
  openPath: (relativePath?: string) => void;
  openWeb: () => void;
  openWebFile: (relativePath?: string) => void;
  setWorkspacePath: (path: string) => void;
  clearWorkspacePath: () => void;
}

export function useVSCodeWorkspace(
  options: UseVSCodeWorkspaceOptions = {}
): VSCodeWorkspaceApi {
  const envWorkspace = process.env.NEXT_PUBLIC_VSCODE_WORKSPACE_PATH ?? "";
  const repositoryUrl = options.repositoryUrl ?? APP_CONFIG.repository;

  const [storedWorkspace, setStoredWorkspace] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setStoredWorkspace(saved);
    }
  }, []);

  const workspacePath = storedWorkspace || envWorkspace;
  const hasWorkspacePath = Boolean(workspacePath);
  const usingEnvWorkspace = !storedWorkspace && Boolean(envWorkspace);

  const repoPath = useMemo(() => {
    if (!repositoryUrl) return null;
    const cleaned = repositoryUrl.replace(/\.git$/, "");
    const match = cleaned.match(/github\.com\/([^/]+\/[^/]+)/i);
    return match ? match[1] : null;
  }, [repositoryUrl]);

  const buildVSCodeUri = useCallback(
    (relativePath?: string) => {
      if (!hasWorkspacePath) return null;
      const trimmedRoot = workspacePath.replace(/\/+$/, "");
      const normalizedRelative = relativePath
        ? `/${relativePath.replace(/^\/+/, "")}`
        : "";
      return `vscode://file${encodeURI(`${trimmedRoot}${normalizedRelative}`)}`;
    },
    [workspacePath, hasWorkspacePath]
  );

  const openWeb = useCallback(() => {
    if (!repositoryUrl) {
      alert("Repository URL is not configured.");
      return;
    }
    if (repoPath) {
      window.open(
        `https://vscode.dev/github/${repoPath}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.open(
        `vscode://vscode.git/clone?url=${encodeURIComponent(repositoryUrl)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }, [repositoryUrl, repoPath]);

  const openWebFile = useCallback(
    (relativePath?: string) => {
      if (!repoPath) {
        openWeb();
        return;
      }

      const base = `https://vscode.dev/github/${repoPath}`;

      if (!relativePath) {
        window.open(base, "_blank", "noopener,noreferrer");
        return;
      }

      // Use direct file path format: /blob/branch/path/to/file
      const normalized = relativePath.replace(/^\/+/, "");
      const fileUrl = `${base}/blob/${DEFAULT_BRANCH}/${normalized}`;
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    },
    [repoPath, openWeb]
  );

  const openTarget = useCallback(
    (relativePath?: string) => {
      const uri = buildVSCodeUri(relativePath);
      if (uri) {
        window.open(uri, "_blank", "noopener,noreferrer");
        return;
      }
      openWebFile(relativePath);
    },
    [buildVSCodeUri, openWebFile]
  );

  const copyCommand = useCallback(async () => {
    const command = hasWorkspacePath
      ? `code "${workspacePath}"`
      : repositoryUrl
      ? `git clone ${repositoryUrl}`
      : "code";

    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(command);
        return "copied";
      } catch (error) {
        console.error("Failed to copy command", error);
        return "error";
      }
    }

    const fallback = window.prompt("Copy this command:", command);
    return fallback ? "copied" : "unavailable";
  }, [hasWorkspacePath, repositoryUrl, workspacePath]);

  const setWorkspacePath = useCallback((path: string) => {
    setStoredWorkspace(path);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, path);
    }
  }, []);

  const clearWorkspacePath = useCallback(() => {
    setStoredWorkspace("");
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return {
    workspacePath,
    hasWorkspacePath,
    usingEnvWorkspace,
    repositoryUrl,
    repoPath,
    copyCommand,
    openProject: () => openTarget(),
    openPath: openTarget,
    openWeb,
    openWebFile,
    setWorkspacePath,
    clearWorkspacePath,
  };
}
