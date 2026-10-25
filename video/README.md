# RetrofitRank — Look beyond the façade

Editable Remotion source for the homepage's 12-second architectural intro.

## Compositions

| Composition | Dimensions | Duration |
|---|---|---|
| BeyondTheFacade | 1920 × 1080 | 360 frames / 30 fps |
| BeyondTheFacadeMobile | 900 × 1600 | 360 frames / 30 fps |

The frame-driven sequence approaches a façade, reveals an interior with an editorial yellow annotation, then pulls back to the existing building illustration on ivory. The annotation represents the story of evidence, not real monitoring data. Source images are original concept illustrations, not surveyed properties.

## Preview and export

```sh
npm ci
npm run dev
npx tsc --noEmit
npx remotion render BeyondTheFacade ../public/assets/intro-facade-desktop.mp4 --codec=h264 --crf=24 --concurrency=1
npx remotion render BeyondTheFacadeMobile ../public/assets/intro-facade-mobile.mp4 --codec=h264 --crf=24 --concurrency=1
```

If the bundled browser cannot run on your machine, pass `--browser-executable` with the path to a compatible local Chrome executable.

The website's `src/IntroFilm.jsx` owns responsive typography, playback controls, chapter labels and the Lenis handoff. The clean video exports contain artwork only. There is no audio track. Desktop is approximately 7.2 MB; portrait is approximately 5 MB.
