# Architectural refinement — 25 October 2026

## Delivered

- Rebuilt the human-decision section with a separate editorial header and a continuous streetscape. Removed the opaque overlay that covered the illustration.
- Added an original commercial district in white, ivory and yellow to the cobalt evaluation CTA and navy footer. Added drafting grids and warm yellow surfaces; no green palette.
- Rebuilt the footer around an editorial invitation, a linked reading-room feature, grouped navigation, a district panorama, oversized live-text wordmark and separate legal links.
- Added illustrated Product and Approach disclosure panels, including mobile navigation.
- Added distinct illustrations to the three reading-room cards and subtle architectural backgrounds to product heroes.
- Reworked `/sign-in` as a complete drawing-office access page with a fixed fictional identity, role selection, privacy link and request-access path. It opens the synthetic demo; it does not authenticate users or collect credentials.
- Added a 10-second original drawing-office film alongside the existing 11-second building film. Videos pause offscreen and with the global motion switch; manual pause is retained while scrolling. Each has a local play/pause control.
- Added restrained card lifts, illustration zooms, arrow movement, animated link underlines, accordion feedback, disclosure icons and viewport-triggered entrances. Keyboard focus receives the actionable hover treatment. Reduced-motion CSS suppresses transitions/entrances.

## Research and decisions

Research used the configured Perplexity research tool. The source review informed composition and interaction patterns; it was not a pixel-level or animation audit of those sites.

- [Storey Architecture projects](https://www.storeyarchitecture.co.uk/projects) and [studio](https://www.storeyarchitecture.co.uk/studio): clear closing invitation and grouped site/legal/contact navigation. Applied a distinct editorial closing composition with clear navigation.
- [BIG architecture](https://big.dk/projects/architecture): architecture as the visual subject and clear end-of-page organization. Applied an original architectural panorama, rather than copying project imagery.
- [Linear](https://linear.app/homepage) and [Stripe](https://stripe.com/): clear next actions and structured closing sections. Applied an evaluation CTA and separate reading-room route.
- [W3C disclosure navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/): button disclosures, expanded state, keyboard access and Escape dismissal. Navigation opens on activation and is not hover-dependent.
- [W3C hover/focus guidance](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html): persistent, dismissible access to disclosed content. Essential information remains available without hovering.
- [web.dev motion accessibility](https://web.dev/learn/accessibility/motion): reduced-motion alternatives and user controls. Applied motion suppression, video pause controls and offscreen playback suspension.

## Generated artwork

Both assets were generated with ImageGen in **generate** mode, transparent background enabled. Original generated files remain untouched; copies are in `public/assets/`.

### district-night.png
Prompt: Original architectural website background illustration for RetrofitRank. Wide panoramic 3:2 axonometric architectural drawing of a compact commercial urban block: six varied buildings, older brick mill with sawtooth roof, mid-century office tower, low-rise courtyard offices, equipment rooftop, small trees and pathways. Precise retro architectural drafting, fine white and warm ivory linework with sparse bright yellow #ffdc00 details, intended for cobalt or navy background. Transparent background, no backing rectangle. Geometry lower two thirds, generous space above, whole block within image. No text, labels, logos, UI, people or green.

### drawing-office.png
Prompt: Original transparent architectural illustration for RetrofitRank navigation, company and sign-in pages. Detailed axonometric cutaway of a two-storey mid-century engineering studio: sawtooth roof, glazed entrance lobby, slim exterior stairs, rooftop HVAC, visible meeting table and drawing desks, courtyard tree. Crisp cobalt #003cff linework, tiny yellow #ffdc00 accents, translucent glazing and ivory wall planes. Retro architectural competition drawing. Complete subject on simple ground plane, transparent background, 3:2 landscape, ample breathing space. No text, labels, numbers, logos, people, green or UI. Distinct from a tall office tower.

`drawing-office-study.mp4` is a 1280×800, 24fps, silent 10-second motion composition made from that illustration, with a seamless periodic drift. It depicts an illustration, not footage of an actual building.

## Validation

- Browser visual review at 1440×1000, 775×804 (commented viewport), and 390×844.
- No horizontal document overflow on inspected home and sign-in views.
- Product disclosure Escape closes it and returns focus to its trigger.
- Mobile illustrated navigation fits within the viewport and provides sign-in access.
- Engineering-reviewer selection opens the labeled synthetic capital queue.
- Drawing-office video loaded, reported 10-second duration and played when visible.
- Global motion pause stopped video playback and removed entrance animation.
- Verified streetscape, CTA, footer, resource cards, and sign-in visually. Corrected a hover contrast issue on the blue resource card, the mobile close icon, video background seam and footer panorama crop during QA.
- Existing seven data/packaging tests pass; production build passes.

Evidence is saved in `qa/refined-*.png`. Frontend prototype boundaries remain: no production authentication, submitted leads, payment, live integrations or verified buyer commitments.

## Lenis and GSAP scroll choreography — 25 October 2026

- Installed Lenis 1.3.27 and GSAP 3.15.0, with ScrollTrigger and SplitText.
- Connected Lenis to the GSAP ticker and ScrollTrigger updates using one smooth-scroll animation loop. Native touch scrolling and the browser scrollbar remain available.
- Added masked, staggered word entrances with four directional treatments; alternating card/FAQ entrances; label wipes; image scale and translation; footer wordmark progression; and a thin page-progress indicator.
- Entrances play again when entering from either scroll direction and reverse after leaving. Sticky evidence and offer chapter headings use their section as the trigger so they stay visible while pinned.
- Routed offer controls through Lenis. Turning motion off destroys Lenis, restores split headings and inline animation styles, and uses immediate scrolling for programmatic controls. The GSAP layer also follows the operating system reduced-motion preference.
- Keyboard focus completes an ancestor entrance immediately, keeping interactive content usable without waiting for its reveal.
- Cleaned up timelines, split text, tickers and listeners on route changes and when motion is disabled.

Implementation references: [Lenis integration](https://github.com/darkroomengineering/lenis/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/). Official sources located with Perplexity search.

Validation: production build and all seven existing data/hosting tests passed. Final browser review completed at 1440×1000 and 390×844 after the HTTP preview was reopened. Verified forward/reverse entrances, fully visible sticky headings, next/previous offer controls, skip-gallery navigation, sign-in route transition, and return to the homepage. Motion-off removed Lenis and all 68 split-word wrappers, restored content visibility and paused the video; re-enabling restored exactly 68 wrappers with no nested duplicates. Mobile menu opening/closing and reverse scrolling passed, with no horizontal document overflow. No browser console errors were recorded in the tested flow. OS reduced-motion handling is implemented but was not separately emulated in this pass.

Evidence: `qa/gsap-home-desktop.png`, `qa/gsap-home-mobile.png`, and `qa/gsap-reverse-mobile.png`. Still screenshots show settled layout; bidirectional behavior was checked through browser scrolling and DOM inspection.


## Film and closing-section refinement — 2026-10-25

- Rebuilt the 11-second building film using fixed-position compositions and two-second crossfades; removed frame scroll transforms. Pause control verified in browser.
- Restructured the evaluation CTA into grouped copy/action and a separate architectural figure with its own caption; stacks on mobile.
- Rebuilt footer panorama with horizontal labels and separate illustration/wordmark areas, removing overlap and scrub transforms.
- Production build and all seven existing tests passed. Tablet (775px) and mobile (390px) visual checks completed; mobile has no horizontal overflow. Screenshot evidence in qa/structured-cta-tablet.png, qa/structured-footer-tablet.png, qa/structured-cta-mobile.png, qa/structured-footer-mobile.png.


## Look beyond the façade intro — 25 October 2026

- Added a 12-second Remotion film above the homepage hero: a slow façade study, an interior evidence reveal, and a pullback into an ivory building composition. Original illustrative plates retain the approved cobalt, navy, ivory and yellow identity.
- Exported separate desktop (1920×1080) and portrait (900×1600) MP4 compositions. Responsive HTML typography stays crisp and accessible over the film. Editable source is in `../../work/retrofitrank-intro`.
- Navbar is hidden and inert throughout the intro. On completion, Lenis scrolls to the hero and reveals the navbar; the landing position accounts for its 68px height. Pause, replay and skip controls are provided.
- Manual scrolling takes priority and cancels automatic handoff. Hidden tabs pause playback. Motion-off presents a still and an explicit entry control; operating-system reduced-motion handling is implemented but was not separately emulated in this pass.
- Verified desktop skip alignment and uninterrupted portrait autoplay through the full 12-second ending. Confirmed hero top at 68px, navbar visible, mobile overflow absent, and sign-in route unaffected.
- Production build, seven existing tests, and Remotion TypeScript checking passed. Both MP4 files report the expected 12-second duration and dimensions.
- Evidence: `qa/intro-desktop-opening.png`, `qa/intro-desktop-handoff.png`, `qa/intro-mobile-opening.png`, `qa/intro-mobile-handoff.png`, and `qa/intro-interior-art.jpg`.
- Inspiration used the saved Augustus recording captures. The original MOV was unavailable during this revision. This is an illustrated architectural film, not a surveyed building or a live data visualization.
