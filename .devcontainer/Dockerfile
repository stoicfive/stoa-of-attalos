FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm

# Install Python 3.12 and pip
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    python3.12 \
    python3-pip \
    python3.12-venv \
    postgresql-client \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set Python 3.12 as default
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3.12 1 \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 1

# Install Poetry for Python dependency management
RUN curl -sSL https://install.python-poetry.org | python3 - \
    && echo 'export PATH="/root/.local/bin:$PATH"' >> ~/.bashrc

ENV PATH="/root/.local/bin:$PATH"

# Set up workspace
WORKDIR /workspace

# Install Playwright browsers (will be done in postCreateCommand)
# This is just the setup for the container
