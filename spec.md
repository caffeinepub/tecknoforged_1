# Tecknoforged Screw Manufacturing Co.

## Current State
Existing multi-page React site with Japanese industrial catalog design (deep navy blue, steel grey, red accents). Has pages: Home, About, Products, Product Detail, Industries, Quality, Exports, Contact. Has RFQ system, product catalog with categories, responsive layout.

## Requested Changes (Diff)

### Add
- New dark/charcoal color scheme: Matte Black (#111111, #1A1A1A) primary, White secondary, Industrial Red (#D32F2F) accent
- Stats row in About section (years of experience, production capacity, industries served)
- Manufacturing Excellence section with CNC/quality icons
- Quality & Certifications section with ISO badges
- Tighter letter spacing for technical feel
- Subtle fade-in animations on scroll
- Micro-interactions on buttons (hover glow/shift)

### Modify
- Color palette: shift from deep navy to matte black/charcoal
- Hero headline: "Precision Engineered Fasteners for Industrial Excellence"
- Hero subtext: "High-performance screws and components manufactured with Japanese-level precision."
- Product categories: Machine Screws, Self-Tapping Screws, Industrial Fasteners, Custom Components (simplified from current detailed list)
- Navbar: sticky, dark/charcoal background
- Footer: minimal, dark
- Overall aesthetic: more premium black/charcoal vs current blue-white

### Remove
- Deep navy blue as primary color
- Exports page link (consolidate into contact/footer)

## Implementation Plan
1. Update index.css with new dark charcoal design tokens
2. Rebuild Navbar with dark charcoal sticky style
3. Rebuild HomePage: dark hero, about stats, products grid, manufacturing section, industries, quality, contact form
4. Rebuild Footer with minimal dark style
5. Update ProductsPage, ProductDetailPage with new palette
6. Update remaining pages (About, Contact, Industries, Quality) with new palette
7. Generate hero and product images with dark industrial aesthetic
