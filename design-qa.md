# RetrofitRank design QA

Final result: passed

Scope: local responsive concept website and isolated synthetic demo. This result does not certify production readiness, engineering accuracy, legal compliance or a live integration.

## Visual truth and normalization

Source visual truth: `/Users/prajaktagaikwad/.codex/generated_images/01a17362-7abc-7d13-82ee-0a4200d267f7/exec-056f5623-766e-4f70-937f-ff4df69e1d19.png`. This is the original approved 1065×1477 mockup; the separately named Desktop copy was unavailable. It was opened and visually verified.

Implementation: http://localhost:5173/. Hero state: top of home, light theme, no authentication, entrance animation settled. `qa/hero-after.png` is 1065×788 pixels at a 1065×788 CSS viewport and DPR 1. Source hero crop is x0/y0/1065/788. No browser chrome or density scaling in the comparison. `qa/hero-comparison-after.jpg` combines both at full size. `qa/hero-detail-comparison.jpg` combines the actual headline, subtitle, body and CTA regions at full size and was opened to assess legibility and wrapping.

Evidence state: first step of the pinned scene. `qa/evidence-after.png` is 1065×757 at DPR 1; crop y68–757 removes the implementation header. Source y788–1477 gives the matching 1065×689 content region. `qa/evidence-comparison-after.jpg` combines these content regions. Both combined images were opened and inspected, not inferred from file paths.

Additional implementation screenshots: `qa/home-desktop.png` (1440×1000), `qa/home-mobile.png` (390×844), `qa/demo-desktop.png`, `qa/demo-review-desktop.png`, `qa/demo-mobile.png`, `qa/offers-desktop.png`, `qa/film-desktop.png`, `qa/request-success.png`. Screenshots are real browser captures.

## Findings and comparison history

1. P1, hero typography: the initial condensed display font changed the approved headline's visual weight and width. P2, hero composition: header/spacing pushed content lower and the building/label cropped too far right. Evidence: `qa/hero-before.png`, `qa/hero-comparison-before.jpg`. Fixed with DM Serif Display, adjusted scale/tracking, 68px navigation, hero spacing and illustration placement. Re-captured as `qa/hero-after.png` and compared in the combined final image.
2. P2, subtitle: focused comparison showed an overly narrow subtitle. Changed it to Georgia with responsive sizing. Re-captured and re-opened both full-view and focused combined comparisons. Broad single-line subtitle now preserves the approved hierarchy.
3. P2, evidence scene: initial heading was narrow, labels were muted and the DEMO badge sat too low. Evidence: `qa/evidence-before.png`. Changed heading width/font, label contrast and badge position. Re-captured and compared in `qa/evidence-comparison-after.jpg`.
4. P2, offer gallery: adjacent offscreen panels bled into margins. Added a bounded overflow window around the translating track. `qa/offers-desktop.png` now shows one clean offer/artifact pair with next/previous and skip controls. Inactive desktop panels are inert; mobile displays all five vertically.
5. P2, mobile access page: illustration overlapped the heading. Removed negative illustration margin; the revised mobile page was opened and the separation verified.
6. P2, form success feedback: completion could remain outside the viewport. Added focused, scrolled-to local success panel. Re-tested required-field errors and successful preparation; `qa/request-success.png` shows the complete confirmation and downloadable-draft action.
7. P2, demo provenance at narrow width: small labels needed more legible sizing. Increased label sizes and retained a sticky synthetic/no-control banner. `qa/demo-mobile.png` shows the source document, timestamps, uncertainty and persistent boundary.

No actionable P0/P1/P2 findings remain in the inspected prototype states.

## Required fidelity surfaces

- Fonts and typography: headline three-line wrapping, broad subtitle, editorial hierarchy, Inter UI copy and small data labels checked in combined full/focused views. Self-hosted fonts resolve. The source does not provide a font file; DM Serif Display is a deliberate close match, not a claim of exact font identity. Supporting pages use a narrower editorial serif intentionally.
- Spacing and layout: desktop hero proportions, header rule, CTA spacing, scene layout, gallery boundaries, queue/source/review columns and mobile stacking inspected. No page-wide overflow at 390 or 1440. Seventeen footer destinations checked at 390, with results in `qa/route-checks.json`.
- Colors/tokens: cobalt, ivory, yellow, navy and pale-blue surface roles are consistent. Blue/yellow remain the brand accents; no green status semantics. White/ivory text is used on cobalt; body copy uses navy. Generated source texture/color grading is not replicated pixel-for-pixel.
- Image quality: original transparent architectural assets retain linework at desktop and mobile sizes. The implemented buildings are intentionally original assets in the approved visual language, not literal cutouts of the source mockup. No CSS/SVG substitute buildings, fake customer imagery or rasterized product tables. Film playback checked: duration 11 seconds, readyState 4, no media error, pause control works.
- Copy/content: approved hero thesis retained. Five separate offers and exact hypothesis units preserved. Buyer and ESCO channel roles remain distinct. DEMO labels, missing-data states, survey needs, uncertainty, human decision and no-control boundary visible. No unsupported savings, customer or certification claims.
- Icons/controls: Phosphor icons align consistently; buttons have hover/focus treatment. Menu, tabs, gallery navigation, FAQ, forms and review actions use semantic controls. Motion toggle pauses video and removes scrolling-dependent presentation; reduced-motion preference initializes it.

## Functional verification

- Mobile navigation and role-based demo entry.
- Ten consistent synthetic records; queue search including empty result; state filtering; reset.
- Rationale required before review action; blocked record cannot be marked reviewed.
- Local reviewed state reflected in packet; source tabs show dates and evidence.
- Export downloaded and inspected: synthetic label, three source items, explicit no-BMS boundary.
- Form native validation, separate consent boxes, local success feedback and draft action.
- Gallery next/previous and skip; no neighbor bleed after fix.
- Video play/pause and global motion toggle; paused video confirmed after global pause.
- Fresh final browser tab console: zero errors and warnings. An earlier development-only Vite reload error was resolved; it did not recur in the clean final tab.
- `npm run build`: passed.
- `npm test`: 7/7 passed (three data integrity/boundary checks and four hosting/package checks).

## Accepted differences and remaining scope

Navigation includes extra complete-site destinations; motion controls and skip links improve access. Added supporting sections/pages follow the approved art direction but have no exact source-frame counterpart. The building artwork is original and differs in façade and floor details. These are expected creative variations.

P3 follow-up: evaluate higher-resolution/vector production illustration assets if unusually large displays become a target. Full assistive-technology testing, deployed browser matrix, network performance and backend delivery remain release-stage work. Browser QA here covers local desktop/tablet-width source comparisons and 390px mobile layouts, not every device.

## Implementation checklist

- [x] Branding, favicon and approved color direction.
- [x] Varied illustrations, artifacts, film and scroll sections.
- [x] Supporting product, pricing, resources, company, contact and demo routes.
- [x] Responsive captures and combined source comparisons after fixes.
- [x] Local forms, review actions and labeled export verified.
- [x] Production build and seven automated checks.
- [ ] Public deployment, domain connection and live integrations (outside this local prototype handoff).

## Visual refinement revision — 25 October 2026

Replaced the pasted-overlay manifesto composition; added CTA/footer district art, an editorial footer, illustrated disclosures/resource cards, warm yellow surfaces and drawing-office sign-in film. Reviewed desktop/tablet/mobile and repaired observed crop, blend, contrast and close-icon issues. See `refinement-notes.md` for sources, generation prompts, behavior checks and evidence. This revision preserves the approved cobalt/ivory/yellow architecture direction and concept-only claims.

## Lenis / GSAP verification — 25 October 2026

Completed desktop (1440×1000) and mobile (390×844) browser verification of repeated directional entrances, word reveals, gallery navigation, route cleanup and motion toggling. No document overflow, duplicated split words or console errors in the inspected flow. Mobile reverse scrolling leaves the evidence heading fully visible. Motion-off restores the unsplit page and pauses video. Build and seven automated checks passed before this final visual pass; no implementation changes were needed during the pass. See `refinement-notes.md` and `qa/gsap-*.png`.

## Approved portfolio identity

Applied the third building concept throughout the shared header/footer and favicon/app metadata. Created horizontal/stacked SVG and PNG lockups, standalone marks, monochrome variants, optical favicons and a ZIP kit. Inspected 1440 px desktop and 390 px mobile; corrected a legacy mobile image-size rule. Verified light/dark assets load, no document overflow and accessible home-link labels remain. Build and seven existing tests passed. Screenshots: qa/portfolio-logo-*.png.


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


## Final local QA — 26 October 2026

Completed six audit steps: intro/handoff, navigation/routes, evaluation draft, sign-in/workspace, responsive closing sections, and build/diagnostics. No blocker found in tested local flows. Fixed the persistent intro handoff flag on return, portrait closing-title/roof overlap, and the 27px mobile motion tap target (now 44px). Verified desktop 1440×900, tablet 775×804 and mobile 390×844. Eighteen footer routes render without 404/overflow. Production build, seven tests and Remotion type-check pass; inspected browser console has no errors/warnings.

Full screenshot report: [Final QA](qa/final/report.html). Route results and build/test logs are in `qa/final/`. This remains a local prototype; live services, cross-browser/device coverage, network-throttled performance and full assistive-technology testing were not verified.
