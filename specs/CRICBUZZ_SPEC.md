# Cricbuzz Clone — Product & UI Specification

> **Source of truth:** `https://www.cricbuzz.com/`  
> **Observation date:** 2026-09-30  
> **Goal:** reproduce the visible Cricbuzz homepage experience as faithfully as possible. Do not redesign it.

## 1. Scope

Build a front-end clone of the Cricbuzz homepage with the same information hierarchy, navigation structure, card/list patterns, spacing rhythm, typography treatment, and responsive behavior visible on the reference site.

**Rule:** the live reference wins over assumptions. If the page changes, update the implementation from the captured DOM/screenshots rather than inventing UI.

## 2. Current Page Structure

Observed on the reference homepage:

```text
Top navigation
├─ Live Scores
├─ Schedule
├─ Archives
├─ News
├─ Series
├─ Teams
├─ Videos
├─ Rankings
└─ More

Match strip / score navigation
├─ MATCHES
├─ All
├─ Live Now
└─ Today

Match groups
├─ International
├─ League
├─ Domestic
└─ Women

Main content
├─ Live / current match cards
├─ Latest News
├─ Latest Photos
├─ Schedule
├─ Featured Videos
├─ Top Stories
├─ Featured Videos (expanded section)
└─ Specials

Footer
├─ Apps
├─ Follow Us
└─ Company / legal links
```

This structure is verified from the current homepage crawl. citeturn721852view0turn126477view0

## 3. Navigation Contract

Use the exact visible labels from the current reference:

`Live Scores · Schedule · Archives · News · Series · Teams · Videos · Rankings · More` citeturn721852view0

The `More` item must remain a navigation affordance; its expanded content should be discovered from the reference site rather than fabricated.

## 4. Match Area

The top match area is a compact, information-dense cricket scoreboard/navigation block.

Required behavior:
- Preserve the `All / Live Now / Today` filter pattern.
- Preserve the competition grouping: `International`, `League`, `Domestic`, `Women`.
- Preserve the visual distinction between live/current, upcoming/preview, and completed results.
- Match rows/cards must remain scannable and compact.
- Do not replace the match area with a generic sports dashboard.

The reference currently exposes match links, competition groupings, live states, previews, scores, and secondary actions such as `Forecast`, `Schedule`, and `Points Table`. citeturn721852view0

## 5. Content Sections

### Latest News

A dense vertical list of current headlines with relative timestamps and a `More News` action. citeturn721852view0

### Latest Photos

A visual strip/list of photo stories with title + date and a `More Photos` action. citeturn721852view0

### Schedule

A compact list of upcoming fixtures with a `More Matches` action. citeturn721852view0

### Featured Videos

Video cards/items with duration labels, title, and a `View All` / `More Videos` action. The current page also exposes a second expanded `FEATURED VIDEOS` section lower on the page. citeturn721852view0turn126477view0

### Top Stories

Editorial stories grouped by competition/topic. Each item can contain an eyebrow/category label, headline, and short summary. citeturn126477view0

### Specials

Editorial feature cards/list entries with headline and descriptive copy. citeturn126477view0

## 6. Visual Fidelity Rules

The clone must retain the reference site's overall visual language:

- Dense sports-news layout rather than a large marketing-style layout.
- Strong horizontal sectioning and compact cards/lists.
- Reproduce the reference's actual colors, borders, radii, shadows, spacing, font sizing, and container widths by measuring the live DOM/computed styles.
- Reproduce image aspect ratios/crops from the reference content.
- Do not add gradients, glassmorphism, oversized hero text, floating widgets, decorative blobs, or other visual treatments unless they are present on the reference.
- Do not "modernize" the UI.
- Do not simplify away dense sections that are visible on the reference.

## 7. Responsive Behavior

Reproduce the reference behavior at:

- desktop
- tablet
- mobile

The responsive implementation must be based on observed breakpoint behavior from the live site. Do not invent breakpoint-specific UI variants.

## 8. Content Fidelity

For the clone/demo, content may be represented as structured mock data **only where necessary for local rendering**, but the shape, ordering, labels, states, and density must match the reference.

Never invent:
- new navigation categories
- new sections
- fabricated badges
- made-up statistics
- fake product features
- alternative card layouts
- unrelated CTAs

Current live headlines and match data are volatile and should not be hard-coded as permanent product requirements. The current homepage is content-heavy and changes frequently. citeturn721852search1

## 9. Interaction Contract

At minimum, reproduce the visible interaction affordances:

- primary navigation links
- match filters (`All`, `Live Now`, `Today`)
- section-level `More` / `View All` actions
- clickable match/news/photo/video items
- responsive menu behavior

Interaction destinations should be mapped from the actual reference links discovered during implementation rather than guessed.

## 10. Definition of Done

A build is accepted only when:

- The first viewport has the same hierarchy and major geometry as the reference.
- Major sections appear in the same order.
- Navigation labels and grouping match the reference.
- Match/news/photo/video density is visually comparable.
- Responsive layouts remain faithful at desktop, tablet, and mobile widths.
- Playwright screenshots show no obvious structural drift from the reference.
- No unverified UI elements have been added.

## 11. Non-Goals

Do not attempt to recreate Cricbuzz's complete production backend, proprietary data infrastructure, authentication, streaming infrastructure, or editorial CMS unless explicitly required by a separate assignment.

Do not imply that the clone is an official Cricbuzz product.
