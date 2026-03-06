

## Comprehensive Site Reconstruction Plan

This plan covers 7 major changes across the site: Members page rebuild, Resources removal, Gallery-to-Avenue conversion, Footer simplification, Home page background, animations for remaining pages, and tab switch animations.

---

### 1. Reconstruct Members Page with Sorting Menu

**Current state:** Simple tabs (Core, Board, General) with no sorting.

**Changes to `src/pages/Members.tsx`:**
- Add a search/filter bar at the top with:
  - A text search input to filter members by name
  - A dropdown `Select` component to sort by: Name (A-Z), Name (Z-A), Position, Joining Date
  - A category filter using styled buttons or a `Select` for: All, Core Members, Board of Directors, General Body
- Replace the current `Tabs` with this new filtering system so all members display in one grid, filterable and sortable
- Maintain the existing member dialog on click
- Keep framer-motion scroll animations on cards

---

### 2. Remove Resources Page Completely

**Files affected:**
- Delete `src/pages/Resources.tsx`
- Remove the `/resources` route from `src/App.tsx`
- Remove "Resources" from `navLinks` in `src/components/Navbar.tsx`
- Remove "Resources" from footer links in `src/components/Footer.tsx`

---

### 3. Convert Gallery to Avenue

**Changes to `src/pages/Gallery.tsx` (rename conceptually to Avenue):**
- Rename the page title to "Avenues"
- Replace the gallery grid with 7 avenue cards, each representing a service avenue:
  1. Professional Development (PDD)
  2. Diversity, Equity & Inclusivity (DEI)
  3. Community Service (CMD)
  4. Public Relations (PRO)
  5. Public Image (PIO)
  6. Club Service (CSD)
  7. International Service (ISD)
- Each avenue card will have an icon, title, brief description, and a list of related past events
- Rename the file to `src/pages/Avenue.tsx`

**Routing and navigation updates:**
- Update `src/App.tsx`: change `/gallery` route to `/avenue`, import Avenue instead of Gallery
- Update `src/components/Navbar.tsx`: change "Gallery" label to "Avenue" and path to `/avenue`
- Update `src/components/Footer.tsx`: same change

---

### 4. Reconstruct Footer

**Changes to `src/components/Footer.tsx`:**
- Remove the "Quick Links" column
- Remove the "Explore" column
- Remove the "Affiliated With" section
- Remove the line "A youth-led community service club under Rotary International, District 3131."
- Replace with a "Contact Us" section containing:
  - **Official Address:** S.No. 44/1, Sinhgad College Of Pharmacy, Vadgaon (Bk.), Off Sinhgad Road, Pune (M.S.), India 411 041
  - **Email:** rotaractscop@gmail.com
  - **Phone:** +91-9529936483
- Keep the brand logo/name, social icons, and bottom copyright bar
- Simplified 2-column layout: Brand + Contact on left, Socials on right

---

### 5. Home Page Background Image

**Changes to `src/pages/Home.tsx`:**
- Replace the current grid of 6 small background images with a single full-bleed background image that completely covers the hero section
- The image will sit behind all text with a dark overlay for readability
- Use `object-cover` with reduced opacity and brightness to create an immersive effect
- Keep all existing hero content (motto, title, buttons, stats) layered on top

---

### 6. Animate Remaining Pages

**Pages to update:**
- `src/pages/Info.tsx` -- Add framer-motion `fadeUp` variants to header, contact cards, club detail cards, and FAQ items with staggered scroll-triggered animations
- `src/pages/Join.tsx` -- Add framer-motion animations to header, benefits list, requirements card, and form card
- `src/pages/Avenue.tsx` (new) -- Built with framer-motion animations from the start

All animations will follow the existing pattern: `motion.div` with `whileInView`, `viewport={{ once: true }}`, and staggered delays.

---

### 7. Tab Switch Animations

**Changes to `src/pages/About.tsx`:**
- Track the active tab in state
- Wrap `TabsContent` children in `AnimatePresence` with `motion.div` that fades and slides in on tab change
- Use `key` prop tied to the active tab value so `AnimatePresence` detects the switch

**Changes to `src/pages/Members.tsx`:**
- Since tabs are being replaced with a filter system, animate the grid re-render when filters change using `AnimatePresence` and `layout` animations on the card grid

---

### Technical Summary

| Change | Files Modified | Files Created | Files Deleted |
|--------|---------------|---------------|---------------|
| Members page | Members.tsx | -- | -- |
| Remove Resources | App.tsx, Navbar.tsx, Footer.tsx | -- | Resources.tsx |
| Gallery to Avenue | App.tsx, Navbar.tsx, Footer.tsx | Avenue.tsx | Gallery.tsx |
| Footer rebuild | Footer.tsx | -- | -- |
| Home background | Home.tsx | -- | -- |
| Animate pages | Info.tsx, Join.tsx | -- | -- |
| Tab animations | About.tsx | -- | -- |

