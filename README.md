# RetrofitRank

Local, responsive concept website and isolated synthetic product demo. This is a frontend prototype, not an operating retrofit service. No live integrations, building controls, real customer records, payments, account authentication or external form delivery are implemented.

## Run

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

Preview: http://localhost:5173/

```sh
npm run build
npm test
```

Build output: `dist/client` (static frontend), plus a worker and hosting manifest produced by the bundled packaging script. Seven automated checks cover data eligibility, rejected recommendations, quote units and static/deep-link hosting. The source can be deployed to a static host with SPA fallback routing; no deployment or domain configuration has been performed.

## Design

Approved direction: architectural drawing office; cobalt `#003CFF`, warm ivory `#FFFEF4`, yellow `#FFDC00`, navy `#111344`, pale blue `#EDF0FF`. No green. DM Serif Display leads the hero, Georgia provides the broad subtitle/wordmark, Instrument Serif leads supporting editorial pages, and Inter handles product/UI copy. Fonts are self-hosted through Fontsource. Phosphor supplies interface icons.

Original generated illustrations: building hero, exploded building and portfolio streetscape. Original building mark, favicon and touch icon are included. The 11-second silent MP4 uses these original illustrations with camera movement and a dissolve; it is an architectural concept film, not evidence of surveyed buildings or live software. All product tables, cards and interactions are rendered HTML, not pasted UI images.

Home sections deliberately vary: architectural hero, sticky exploded evidence scene, three-building comparison, horizontal five-offer gallery, capital queue table, film, streetscape backdrop, responsibility strip, yellow evaluation sequence, FAQs and closing CTA. Hover/focus states and a persistent decorative-motion toggle are included. Mobile and reduced-motion layouts use ordinary vertical flow.

## Routes

- `/`: complete marketing narrative
- `/products`: suite overview
- `/products/desk`, `/products/review`, `/products/proof`, `/products/signal`, `/products/report`: five separate offer pages
- `/platform`, `/why-change`, `/solutions`, `/solutions/portfolio-asset-managers`, `/solutions/esco-partners`
- `/pricing`, `/evaluation`, `/trust`, `/integrations`, `/company`
- `/resources`, `/resources/three-building-memo`, `/resources/data-dictionary`, `/resources/pilot-protocol`
- `/request-evaluation`, `/request-demo`, `/contact`, `/waitlist`: local request-draft flows
- `/sign-in` or `/signin`: fictional role selection, no credentials
- `/demo`: searchable ten-building capital queue
- `/demo/buildings/RR-DEMO-101` through `RR-DEMO-110`: record deep links
- `/demo/packet/RR-DEMO-101`: review packet deep link
- `/legal/privacy`, `/legal/terms`

## Functional boundaries

The demo includes a queue, evidence tabs, missingness, source dates, assumptions, task/reviewer ownership, evaluation record and exportable JSON packet. Review actions require a rationale and only change local state. Missing bills, unknown occupancy/equipment and other blockers do not enter the ranked shortlist. A rejected equipment-age recommendation remains visible. Reset and refresh restore fixtures. Exports retain DEMO/SYNTHETIC labeling and the no-control boundary.

Forms validate required fields and explicit follow-up permission; optional marketing consent stays separate. Submission prepares a downloadable local draft. It does not send, book, subscribe or collect data remotely. Analytics event stubs are in memory only. There are no successful real campaign or qualified buyer claims.

Pricing is explicitly a test hypothesis: normalization $2,000/20 buildings; screening $120/building; scenario memo $750/building; incentive file $400/project; M&V tracker $600/month/portfolio. No checkout.

## QA evidence

See `design-qa.md` and `qa/`. Desktop captured at 1440px, source comparisons at 1065px, mobile at 390px. Includes actual rendered queue, source/review pane, form feedback and film screenshots.

## Before public release

Confirm name/domain rights and business contact details; finalize privacy/terms and consent ownership; wire an approved lead endpoint and deletion/retention process; validate analytics consent and campaign attribution; run deployed cross-browser, accessibility, performance and security checks; configure repository, hosting and domain. Real records require procurement/legal permission, a named data owner, engineering-review owner and agreed historical comparator. Progress beyond demonstration only after the specified paid screening commitment and decision gate. No autonomous controls.

### Architectural refinement

The updated home page includes a composed streetscape, illustrated evaluation CTA and editorial panorama footer. `/sign-in` now includes a second original architectural film and fictional-role access to the demo. See [refinement notes](refinement-notes.md) for research sources, generated-asset prompts and QA evidence.

## Scroll motion

`src/scroll-motion.js` owns Lenis, GSAP ScrollTrigger and masked SplitText choreography. It includes repeatable directional entrances, scroll-linked architectural imagery, footer motion and a page-progress line. The existing global motion control removes this layer; OS reduced-motion preferences disable GSAP choreography. See `refinement-notes.md` for implementation references and current validation status.

## Homepage intro source

The homepage opens with the 12-second “Look beyond the façade” film, with desktop and portrait exports, playback controls, and a smooth transition to the hero. Editable Remotion scenes and original plates are in [`video/`](video/README.md); this project has its own dependencies. The website can run using the included MP4 exports without installing Remotion.

Final local QA: [`qa/final/report.html`](qa/final/report.html).
