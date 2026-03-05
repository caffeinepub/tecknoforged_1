# Tecknoforged

## Current State

Full B2B industrial fastener website with:
- 11 pages: Home, About, Products, ProductDetail, Industries, Quality, Exports, Blog, Contact, RFQPage, ScrewConfiguratorPage
- Backend: submitRFQ, submitContactMessage, getAllRFQs, getAllContactMessages, addAdmin
- 13 products in data/products.ts (self-drilling, allen-cap, hex-flange, rivets, washers, bt-cut, hi-low, button-head, nyloc-nuts, flange-head, pt-screws, torx-screws, taptite-screws)
- 3D components exist: ScrewConfigurator3D.tsx and ScrewPreview3D.tsx using React Three Fiber + Three.js with PBR materials
- lib/screwGeometry.ts with full geometry, finish materials, head dims, thread helix geometry
- ScrewConfiguratorPage.tsx: full interactive configurator with type/size/length/finish controls
- ProductsPage.tsx: screwTypes array with 3D badges for supported types
- ProductDetailPage.tsx: 3D preview viewer + "Configure in 3D" CTA
- App.tsx: /configurator route registered

**Problem identified**: The 3D content exists in code, but it is not visually prominent enough on the HomePage and is not the first thing users see. The HomePage hero section doesn't showcase the 3D screw model at all. Users aren't discovering the configurator.

## Requested Changes (Diff)

### Add
- Hero section on HomePage: large 3D screw rotating model (using ScrewPreview3D) with dark industrial background, premium German-engineering look
- Add a prominent "Configure Screw in 3D" + "Explore Products" + "Request Quote" button row in hero
- "3D Product Showcase" section on HomePage using the ScrewPreview3D component for product cards
- Ensure the Configurator link is prominent in the Navbar (highlighted differently from other links)

### Modify
- HomePage hero: replace current white-background hero with a full-screen dark industrial hero featuring a large 3D screw model on the right and headline/CTAs on the left
- HomePage product section: replace flat image cards with live 3D screw preview cards for supported screw types
- Navbar: make Configurator link stand out with red accent styling
- ProductsPage: ensure 3D previews are already auto-rotating and visible without user interaction
- ScrewConfiguratorPage: already fully functional — no changes needed

### Remove
- Nothing to remove

## Implementation Plan

1. Rewrite HomePage hero to be dark/industrial with 3D screw on right side using ScrewPreview3D (allen-cap, stainless, interactive=false, autoRotate)
2. Add 3D product showcase grid to HomePage below stats — 6 product cards with live 3D previews from ScrewPreview3D
3. Style Navbar Configurator link with red pill/badge to make it discoverable
4. Ensure all 3D canvas elements have proper dark backgrounds for metal to render correctly
5. Run typecheck and build to verify
