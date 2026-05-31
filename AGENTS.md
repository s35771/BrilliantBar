# AGENTS.md

Guidance for AI agents working in the **Pulsar Energy Bar** repository.

## Project overview

Static marketing landing page: plain HTML, CSS, and JavaScript. No build step, package manager, or backend.

| File | Role |
|------|------|
| `index.html` | Page structure and copy |
| `styles.css` | Layout, responsive design, visuals |
| `script.js` | Mobile nav, scroll header, reveal animations, signup form |

## Cursor Cloud specific instructions

### Services

| Service | Required? | How to run |
|---------|-----------|------------|
| Static HTTP server | **Yes** | `python3 -m http.server 4173` from repo root → http://localhost:4173 |
| Backend / database / Docker | N/A | Not in this repo |

Use a **tmux** session for the dev server so it stays up across shell commands (see README).

### Lint / test / build

There are no project-defined lint, test, or build scripts. Smoke-check the site by loading `/` and exercising client behavior (nav toggle, scroll, signup form success message).

### VM update script

The registered update script is a no-op (`true`) because there are no dependency manifests. Re-register via **SetupVmEnvironment** if `package.json` or similar is added later.

### Gotchas

- **Do not** put `python3 -m http.server` or other service startup in the VM update script — only dependency refresh belongs there.
- Google Fonts load from CDN; the page still works offline with system font fallbacks.
- Signup form is client-only (`preventDefault`); no API call on submit.
