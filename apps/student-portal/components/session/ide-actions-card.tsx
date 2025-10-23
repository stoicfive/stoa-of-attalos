import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Play, BookOpen, FileText, ExternalLink } from "lucide-react";

interface IDEActionsCardProps {
  sessionId: string;
  ideFiles?: string[];
  testCommand?: string;
  hintsPath?: string;
  rubricPath?: string;
}

export function IDEActionsCard({ 
  sessionId, 
  ideFiles = [], 
  testCommand,
  hintsPath,
  rubricPath 
}: IDEActionsCardProps) {
  const projectRoot = "/Users/adamtokola/dev/StoicFive GitHub/stoa-of-attalos";
  
  const openInVSCode = (filePath: string) => {
    // VS Code URI scheme: vscode://file/absolute/path/to/file
    const absolutePath = `${projectRoot}/${filePath}`;
    const vscodeUri = `vscode://file${absolutePath}`;
    window.open(vscodeUri, '_blank');
  };

  const openProjectInVSCode = () => {
    const vscodeUri = `vscode://file${projectRoot}`;
    window.open(vscodeUri, '_blank');
  };

  const openTeacherFile = (path: string) => {
    const absolutePath = `${projectRoot}/${path}`;
    const vscodeUri = `vscode://file${absolutePath}`;
    window.open(vscodeUri, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Code className="h-5 w-5" />
          IDE Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Open Project */}
        <Button 
          variant="default" 
          className="w-full"
          onClick={openProjectInVSCode}
        >
          <Code className="mr-2 h-4 w-4" />
          Open Project in VS Code
        </Button>

        {/* Open Specific Files */}
        {ideFiles.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Quick Open Files:</p>
            {ideFiles.slice(0, 3).map((file, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => openInVSCode(file)}
              >
                <ExternalLink className="mr-2 h-3 w-3" />
                {file.split('/').pop()}
              </Button>
            ))}
          </div>
        )}

        {/* Run Tests */}
        {testCommand && (
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => {
              // For now, just show the command
              // In Phase 3, this will actually execute tests
              alert(`Run this command in your terminal:\n\n${testCommand}`);
            }}
          >
            <Play className="mr-2 h-4 w-4" />
            Run Tests
          </Button>
        )}

        {/* View Hints */}
        {hintsPath && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => openTeacherFile(hintsPath)}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            View Hints
          </Button>
        )}

        {/* View Rubric */}
        {rubricPath && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => openTeacherFile(rubricPath)}
          >
            <FileText className="mr-2 h-4 w-4" />
            View Rubric
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
