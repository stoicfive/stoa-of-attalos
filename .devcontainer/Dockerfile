FROM mcr.microsoft.com/devcontainers/javascript-node:1-20.18-bookworm

# Lock versions for reproducibility
ENV NODE_VERSION=20.18.1 \
    PYTHON_VERSION=3.12.8 \
    PNPM_VERSION=9.15.0 \
    POETRY_VERSION=1.8.5 \
    UV_VERSION=0.5.11 \
    RUFF_VERSION=0.8.4 \
    PLAYWRIGHT_VERSION=1.49.0 \
    ESLINT_VERSION=9.17.0 \
    PRETTIER_VERSION=3.4.2 \
    TYPESCRIPT_VERSION=5.7.2

# Install Python 3.12 and development tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    python3.12=${PYTHON_VERSION}-* \
    python3-pip \
    python3.12-venv \
    postgresql-client-16 \
    git-secrets \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set Python 3.12 as default
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3.12 1 \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 1

# Install pnpm globally (locked version)
RUN npm install -g pnpm@${PNPM_VERSION}

# Install Poetry for Python dependency management (locked version)
RUN curl -sSL https://install.python-poetry.org | POETRY_VERSION=${POETRY_VERSION} python3 - \
    && echo 'export PATH="/root/.local/bin:$PATH"' >> ~/.bashrc

# Install uv (fast Python package installer)
RUN pip install uv==${UV_VERSION}

# Install Ruff globally (locked version)
RUN pip install ruff==${RUFF_VERSION}

ENV PATH="/root/.local/bin:$PATH"

# Pre-install common tools with locked versions
RUN npm install -g \
    eslint@${ESLINT_VERSION} \
    prettier@${PRETTIER_VERSION} \
    typescript@${TYPESCRIPT_VERSION} \
    @playwright/test@${PLAYWRIGHT_VERSION}

# Pre-install Playwright browsers (Chromium only for speed)
RUN npx playwright install --with-deps chromium

# Set up workspace
WORKDIR /workspace

# Configure git-secrets for security
RUN git secrets --register-aws --global \
    && git secrets --add 'password\s*=\s*.+' --global \
    && git secrets --add 'api[_-]?key\s*=\s*.+' --global \
    && git secrets --add 'secret[_-]?key\s*=\s*.+' --global \
    && git secrets --add 'DATABASE_URL\s*=\s*postgresql://[^@]+:[^@]+@' --global
