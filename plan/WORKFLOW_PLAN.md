# Cricbuzz Clone — Agentic Coding Workflow Plan

> **Use with:** `CRICBUZZ_SPEC.md` + `CRICBUZZ_TECH.md`
> **Primary agent:** Claude Code
> **Goal:** reproduce the visible Cricbuzz homepage faithfully. No redesign, no invented UI.

---

## 0. Source-of-Truth Rule

Claude Code must treat the three files as the implementation contract:

```text
CRICBUZZ_SPEC.md
        +
CRICBUZZ_TECH.md
        ↓
WORKFLOW_PLAN.md
        ↓
Live Cricbuzz reference
        ↓
Implementation
```

When these documents do not answer a visual or behavioral question, inspect the live reference. Do not fill gaps with assumptions.

---

## 1. Master Agent Loop

```text
READ DOCS
   ↓
RECON REPOSITORY
   ↓
CAPTURE REFERENCE
   ↓
CREATE IMPLEMENTATION PLAN
   ↓
IMPLEMENT ONE PHASE
   ↓
RUN APP
   ↓
PLAYWRIGHT SCREENSHOT
   ↓
COMPARE WITH REFERENCE
   ↓
FIX GEOMETRY / STYLE / RESPONSIVENESS
   ↓
ACCEPT PHASE
   ↓
NEXT PHASE
```

**Hard rule:** never implement the whole homepage first and visually inspect only at the end.

---

# Phase 1 — Repository Reconnaissance

### Objective
Understand the existing project before changing anything.

### Claude Code actions

1. Inspect the complete repository tree.
2. Identify:
   - framework
   - package manager
   - entry points
   - build command
   - dev command
   - lint/type-check setup
   - test setup
   - existing styling approach
3. Read `CRICBUZZ_SPEC.md` completely.
4. Read `CRICBUZZ_TECH.md` completely.
5. Identify reusable existing infrastructure.
6. Do not rewrite the current architecture without a concrete reason.

### Deliverable
A short `RECON.md` or equivalent internal plan containing:

```text
Current stack:
Package manager:
Run command:
Build command:
Test command:
Styling approach:
Existing reusable components:
Potential conflicts:
Recommended implementation path:
```

### Gate
Do not start UI implementation until the repository structure is understood.

---

# Phase 2 — Live Reference Capture

### Objective
Create measurable evidence of the current Cricbuzz homepage.

### Capture

Use Playwright against `https://www.cricbuzz.com/`.

```text
Desktop
├─ first viewport screenshot
├─ full-page screenshot
├─ DOM snapshot
├─ visible text
├─ nav labels + hrefs
├─ image URLs + dimensions
└─ computed styles

Mobile
├─ viewport screenshot
└─ DOM snapshot
```

### Measure major elements

For header, match hub, major sections, cards, images and footer collect:

```text
bounding box
width / height
display / position
margin / padding
font family
font size / weight / line-height
text color
background color
border / radius
shadow
image aspect ratio / object-fit
```

### Deliverable
Reference evidence stored locally for repeatable comparison, for example:

```text
reference/
├─ desktop-home.png
├─ desktop-full.png
├─ mobile-home.png
├─ desktop.json
└─ mobile.json
```

### Gate
Measured reference evidence exists before styling decisions are made.

---

# Phase 3 — Page Blueprint

### Objective
Translate the reference into a component/data blueprint without redesigning it.

### Confirm this hierarchy from the reference

```text
SiteHeader
├─ PrimaryNav
└─ MoreMenu

MatchHub
├─ MatchFilters
├─ CompetitionGroup
└─ MatchCard

HomeSections
├─ LatestNews
├─ LatestPhotos
├─ Schedule
├─ FeaturedVideos
├─ TopStories
└─ Specials

SiteFooter
```

### Data model

Keep volatile content separate from components:

```text
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

### Gate
Component boundaries and data responsibilities are defined before implementation.

---

# Phase 4 — Foundation

### Objective
Build the visual shell first.

### Implement

1. Application shell.
2. Global page container.
3. Header.
4. Primary navigation.
5. More-menu affordance.
6. Core design tokens.

### Token sources

Use the measured reference values for:

```text
container width
spacing
font scale
text colors
surface colors
border colors
radii
shadows
```

### Verify

```text
Run app
  ↓
Open homepage
  ↓
Playwright screenshot
  ↓
Compare first viewport
```

### Gate
Header geometry, navigation alignment, page width and global spacing are visually close before proceeding.

---

# Phase 5 — Match Hub

### Objective
Reproduce the dense cricket match area accurately.

### Implement

```text
MATCHES
├─ All
├─ Live Now
└─ Today

Competition groups
├─ International
├─ League
├─ Domestic
└─ Women
```

Preserve the distinction between:

```text
live/current
upcoming/preview
completed/result
```

Keep the presentation compact and information-dense.

### Verify

Check:

- filter alignment
- group hierarchy
- score/result density
- card/row heights
- spacing
- status styling
- overflow/wrapping

### Gate
Match area matches the reference geometry and density at desktop and mobile.

---

# Phase 6 — Primary Content Sections

Implement one section at a time.

## 6A — Latest News

```text
headline
relative timestamp
More News
```

Verify list density, typography and row spacing.

## 6B — Latest Photos

```text
image
story title
date
More Photos
```

Verify image ratio, crop and spacing.

## 6C — Schedule

```text
upcoming fixtures
More Matches
```

Verify compact fixture layout and information hierarchy.

## 6D — Featured Videos

```text
video item/card
duration
title
View All / More Videos
```

Preserve the additional lower featured-video section visible on the reference.

### Per-section workflow

```text
Implement section
      ↓
Run app
      ↓
Screenshot section
      ↓
Compare reference
      ↓
Correct styles
      ↓
Accept section
```

### Gate
All primary content sections are structurally and visually aligned.

---

# Phase 7 — Editorial Sections + Footer

### Implement

```text
Top Stories
├─ category/eyebrow
├─ headline
└─ summary

Specials
├─ headline
└─ descriptive copy

Footer
├─ Apps
├─ Follow Us
└─ Company / legal links
```

### Verify

Focus on:

- section order
- column structure
- card density
- typography hierarchy
- divider/border treatment
- footer geometry

### Gate
Everything below the primary content follows the reference hierarchy without adding new sections.

---

# Phase 8 — Asset Fidelity

### Objective
Make the visual result faithful without creating substitute design.

### Rules

1. Prefer usable reference assets where appropriate.
2. Otherwise store suitable local assets.
3. Preserve aspect ratios.
4. Preserve crop behavior.
5. Use neutral placeholders only when necessary.
6. Never change card geometry to compensate for asset differences.

### Verify

Compare representative images side-by-side with the reference.

---

# Phase 9 — Responsive Fidelity

Test the completed page at these deterministic baselines:

```text
Desktop  1440 × 900
Tablet   1024 × 1366
Mobile    390 × 844
```

These are testing sizes, not claims about Cricbuzz breakpoints.

### Verify at each viewport

```text
header
container width
section order
columns
card dimensions
text wrapping
image crop
borders/dividers
vertical rhythm
footer
horizontal overflow
mobile navigation usability
```

### Workflow

```text
Desktop
  ↓
Fix
  ↓
Tablet
  ↓
Fix
  ↓
Mobile
  ↓
Fix
  ↓
Re-check Desktop
```

### Gate
No obvious structural drift, unexpected overflow or broken navigation across all three baselines.

---

# Phase 10 — Interaction Verification

Verify the visible interaction contract:

```text
✓ primary navigation links
✓ All / Live Now / Today filters
✓ section More / View All actions
✓ match items clickable
✓ news items clickable
✓ photo items clickable
✓ video items clickable
✓ responsive menu usable
```

Use actual reference hrefs where practical. Do not invent a large route tree.

---

# Phase 11 — Visual QA Loop

### Objective
Eliminate visible drift.

For every major discrepancy:

```text
IDENTIFY
  ↓
MEASURE REFERENCE
  ↓
MEASURE CLONE
  ↓
PATCH SMALLEST RESPONSIBLE COMPONENT
  ↓
SCREENSHOT AGAIN
```

### Prioritize fixes in this order

```text
1. page geometry
2. header/navigation
3. section placement
4. column/card dimensions
5. typography
6. spacing
7. image crop
8. borders/dividers/shadows
9. minor interaction details
```

Do not compensate for a parent-layout problem with random child margins.

---

# Phase 12 — Automated Acceptance

Run:

```text
lint
↓
type-check
↓
build
↓
Playwright smoke tests
↓
visual screenshots
```

### Minimum Playwright checks

```text
✓ homepage loads
✓ primary nav visible
✓ match filters visible
✓ match groups render
✓ latest news renders
✓ photos render
✓ schedule renders
✓ videos render
✓ top stories render
✓ specials render
✓ footer renders
✓ no unexpected horizontal scrollbar
✓ mobile navigation usable
```

---

# Phase 13 — Completion Gate

Claude Code must not declare completion until it can report:

```text
Reference inspected: YES
Homepage implemented: YES
Desktop verified: YES
Tablet verified: YES
Mobile verified: YES
Playwright checks passing: YES
Build passing: YES
Known visual deviations: <explicit list>
```

A running application is not sufficient. Completion requires visual verification against the reference.

---

# Claude Code Operating Rules

> **01 — Read before coding**  
> Read both source docs completely.

> **02 — Inspect before styling**  
> Use the live reference and measured DOM/computed styles.

> **03 — Reference over imagination**  
> Uncertain UI decisions must be resolved by inspection.

> **04 — No redesign**  
> Do not modernize, simplify, beautify or restyle the source design.

> **05 — One section at a time**  
> Implement and verify incrementally.

> **06 — Preserve repository conventions**  
> Reuse the current stack unless there is a concrete reason not to.

> **07 — Keep data separate**  
> Volatile content belongs in structured data, not inside presentation logic.

> **08 — Visual proof required**  
> Every major milestone gets a Playwright screenshot.

> **09 — No fabricated requirements**  
> Missing information is discovered, explicitly left unresolved, or excluded.

> **10 — Report deviations honestly**  
> Never mark a visual mismatch as complete.

---

# Recommended Claude Code Execution Prompt

Paste this after placing the source documents in the repository root:

```text
Read CRICBUZZ_SPEC.md, CRICBUZZ_TECH.md, and WORKFLOW_PLAN.md completely before modifying anything.

You are implementing the Cricbuzz homepage clone defined by those documents.

Follow this execution order exactly:

1. Repository reconnaissance.
2. Live Cricbuzz reference capture with Playwright.
3. Measure DOM geometry and computed styles.
4. Produce the implementation blueprint.
5. Implement the foundation/header/navigation.
6. Run the app and verify with Playwright before continuing.
7. Implement the match hub.
8. Verify with Playwright.
9. Implement Latest News, Latest Photos, Schedule and Featured Videos one section at a time.
10. Implement Top Stories, Specials and Footer.
11. Verify assets and responsive behavior.
12. Run desktop, tablet and mobile visual comparisons.
13. Run lint, type-check, build and Playwright acceptance tests.
14. Report any remaining visual deviations explicitly.

Do not redesign the UI.
Do not invent sections, components, badges, statistics, navigation items, routes or interactions.
When uncertain, inspect the live reference instead of guessing.
Use measured reference values for geometry and styling.
Do not rewrite the existing project architecture unless there is a concrete reason.
Do not declare completion until the completion gate in WORKFLOW_PLAN.md passes.

Start with repository reconnaissance only. Do not begin UI coding until reconnaissance and reference inspection are complete.
```
