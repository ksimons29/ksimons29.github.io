# Changelog

All notable changes to the Koos Simons portfolio site.

---

## [December 2025] - CI Maintenance

### Actions Workflow
- Restored CI workflow with actions/checkout@v4 and ruby/setup-ruby bundler-cache to avoid deprecated actions/cache@v2 failures
- Aligned CI to Ruby 3.2.2 and pinned Bundler 2.4.22 for consistent installs
- Updated dependencies to github-pages ~> 232 and html-proofer ~> 5.0

---

## [December 2024] - Design Refinement

### Issue #9: Warm Palette & Focused Spacing
- Extended hero colors (navy, terracotta) throughout the page for visual harmony
- Replaced disconnected teal accent (`#2d6a6a`) with navy (`var(--navy)`)
- Updated background from cold off-white (`#faf9f7`) to warm cream (`#f8f6f3`)
- Added terracotta accent family from hero subtitle
- Reduced spacing scale by ~30% for tighter, more intentional composition
- Added section-specific tokens: `--section-gap`, `--card-padding`, `--grid-gap`
- Updated section title accent bar from gold to terracotta
- Updated card borders to use new `--border-default` token
- Added dark mode equivalents for all new color tokens
- See `DESIGN_UPDATE_REPORT.md` for full details

---

## [December 2024] - Semantic Structure & Polish

### Issue #1: Semantic Page Structure
- Changed header subtitle from `<h2>` to `<p>` to reserve H2 for sections
- Updated About section heading from H3 to H2
- Changed content sections from `<div>` to `<section>` elements
- Updated section headings from H3 to H2 for proper hierarchy
- Changed list item cards from `<div>` to `<article>` elements
- Updated card titles from H4 to H3 for correct heading order
- Added `aria-label` attributes to sections for accessibility
- Section IDs now generated from titles for anchor navigation
- Updated CSS selectors to target new semantic structure
- Heading hierarchy now correct: H1 (name) → H2 (sections) → H3 (items) → H4 (sub-items)

### Branch Alignment
- Merged `master` into `main` to sync all latest changes
- Ensured both repos (current and archive) have identical content

### Typography & Layout Compactness
- Reduced spacing tokens by ~30% for tighter layout
- Section headers: 2.5rem → 1.75rem with tighter margins
- Card padding: simplified from 2.5rem/4rem → 1.25rem/2rem
- About text: changed from italic serif to clean sans-serif
- Profile image: reduced from 160px → 80px on desktop
- Removed decorative animations (float, gradient shift)
- Simplified hover effects (shadow only, no transforms)

### Mobile Responsiveness
- Fixed CSS specificity issue causing image to overlap text
- Profile image properly sized: 80px desktop, 55px tablet, 45px mobile, 40px small
- Added progressive image scaling across breakpoints
- Added max-width constraints on header text to prevent overflow
- Added extra-small screen support (≤360px) for iPhone SE and older devices
- Profile stays top-right on all screen sizes

### Header & Hero
- Deep blue gradient background (#1a1a2e → #16213e → #0f3460)
- Warm terracotta accent (#d4a373) for subtitle
- Badge-style subtitle with border and backdrop blur
- Tighter spacing between name and role
- Profile image positioned top-right with gold border

### Content Sections
- **Skills Section**: Product Management, Data & AI, and Tools categories with tag styling
- **Services Section**: Consulting offerings with teal card design (Data Governance, Data Management, Product Leadership)
- **Highlight Cards**: Three key highlights with teal accent (Product Discovery, Data & AI Systems, Cross-Functional Leadership)
- **Languages**: Visual progress bars for Dutch, English, Portuguese, German

### Experience Restructure
- Cognizant as umbrella employer (2016 - Oct 2025)
- Client projects as sub-entries: Rabobank, Nike EMEA, KPN, Gemeente Amsterdam
- Clearer separation of roles and responsibilities

### LLYLI Widget
- Floating survey widget in bottom-left corner
- Links to Tally.so survey
- Pulse animation for attention
- Tooltip on hover
- Hidden on mobile (smaller size) and print

### Beyond Work Section
- Hobby-like aesthetic with italic serif typography
- Decorative dot pattern
- Warm gradient background

### Dark Mode
- Complete dark theme support
- Adjusted colors for all components
- Respects system preference

### Accessibility & Print
- Focus states with gold outline
- Respects `prefers-reduced-motion`
- Print styles for clean PDF output
- Social icons hidden in print

---

## [Initial Setup] - Portfolio Foundation

### Custom Styling
- Created `assets/css/custom.css` with editorial luxury design
- Premium typography: Cormorant Garamond (display) + DM Sans (body)
- Sophisticated warm color palette (ink, paper, gold, wine accents)

### Profile Configuration
- Added profile image with compression (1.7MB → 33KB)
- Configured social links: LinkedIn, GitHub, WhatsApp, Email
- Set up `_config.yml` with full portfolio content

### Theme Setup
- Using `sproogen/modern-resume-theme` v2
- Custom includes: about.html, header.html, footer.html, section-*.html
- Custom layout overrides

---

## Issues Resolved

- [x] #1 - Rebuild page structure with semantic sections and consistent layout
- [x] #8 - Ensure same basepoint with the pagesetup is done (merged main ← master)
