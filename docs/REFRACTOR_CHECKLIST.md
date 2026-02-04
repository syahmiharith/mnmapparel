# Refactor Progress Checklist

## Motion System Modularization
- [x] Create hooks folder under client/src/hooks
- [x] Extract Lenis setup into `useLenisScroll`
- [x] Extract archive pin logic into `useArchivePin`
- [x] Extract status sidebar sync into `useStatusSidebar`
- [x] Extract reveal/scramble triggers into `useRevealText` + `useScrambleText`
- [x] Extract crosshair logic into `useCrosshair`
- [x] Create `MotionRoot` to compose hooks
- [x] Replace `MotionEffects` usage with `MotionRoot`
- [x] Verify reduced motion handling in all hooks

## DOM Query Refactor
- [x] Replace global `document.querySelector` calls with refs
- [x] Introduce context for shared refs (sections, status sidebar)
- [x] Remove unused global selectors
- [x] Replace reveal/scramble selectors with refs
- [x] Replace section observer queries with refs

## CSS & Styling
- [x] Identify section-specific styles in globals
- [x] Create CSS modules for sections (Hero, Archive, Factory, Process)
- [x] Move component-specific styles to modules
- [x] Move StickyChat styles to module
- [x] Move ArchiveSection styles to module
- [x] Move Hero section styles to module
- [x] Move Factory section styles to module
- [x] Move Process section styles to module
- [x] Move QuoteForm section styles to module
- [x] Move MetaLabel styles to module
- [x] Move ProofLabel styles to module
- [x] Move MotionChrome styles to module
- [x] Move CTA styles to module
- [x] Move DataList styles to module
- [x] Move shared section layout styles to module
- [x] Move ScrambleHeading styles to module
- [x] Keep CSS variables in globals
- [x] Verify no visual regressions

## Archive Section
- [ ] Confirm horizontal pin behavior intact
- [ ] Verify track visibility before pin and after unpin
- [ ] Check progress bar updates during pin
- [ ] Verify status lock during pin
- [ ] Validate overlay expand/collapse animation

## Accessibility
- [x] Audit keyboard navigation for sticky chat
- [x] Verify `aria` attributes on interactive elements
- [x] Check focus management on overlay open/close
- [ ] Confirm reduced motion compliance

## Backend Skeleton
- [x] Add `server/routes/products.py`
- [x] Wire router into `server/main.py`
- [x] Add basic schema/model placeholders

## Testing & QA
- [ ] Manual scroll test (slow + fast)
- [ ] Resize/refresh test for pin sections
- [ ] Mobile layout and CTA overlap check
- [ ] Regression check for scramble/reveal animations
