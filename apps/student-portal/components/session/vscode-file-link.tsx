"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useVSCodeWorkspace } from "@/hooks/use-vscode-workspace";

interface VSCodeFileLinkProps {
  path: string;
  label?: string;
  size?: "sm" | "md";
}

export function VSCodeFileLink({ path, label, size = "sm" }: VSCodeFileLinkProps) {
  const { openPath, hasWorkspacePath } = useVSCodeWorkspace();
  const displayLabel = label ?? path.split("/").pop() ?? path;

  return (
    <Button
      variant="outline"
      size={size === "sm" ? "sm" : undefined}
      className="w-full justify-start text-xs"
      title={hasWorkspacePath ? "Open in your local VS Code" : "Open in VS Code for Web"}
      onClick={() => openPath(path)}
    >
      <ExternalLink className="mr-2 h-3 w-3" />
      {displayLabel}
    </Button>
  );
}
