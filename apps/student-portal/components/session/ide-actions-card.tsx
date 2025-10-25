"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useVSCodeWorkspace } from "@/hooks/use-vscode-workspace";
import {
  BookOpen,
  Code,
  Copy,
  ExternalLink,
  FileText,
  Info,
  Play,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { WorkspacePathModal } from "./workspace-path-modal";

interface IDEActionsCardProps {
  ideFiles?: string[];
  testCommand?: string;
  hintsPath?: string;
  rubricPath?: string;
  starterFile?: string;
}

export function IDEActionsCard({
  ideFiles = [],
  testCommand,
  hintsPath,
  rubricPath,
  starterFile,
}: IDEActionsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const {
    workspacePath,
    hasWorkspacePath,
    usingEnvWorkspace,
    repositoryUrl,
    copyCommand,
    openProject,
    openPath,
    openWeb,
    openWebFile,
    setWorkspacePath,
    clearWorkspacePath,
  } = useVSCodeWorkspace();

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timeout = window.setTimeout(() => setCopyStatus("idle"), 2500);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const infoTooltip = hasWorkspacePath
    ? usingEnvWorkspace
      ? "Links open your local VS Code using the path provided via environment variables."
      : "Links open files in your local VS Code workspace."
    : "We fall back to VS Code for Web when a local path isn't configured.";

  const handleCopyCommand = async () => {
    const result = await copyCommand();
    if (result === "copied") setCopyStatus("copied");
    else if (result === "error" || result === "unavailable") setCopyStatus("error");
  };

  return (
    <>
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <CardTitle className="text-lg">IDE Actions</CardTitle>
            </div>
            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsModalOpen(true)}
              title="Configure or update your local VS Code path"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
            <span>{infoTooltip}</span>
          </div>
          {hasWorkspacePath && (
            <p className="text-xs text-muted-foreground">
              Using workspace:{" "}
              <code className="rounded bg-secondary px-1">
                {workspacePath}
              </code>
              {usingEnvWorkspace ? " (from environment)" : ""}
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={openProject}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    {hasWorkspacePath ? "Open Project in VS Code" : "Open in VS Code (Web)"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>
                    {hasWorkspacePath
                      ? "Open the entire project in your local VS Code"
                      : "Open the project in VS Code for Web (browser-based)"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => starterFile ? openWebFile(starterFile) : openWeb()}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {starterFile ? "Open Starter File in VS Code Web" : "VS Code for Web"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>
                    {starterFile
                      ? "Jump directly to the main file you need to edit"
                      : "Open the project in VS Code for Web"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleCopyCommand}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {hasWorkspacePath ? "Copy VS Code Command" : "Copy Clone Command"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>
                    {hasWorkspacePath
                      ? "Copy command and paste it in your terminal to open VS Code"
                      : "Copy git clone command and paste it in your terminal"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {copyStatus === "copied" && (
              <p className="text-xs text-green-500">Copied to clipboard.</p>
            )}
            {copyStatus === "error" && (
              <p className="text-xs text-destructive">
                Unable to copy. Use the configure button to view the command.
              </p>
            )}
          </div>

          {ideFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Quick Open Files:</p>
              {ideFiles.slice(0, 3).map((file, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs"
                  title={hasWorkspacePath ? "Open in your local VS Code" : "Open in VS Code for Web"}
                  onClick={() => openPath(file)}
                >
                  <ExternalLink className="mr-2 h-3 w-3" />
                  {file.split("/").pop()}
                </Button>
              ))}
            </div>
          )}

          {testCommand && (
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                alert(`Run this command in your terminal:\n\n${testCommand}`);
              }}
            >
              <Play className="mr-2 h-4 w-4" />
              Run Tests
            </Button>
          )}

          {hintsPath && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => openPath(hintsPath)}
              title={hasWorkspacePath ? "Open hints in your project" : "Open hints in VS Code for Web"}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              View Hints
            </Button>
          )}

          {rubricPath && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => openPath(rubricPath)}
              title={hasWorkspacePath ? "Open rubric in your project" : "Open rubric in VS Code for Web"}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Rubric
            </Button>
          )}
        </CardContent>
      </Card>

      <WorkspacePathModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(path) => {
          setWorkspacePath(path);
          setIsModalOpen(false);
        }}
        onClear={clearWorkspacePath}
        initialValue={workspacePath}
        repositoryUrl={repositoryUrl}
      />
    </>
  );
}
