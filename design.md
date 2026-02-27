# Portfolio Design Spec

## Pages

### 1. Home / Hero
- Name + title: "Sean Welch | Software Engineer"
- Tagline: Brief 1-liner (AI/ML + Full-stack)
- CTA buttons: "View Projects" + "Contact"
- Subtle animation on load

### 2. About
- Photo placeholder
- Summary of background (from resume)
- Skills grid (tech stack, AI/ML, etc.)
- Download resume button

### 3. Projects
- Grid of project cards
- Each card: title, description, tags, GitHub link, live link (if applicable)
- Filter by category (AI/ML, Full-stack, Tools)

### 4. Contact / Connect
- Email link
- LinkedIn link
- GitHub link
- Simple form (optional, static)

## Design System

### Colors
- Background: Dark mode default (`#0a0a0a`)
- Surface: Slightly lighter (`#1a1a1a`)
- Primary accent: Cyan/teal (`#22d3ee`)
- Text: White (`#fff`) + muted (`#a1a1aa`)

### Typography
- Headings: Sans-serif (Inter or system font)
- Body: Same sans-serif
- Monospace for code snippets

### Layout
- Max-width: `1200px` centered
- Responsive: mobile-first, breakpoints at `640px`, `768px`, `1024px`
- Padding: `1.5rem` standard

### Components
- Navbar: sticky, logo left, links right
- Cards: rounded corners (`8px`), subtle border, hover lift
- Buttons: primary (cyan bg), secondary (outline)
- Footer: minimal, social links only

## Mobile
- Hamburger menu for nav
- Single column layouts
- Touch-friendly tap targets (`44px` min)
