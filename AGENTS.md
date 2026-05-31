# AGENTS.md

Guidance for AI agents working in the **BrilliantBar** repository.

## Repository status

This repository is currently a **greenfield stub**: it contains only `README.md` (project title). There is no application source, dependency manifests, Docker configuration, CI workflows, or test suites yet.

When implementation is added, update this file and the VM update script accordingly.

## Cursor Cloud specific instructions

### Services

| Service | Status |
|---------|--------|
| Application / API / UI | **Not present** — nothing to start |
| Database / cache / queue | **Not configured** |
| Docker Compose stack | **Not present** |

No dev servers need to be running until the project is scaffolded.

### VM tooling (available on Cloud Agent VMs)

- **Git** — repository operations (`git status`, branches, push)
- **Node.js** — via nvm (v22.x); **npm** and **pnpm** available
- **Python** — 3.12.x at `/usr/bin/python3`

### Lint / test / build

No project-specific commands exist yet. When you add a stack, document commands here and in `README.md`, for example:

- JavaScript/TypeScript: `pnpm install`, `pnpm lint`, `pnpm test`, `pnpm dev`
- Python: `uv sync` or `pip install -r requirements.txt`, `pytest`, etc.

### Update script (VM startup)

The registered update script is a no-op (`true`) because there are no dependency manifests to refresh. Replace it via **SetupVmEnvironment** once `package.json`, `pyproject.toml`, or similar files exist.

### Gotchas

- Do not assume `node_modules`, virtualenvs, or Docker images exist — they are not created until manifests and setup docs are added.
- Hot-reload and service startup steps belong in this section or `README.md`, **not** in the VM update script.
