export interface TaskData {
  id: string;
  title: string;
  description: string;
  required: boolean;
  content: {
    overview: string;
    installation: {
      label: string;
      steps: Array<{
        platform: string;
        command?: string;
        instructions?: string;
      }>;
    };
    verification: {
      command: string;
      expectedOutput: string;
    };
    tips?: Array<{
      type: 'info' | 'warning';
      message: string;
    }>;
  };
}

export const A1S1_TASKS: TaskData[] = [
  {
    id: 'python',
    title: 'Install Python 3.12+',
    description: 'Set up Python environment',
    required: true,
    content: {
      overview: 'Python is the primary language for backend development in this course.',
      installation: {
        label: 'Installation:',
        steps: [
          {
            platform: 'macOS (Homebrew)',
            command: 'brew install python@3.12'
          },
          {
            platform: 'Windows',
            instructions: 'Download from python.org or Windows Store'
          }
        ]
      },
      verification: {
        command: 'python3 --version',
        expectedOutput: 'Python 3.12.x or higher'
      }
    }
  },
  {
    id: 'poetry',
    title: 'Install Poetry',
    description: 'Python dependency management',
    required: true,
    content: {
      overview: 'Poetry manages Python dependencies and virtual environments.',
      installation: {
        label: 'Installation:',
        steps: [
          {
            platform: 'All platforms',
            command: 'curl -sSL https://install.python-poetry.org | python3 -'
          }
        ]
      },
      verification: {
        command: 'poetry --version',
        expectedOutput: 'Poetry version'
      },
      tips: [
        {
          type: 'warning',
          message: 'You may need to restart your terminal after installation'
        }
      ]
    }
  },
  {
    id: 'postgresql',
    title: 'Install PostgreSQL',
    description: 'Relational database',
    required: true,
    content: {
      overview: 'PostgreSQL is the database system we\'ll use throughout the course.',
      installation: {
        label: 'Installation:',
        steps: [
          {
            platform: 'macOS (Homebrew)',
            command: 'brew install postgresql@16'
          },
          {
            platform: 'Windows',
            instructions: 'Download from postgresql.org'
          }
        ]
      },
      verification: {
        command: 'brew services start postgresql@16',
        expectedOutput: 'Service started'
      }
    }
  },
  {
    id: 'docker',
    title: 'Install Docker Desktop',
    description: 'Containerization platform',
    required: false,
    content: {
      overview: 'Docker provides consistent development environments.',
      installation: {
        label: 'Installation:',
        steps: [
          {
            platform: 'All platforms',
            instructions: 'Download Docker Desktop from docker.com'
          }
        ]
      },
      verification: {
        command: 'docker --version',
        expectedOutput: 'Docker version'
      }
    }
  },
  {
    id: 'vscode',
    title: 'Install VS Code',
    description: 'Code editor with Python support',
    required: true,
    content: {
      overview: 'VS Code is the recommended editor for this course.',
      installation: {
        label: 'Installation:',
        steps: [
          {
            platform: 'All platforms',
            instructions: 'Download from code.visualstudio.com'
          }
        ]
      },
      verification: {
        command: 'code --version',
        expectedOutput: 'VS Code version'
      },
      tips: [
        {
          type: 'info',
          message: 'Install these extensions: Python (Microsoft), Pylance, SQLTools'
        }
      ]
    }
  },
  {
    id: 'git',
    title: 'Install Git',
    description: 'Version control system',
    required: true,
    content: {
      overview: 'Git is essential for version control and collaboration.',
      installation: {
        label: 'Installation:',
        steps: [
          {
            platform: 'macOS (Homebrew)',
            command: 'brew install git'
          },
          {
            platform: 'Windows',
            instructions: 'Download from git-scm.com'
          }
        ]
      },
      verification: {
        command: 'git --version',
        expectedOutput: 'git version'
      }
    }
  }
];
