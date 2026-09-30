# Cricbuzz Clone — Technical & Agentic Coding Specification

> **Primary instruction for Claude Code:** inspect first, measure second, implement third, visually verify continuously.  
> **Reference:** `https://www.cricbuzz.com/`

## 1. Engineering Objective

Create a maintainable front-end implementation that reproduces the reference Cricbuzz homepage without redesigning it.

The implementation should separate:

```text
Reference Capture
      ↓
Structured Page Model
      ↓
Reusable UI Components
      ↓
Responsive Styling
      ↓
Playwright Visual Verification
```

## 2. First Action — Repository Recon

Before changing code, Claude Code must:

1. Inspect the repository tree.
2. Detect the current framework, package manager, build system, linting and test setup.
3. Reuse the existing stack when practical.
4. Read this specification and `CRICBUZZ_SPEC.md` completely.
5. Do not replace an existing working architecture without a concrete reason.

## 3. Reference Capture Workflow

Use Playwright to inspect the live reference site.

Capture at minimum:

```text
/homepage
  ├─ full-page screenshot
  ├─ first viewport screenshot
  ├─ desktop DOM snapshot
  ├─ mobile DOM snapshot
  ├─ visible text
  ├─ navigation hrefs
  ├─ image URLs + intrinsic dimensions
  └─ computed styles for major layout containers
```

For major elements, inspect:

- bounding box
- display / position
- width / height
- margin / padding
- font family / size / weight / line-height
- color / background-color
- border / radius
- box-shadow
- image object-fit / aspect ratio

Use these measurements to implement the clone. Do not infer measurements from memory.

## 4. Page Data Model

Keep volatile content separate from UI code.

Suggested conceptual model:

```ts
NavigationItem
MatchFilter
CompetitionGroup
MatchCard
NewsItem
PhotoItem
ScheduleItem
VideoItem
StoryItem
SpecialItem
FooterLinkGroup
```

The exact TypeScript shape is implementation detail; the important rule is that UI components consume structured data rather than embedding large amounts of page copy directly in JSX.

## 5. Component Architecture

Use small reusable components with clear responsibilities.

```text
App
├─ SiteHeader
│  ├─ PrimaryNav
│  └─ MoreMenu
├─ MatchHub
│  ├─ MatchFilters
│  ├─ CompetitionGroup
│  └─ MatchCard
├─ HomeSections
│  ├─ LatestNews
│  ├─ LatestPhotos
│  ├─ Schedule
│  ├─ FeaturedVideos
│  ├─ TopStories
│  └─ Specials
└─ SiteFooter
```

Do not create one giant homepage component.

## 6. Styling Strategy

Preferred order of truth:

```text
Measured reference styles
        ↓
Design tokens / CSS variables
        ↓
Component styles
```

Create tokens for repeated values such as:

- page/container widths
- spacing scale
- typography scale
- border colors
- surface colors
- text colors
- radius values
- shadows

The actual values must be sampled from the current reference site.

Avoid arbitrary Tailwind utility accumulation when it makes pixel-level adjustment difficult. Use the repo's existing styling convention when one exists.

## 7. Asset Strategy

Do not invent substitute imagery merely to make the page look busy.

During development:

- Prefer reference image URLs when permitted and technically usable.
- Otherwise download only assets that are appropriate for the assignment and store them locally.
- Preserve the reference aspect ratio and crop behavior.
- Use placeholders only when an asset cannot reasonably be reused; placeholders must preserve the same geometry.

Do not modify the visible design to accommodate different image sizes.

## 8. Data Strategy

Implement the UI against a local typed data source first.

Recommended separation:

```text
src/data/
  homepage.ts

src/components/
  ...

src/styles/
  ...
```

Keep live scraping/data acquisition outside the presentation components.

The homepage content is dynamic; therefore, never treat today's match list or headlines as permanent requirements. The structure is stable; content is not. citeturn721852view0

## 9. Routing

Implement the homepage first.

For navigation links:
- preserve the visible labels
- preserve link affordances
- use discovered reference hrefs where practical
- use clearly isolated local placeholder routes only when the assignment requires navigation but the target page is not being cloned yet

Do not invent a large route tree just for completeness.

## 10. Agentic Implementation Loop

Claude Code should execute work in small verification cycles:

```text
READ
 → INSPECT REFERENCE
 → PLAN
 → IMPLEMENT ONE SECTION
 → RUN APP
 → PLAYWRIGHT SCREENSHOT
 → COMPARE
 → FIX GEOMETRY/STYLES
 → REPEAT
```

Do not implement the entire page blindly and inspect only at the end.

### Phase A — Foundation

- repository reconnaissance
- reference capture
- application shell
- header/navigation
- global container/layout tokens

### Phase B — Primary Content

- match hub
- latest news
- photos
- schedule
- featured videos

### Phase C — Editorial Content

- top stories
- specials
- footer

### Phase D — Responsive Fidelity

- desktop comparison
- tablet comparison
- mobile comparison
- fix overflow, wrapping, spacing, and card density

### Phase E — Final Verification

- production build
- lint/type-check
- Playwright smoke tests
- screenshots at fixed viewport sizes

## 11. Visual QA

Use deterministic viewport sizes for repeatable comparison.

Example baseline:

```text
desktop: 1440 × 900
tablet: 1024 × 1366
mobile: 390 × 844
```

For each viewport verify:

- header height and alignment
- page max-width
- section ordering
- column widths
- card dimensions
- typography wrapping
- image crop
- borders/dividers
- vertical rhythm
- footer placement
- horizontal overflow

These viewport dimensions are testing baselines, not claims about Cricbuzz breakpoints.

## 12. Playwright Acceptance Tests

At minimum:

```text
✓ homepage loads
✓ primary navigation is visible
✓ match filters are visible
✓ match groups render
✓ latest news renders
✓ photos render
✓ schedule renders
✓ videos render
✓ top stories render
✓ specials render
✓ footer renders
✓ no unexpected horizontal scrollbar
✓ mobile navigation remains usable
```

Add visual snapshots only after the DOM structure is stable.

## 13. Error / Fallback Behavior

The clone should fail gracefully when an image or optional data item is unavailable:

- preserve card geometry
- preserve spacing
- avoid layout collapse
- show a neutral fallback state

Do not hide whole sections because one item failed.

## 14. Performance Guardrails

- lazy-load below-the-fold images
- avoid unnecessary client-side state
- do not introduce a state-management library unless required
- keep components composable
- avoid large third-party UI kits for a fidelity-focused clone

## 15. Security / Integrity

- no secrets in source code
- no hard-coded API keys
- sanitize any external data before rendering where relevant
- do not execute remote script content as application code
- keep reference-site scraping/capture tooling separate from runtime UI code

## 16. Claude Code Working Rules

Claude Code must follow these rules while implementing:

> **RULE 01 — Reference over imagination**  
> When a visual decision is uncertain, inspect the reference.

> **RULE 02 — No redesign**  
> Do not improve, modernize, simplify, or restyle the interface unless explicitly instructed.

> **RULE 03 — Small commits of work**  
> Complete and verify one section before moving to the next.

> **RULE 04 — Preserve existing project conventions**  
> Do not rewrite the repository architecture unnecessarily.

> **RULE 05 — Visual proof**  
> Every major UI milestone must be checked with a Playwright screenshot.

> **RULE 06 — No fabricated requirements**  
> Missing information must be discovered from the reference or left explicitly unresolved; it must not be invented.

## 17. Completion Gate

Before declaring the work complete, Claude Code must report:

```text
Reference inspected: YES/NO
Homepage implemented: YES/NO
Desktop verified: YES/NO
Tablet verified: YES/NO
Mobile verified: YES/NO
Playwright checks passing: YES/NO
Build passing: YES/NO
Known visual deviations: <explicit list>
```

A clone is not complete merely because it runs. It is complete when its structure and visual behavior have been checked against the reference.
