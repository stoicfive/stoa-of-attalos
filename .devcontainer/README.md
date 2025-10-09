# Development Container

This directory contains the configuration for a consistent development environment using VS Code Dev Containers.

## What's Included

- **Node.js 20**: Latest LTS version for JavaScript/TypeScript development
- **Git**: Version control
- **GitHub CLI**: For GitHub operations
- **VS Code Extensions**:
  - ESLint for code linting
  - Prettier for code formatting
  - TypeScript language support
  - Vitest test explorer

## Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [VS Code](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Usage

1. Open this project in VS Code
2. When prompted, click "Reopen in Container" (or use Command Palette: `Dev Containers: Reopen in Container`)
3. Wait for the container to build and dependencies to install
4. Start coding with a consistent environment!

## Features

- **Automatic Dependency Installation**: Dependencies are installed automatically when the container is created
- **Port Forwarding**: Ports 3000, 5173, and 8080 are automatically forwarded
- **Git Configuration**: Your local Git config is mounted into the container
- **Format on Save**: Code is automatically formatted with Prettier on save
- **ESLint Auto-fix**: ESLint issues are automatically fixed on save when possible

## Customization

To add additional tools or VS Code extensions, edit the `devcontainer.json` file.

## Troubleshooting

- **Container won't build**: Try rebuilding without cache: Command Palette → `Dev Containers: Rebuild Container Without Cache`
- **Slow performance**: Adjust Docker Desktop resource allocation in settings
- **Port conflicts**: Change the forwarded ports in `devcontainer.json`
