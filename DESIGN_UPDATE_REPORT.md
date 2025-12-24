# Design Update Report: Warm Palette & Focused Spacing

**Issue:** #9 - Improvement sizing and colours
**Date:** December 2024

---

## 1. Styling System

The site uses **plain CSS with CSS custom properties** (variables) as the design token system.

- **Primary styling file:** `assets/css/custom.css` (2,083 lines)
- **Token location:** Lines 10-67 (`:root` block)
- **Architecture:** Single-file design system with semantic tokens for colors, spacing, typography, and shadows

---

## 2. Colour Inventory (Before)

| Colour | Hex | Where Used | Role |
|--------|-----|------------|------|
| Ink | `#1a1a1a` | Body text, headings | Primary text |
| Ink-soft | `#2d2d2d` | Secondary text | Muted text |
| Ink-muted | `#525252` | Tertiary text | Disabled/caption |
| Paper | `#faf9f7` | Body background | Primary background |
| Paper-warm | `#f5f3ef` | Section backgrounds | Surface |
| Cream | `#ebe7df` | Borders, dividers | Border |
| Gold | `#c9a227` | Accents, profile border | Primary accent |
| Teal | `#2d6a6a` | Highlight cards, service cards | Secondary accent |
| Hero gradient | `#1a1a2e`→`#0f3460` | Header background | Hero |
| Terracotta | `#d4a373` | Hero subtitle badge | Hero accent |

**Issues identified:**
- Cold off-white background (`#faf9f7`) disconnected from warm hero
- Teal accent (`#2d6a6a`) unrelated to hero's navy/terracotta palette
- Harsh visual transition between hero and content sections

---

## 3. New Palette

| Token | Hex | Purpose |
|-------|-----|---------|
| `--ink` | `#1f1f1f` | Primary text (warmer) |
| `--ink-muted` | `#5a5450` | Muted text (warmer) |
| `--paper` | `#f8f6f3` | Background (warmer cream) |
| `--paper-warm` | `#f3f0eb` | Surface (warmer) |
| `--terracotta` | `#d4a373` | Accent from hero subtitle |
| `--terracotta-soft` | `#e6c9a8` | Light terracotta |
| `--terracotta-deep` | `#b8875a` | Dark terracotta |
| `--navy` | `#2c4a6e` | Accent from hero gradient |
| `--navy-soft` | `#3d5a7a` | Light navy |
| `--navy-deep` | `#1a3a5c` | Dark navy |
| `--border-default` | `#e0dcd4` | Primary border (warmer) |
| `--border-muted` | `#ebe7df` | Subtle border |

**Rationale:** All new colors extend from the hero section's navy gradient and terracotta subtitle badge, creating visual harmony across the page.

---

## 4. Spacing Inventory (Before)

| Token | Value | Where Used | Role |
|-------|-------|------------|------|
| `--space-xs` | `0.375rem` (6px) | Small gaps | Micro spacing |
| `--space-sm` | `0.75rem` (12px) | Inline spacing | Small spacing |
| `--space-md` | `1.25rem` (20px) | Component padding | Medium spacing |
| `--space-lg` | `2rem` (32px) | Section padding | Large spacing |
| `--space-xl` | `3rem` (48px) | Section gaps | Extra large |
| `--space-2xl` | `4rem` (64px) | Major sections | Maximum |

**Issues identified:**
- Section padding too generous (64px)
- Excessive whitespace between content blocks
- Cards felt "airy" with too much internal padding
- Page rhythm felt loose and spread out

---

## 5. New Spacing Scale

| Token | Value | Purpose | Replaces |
|-------|-------|---------|----------|
| `--space-xs` | `0.25rem` (4px) | Micro spacing | 6px |
| `--space-sm` | `0.5rem` (8px) | Small gaps | 12px |
| `--space-md` | `1rem` (16px) | Component padding | 20px |
| `--space-lg` | `1.5rem` (24px) | Section padding | 32px |
| `--space-xl` | `2rem` (32px) | Section gaps | 48px |
| `--space-2xl` | `3rem` (48px) | Major sections | 64px |
| `--section-gap` | `2.5rem` (40px) | Between sections | New |
| `--card-padding` | `1rem` (16px) | Card internal | New |
| `--grid-gap` | `1rem` (16px) | Grid spacing | New |

**Reduction:** ~30% tighter spacing across all tokens for a more intentional, focused composition.

---

## 6. Files Changed

| File | Changes Made |
|------|--------------|
| `assets/css/custom.css` | - Updated all design tokens in `:root`<br>- Added new color tokens (terracotta, navy, border)<br>- Reduced spacing scale by ~30%<br>- Added section-specific tokens<br>- Replaced teal (`#2d6a6a`) with `var(--navy)` (6 instances)<br>- Updated section title accent from gold to terracotta<br>- Updated card borders to use `var(--border-default)`<br>- Added dark mode equivalents for new tokens |

---

## 7. Rationale

### Colour Harmony
The hero section establishes the site's visual identity with its navy gradient (`#1a1a2e` → `#0f3460`) and terracotta accent (`#d4a373`). By extending these colors throughout the page:

- **Navy** replaces disconnected teal in highlight cards, service cards, and CTAs
- **Terracotta** adds warmth to section title accents
- **Warmer neutrals** (`#f8f6f3` vs `#faf9f7`) bridge the hero-to-content transition

### Spacing Density
The ~30% reduction in spacing creates:

- **Tighter section rhythm** matching the reference image
- **More intentional composition** with less "empty air"
- **Better visual hierarchy** as elements relate more closely
- **Professional, editorial feel** consistent with the portfolio's luxury aesthetic

### Accessibility
- All text colors maintain WCAG AA contrast ratios
- Dark mode tokens preserve readability
- Focus states remain visible with gold/terracotta outlines

---

## 8. Visual Comparison

| Element | Before | After |
|---------|--------|-------|
| Body background | Cold off-white | Warm cream |
| Card accents | Teal (#2d6a6a) | Navy (var(--navy)) |
| Section title bar | Gold | Terracotta |
| Section gaps | 48-64px | 40px |
| Card padding | 20-32px | 16px |
| Overall feel | Airy, spread out | Focused, intentional |

---

*Generated for Issue #9 - December 2024*
