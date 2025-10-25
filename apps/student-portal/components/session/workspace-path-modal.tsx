"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Info, ExternalLink } from "lucide-react";

interface WorkspacePathModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (path: string) => void;
  onClear: () => void;
  initialValue?: string;
  repositoryUrl?: string;
}

export function WorkspacePathModal({
  isOpen,
  onClose,
  onSave,
  onClear,
  initialValue = "",
  repositoryUrl,
}: WorkspacePathModalProps) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setValue(initialValue);
      setError(null);
    }
  }, [isOpen, initialValue]);

  const handleSave = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Please enter an absolute path (e.g. /Users/you/projects/stoa-of-attalos).");
      return;
    }
    onSave(trimmed);
  }, [value, onSave]);

  useEffect(() => {
    if (!isOpen) return;

    const focusableSelectors = [
      "button",
      "a[href]",
      "input",
      "textarea",
      "select",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusable = modalElement.querySelectorAll<HTMLElement>(focusableSelectors);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && focusable.length > 0) {
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const githubRepoLink = useMemo(() => {
    if (!repositoryUrl) return null;
    if (!repositoryUrl.includes("github.com")) return repositoryUrl;
    return repositoryUrl;
  }, [repositoryUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <Card
        ref={modalRef}
        className="w-full max-w-lg border border-border bg-background shadow-xl"
      >
        <CardHeader>
          <CardTitle className="text-xl">Configure VS Code Workspace</CardTitle>
          <CardDescription>
            Provide the absolute path to this project on your machine. This enables
            one-click deep links that open files directly in your local VS Code window.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label htmlFor="workspace-path" className="text-sm font-medium">
            Local project path
          </label>
          <input
            id="workspace-path"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) setError(null);
            }}
            placeholder="/Users/you/dev/stoa-of-attalos"
            className={cn(
              "w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring",
              error ? "border-destructive" : null
            )}
          />
          {error && (
            <p className="text-xs font-medium text-destructive">{error}</p>
          )}
          <div className="rounded-md border border-border/60 bg-accent/20 p-3 text-xs text-muted-foreground">
            <div className="mb-1 flex items-center gap-2 font-medium uppercase tracking-wide text-accent-foreground/80">
              <Info className="h-3.5 w-3.5" />
              Quick tips
            </div>
            <ul className="space-y-1 pl-5">
              <li className="list-disc">On macOS, open the project folder in Finder, right-click, and choose “Copy as Pathname”.</li>
              <li className="list-disc">On Windows, hold Shift and right-click the folder, then select “Copy as path”.</li>
              <li className="list-disc">Alternatively, run <code className="rounded bg-secondary px-1">pwd</code> in your terminal after <code className="rounded bg-secondary px-1">cd</code> into the project.</li>
            </ul>
          </div>
          {githubRepoLink && (
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Need to clone? Open the repository in your browser.
            </a>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            className="w-full sm:w-auto"
            onClick={() => {
              onClear();
              onClose();
            }}
          >
            Clear Saved Path
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={handleSave}
            disabled={!value.trim()}
          >
            Save Path
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
