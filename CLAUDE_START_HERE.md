# Claude start here

## Goal
Rebuild my portfolio website from scratch in a way that is stable, simple to maintain, and easy to roll back, while reusing the current visual layout and content as reference.

The final live URL must remain
https://ksimons29.github.io/

## Non negotiables
1. Keep the public URL unchanged.
2. No invented facts, metrics, titles, employers, dates, or claims.
3. Mobile and desktop must both look clean and consistent.
4. One deploy path only, via GitHub Actions.
5. Easy rollback available at any moment.

## Current situation
I have issues with branches and deployments in the current repo setup. I want a clean reset that avoids existing branch chaos and avoids fragile theme internals.

## Recommended approach
Use a clean staging repository, build the new site there, then swap repository names to go live.

Staging repo name
ksimons29.github.io_next

Live repo name
ksimons29.github.io

Old repo name after swap
ksimons29.github.io_old

## What to reuse
1. The current website look and layout as the visual reference.
2. The content from the current site and repo.
3. The section structure and ordering that already works for hiring managers.

## What to rebuild
1. A new site implementation using Astro.
2. A data driven content structure so edits are low risk.
3. A single GitHub Actions deploy pipeline to GitHub Pages.

## Claude tasks
### Task 1 Create a clean staging repo and local workspace
1. Create a new public GitHub repo named ksimons29.github.io_next.
2. Clone it locally.
3. Scaffold a fresh Astro site in the repo root.
4. Add minimal pages and components that match my current structure.

Local commands to use
1. git clone git@github.com:ksimons29/ksimons29.github.io_next.git
2. cd ksimons29.github.io_next
3. npm create astro@latest .
4. npm install
5. npm run dev

Notes
Use git switch for branch creation if needed.
Avoid complex branching. Keep main only in the staging repo.

### Task 2 Lock down content as a single source of truth
Create a single content file that powers the whole site.

Required files
1. src content profile.yml
2. src pages index.astro
3. src components for each section

Content schema goals
1. Hero fields: name, title, location, links
2. About section: short paragraphs
3. Experience entries: company, role, dates, bullets, tools
4. Outcomes or projects: title, context, what I did, impact, links
5. Education
6. Optional: side projects

Rules
If any detail is unclear, mark it as Needs confirmation and use safe wording.

### Task 3 Recreate the design with minimal components
Build only a small set of components.

Minimum component list
1. Layout
2. Hero
3. Section
4. CardList
5. Footer

Design requirements
1. Clean typography and spacing system
2. Consistent max width and readable line length
3. Consistent card style across sections
4. Strong mobile layout, no horizontal scroll
5. Simple, warm, professional color palette

### Task 4 Add the deploy pipeline
Create a single GitHub Actions workflow that builds and deploys to GitHub Pages.

Requirements
1. Use GitHub Pages source as GitHub Actions in repo settings.
2. Only one workflow file.
3. Workflow triggers on push to main.
4. The build output must deploy successfully on every push.

Implementation instruction
Use the official Astro GitHub Pages deployment template for workflow content.
Do not paste experimental or outdated workflows.

### Task 5 Verify staging before going live
Verification checklist
1. Desktop: looks like the current layout, but cleaner and tighter.
2. Mobile: all sections readable, no overlap, no broken spacing.
3. Links: all external links work.
4. Performance: fast load, images optimized.
5. Accessibility: headings in order, contrast acceptable.

Deliverable
Provide a short checklist report with pass or fail and the exact files changed.

### Task 6 Cutover to go live by swapping repo names
Only do this after staging is approved.

Steps on GitHub
1. Rename current live repo ksimons29.github.io to ksimons29.github.io_old
2. Rename staging repo ksimons29.github.io_next to ksimons29.github.io
3. In the new live repo settings, set Pages source to GitHub Actions
4. Trigger the deploy workflow once if needed

Expected result
The new site is live at https://ksimons29.github.io/

### Task 7 Rollback plan
Rollback options
1. Quick rollback by renaming repos back to previous names.
2. Keep a tag in the old repo that represents the last known good state.

## Definition of done
1. Site is live on the correct URL.
2. One clean deploy pipeline.
3. Repo structure is simple and understandable.
4. Content is centralized in one file.
5. No deployment errors, no branch confusion.

## Deliverables from Claude in this repo
1. A working Astro site.
2. Content file src content profile.yml populated from my existing content.
3. Minimal component set that matches the current look.
4. GitHub Actions workflow for Pages deploy.
5. A short README with local dev commands and how to update content.

## What I will provide if needed
If Claude cannot reliably extract content, I will paste the current resume text and the key sections I want on the page.
