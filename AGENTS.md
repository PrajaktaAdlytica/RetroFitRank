# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved intro direction — 25 October 2026

- The user selected direction 2, “Look beyond the façade,” for a full-screen intro before the homepage hero. Preserve the approved cobalt, ivory, navy and yellow identity and the current building-based logo.
- The intro is a silent 12-second Remotion film: façade approach, interior/evidence reveal, then an architectural pullback into the ivory palette.
- Do not show the navbar over the intro. When playback completes, smoothly scroll to the hero and reveal the normal navbar. Keep pause, replay and skip controls. Manual scrolling must take priority over automatic scrolling, and reduced-motion visitors must be able to enter without autoplay.
- Editable video source is in `video/`. The website uses desktop and portrait MP4 exports, with responsive HTML typography over the art so the copy remains crisp and accessible.
