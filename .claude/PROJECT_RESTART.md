# TransAfriq Project Restart Plan

## Current Issues
- Header and logo positioning are incorrect
- Vehicle cards layout is broken
- Details page is off
- Tailwind v4 configuration was not properly implemented initially
- Mobile-first design principles not properly applied

## Root Cause
The project was initially configured using Tailwind v3 patterns, which are incompatible with Tailwind CSS v4. This caused:
1. Custom colors not being applied to utility classes
2. Spacing and sizing inconsistencies
3. Layout breaking on different screen sizes

## Correct Tailwind v4 Setup

### 1. No Config File Needed
Tailwind v4 does NOT use `tailwind.config.ts` by default. Configuration is done in CSS using the `@theme` directive.

### 2. Theme Definition in CSS
In `src/index.css`:

```css
@import "tailwindcss";

@theme {
  /* Colors - Format: --color-{name}-{shade} */
  --color-primary-500: #1E3A5F;
  --color-secondary-500: #0891B2;
  --color-accent-500: #F59E0B;
  
  /* Spacing - Format: --spacing-{name} */
  --spacing-18: 4.5rem;
  
  /* Shadows - Format: --shadow-{name} */
  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 3. Using Theme Values
After defining in `@theme`, use them as normal Tailwind classes:
- `bg-primary-500` → uses --color-primary-500
- `p-18` → uses --spacing-18
- `shadow-soft` → uses --shadow-soft

## Recommended Restart Steps

### Phase 1: Clean Slate (30 minutes)
1. ✅ Created `.claude/settings.local.json` with project rules
2. Create backup of current code
3. Remove all custom styling temporarily
4. Verify Tailwind v4 is working with basic classes

### Phase 2: Design System (1 hour)
1. Define proper `@theme` with all brand colors
2. Create spacing scale
3. Define typography scale  
4. Set up proper mobile breakpoints
5. Test that utilities work correctly

### Phase 3: Core Components (2 hours)
**In this order:**
1. **Header Component**
   - Mobile-first approach
   - Logo: 36-40px height on mobile
   - Header height: 56-64px on mobile
   - Proper sticky behavior
   - Desktop navigation

2. **Layout Components**
   - Container with proper max-width
   - Responsive padding
   - Mobile menu (if needed)

3. **Card Components**
   - VehicleCard with proper spacing
   - Readable text sizes (14px minimum)
   - Touch-friendly tap targets (44px min)
   - Proper image aspect ratios

### Phase 4: Pages (2 hours)
1. Home page with hero section
2. Vehicle detail page
3. Other pages (About, Contact, etc.)

### Phase 5: Polish (1 hour)
1. Animations and transitions
2. Loading states
3. Error states
4. Accessibility audit
5. Mobile testing

## Mobile-First Breakpoints
```
Mobile: 0-639px (default, no prefix)
Tablet: 640px+ (sm:)
Desktop: 1024px+ (lg:)
Wide: 1280px+ (xl:)
```

## Typography Scale
```
Mobile → Desktop
xs: 12px
sm: 14px (body text minimum)
base: 16px (default)
lg: 18px
xl: 20px
2xl: 24px (headings)
3xl: 30px
4xl: 36px
```

## Spacing Scale
```
1 = 4px
2 = 8px
3 = 12px
4 = 16px
5 = 20px
6 = 24px
8 = 32px
10 = 40px
12 = 48px
16 = 64px
```

## Critical Rules Moving Forward
1. **ALWAYS** start with mobile design
2. **ALWAYS** verify Tailwind v4 syntax before using
3. **NEVER** use Tailwind v3 patterns (config files, old syntax)
4. **TEST** on actual mobile viewport (375px width)
5. **READ** existing code before modifying

## Decision Points

### Option A: Full Restart (Recommended)
- Create new branch
- Build from scratch with correct setup
- Migrate working components one by one
- Estimated time: 6-8 hours total

### Option B: Incremental Fix
- Fix each component individually
- Risk of missing interconnected issues
- May take longer due to debugging
- Estimated time: 8-12 hours total

## Next Steps
1. User decides: Full restart or incremental fix?
2. If full restart: Create new branch and start Phase 1
3. If incremental: Create prioritized fix list and tackle one by one

## Resources
- Tailwind CSS v4 Docs: https://tailwindcss.com/docs/v4-beta
- Tailwind v4 Migration: https://tailwindcss.com/docs/upgrade-guide
- Mobile-First Design: https://web.dev/mobile-first/
