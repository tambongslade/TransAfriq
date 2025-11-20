# Tailwind CSS v4 - Critical Differences from v3

## 🚨 BREAKING CHANGES

### 1. Configuration Method
**v3 (OLD - DON'T USE):**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F'
      }
    }
  }
}
```

**v4 (NEW - CORRECT):**
```css
/* In your CSS file */
@import "tailwindcss";

@theme {
  --color-primary-500: #1E3A5F;
}
```

### 2. Custom Colors
**v3 Syntax:** `colors: { primary: {...} }`  
**v4 Syntax:** `--color-{name}-{shade}: {value}`

**Examples:**
```css
@theme {
  /* Single color */
  --color-brand: #1E3A5F;
  /* Use as: bg-brand, text-brand */
  
  /* Color scale */
  --color-primary-50: #f0f6ff;
  --color-primary-500: #1E3A5F;
  --color-primary-900: #0a1426;
  /* Use as: bg-primary-500, text-primary-900 */
}
```

### 3. Custom Spacing
**v4 Syntax:** `--spacing-{name}: {value}`

```css
@theme {
  --spacing-18: 4.5rem;    /* Use as: p-18, m-18 */
  --spacing-128: 32rem;    /* Use as: w-128, h-128 */
}
```

### 4. Font Families
**v4 Syntax:** `--font-{name}: {value}`

```css
@theme {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

### 5. Breakpoints
**v4 Syntax:** `--breakpoint-{name}: {value}`

```css
@theme {
  --breakpoint-xs: 475px;
  --breakpoint-3xl: 1920px;
}
```

### 6. Shadows
**v4 Syntax:** `--shadow-{name}: {value}`

```css
@theme {
  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px rgba(30, 58, 95, 0.3);
}
```

## ✅ What Still Works

### Standard Tailwind Classes
All standard Tailwind utilities still work:
- `flex`, `grid`, `hidden`
- `text-sm`, `text-lg`
- `p-4`, `m-6`, `gap-3`
- `rounded-lg`, `shadow-md`
- `bg-white`, `text-black`

### Responsive Design
```html
<div class="text-sm md:text-base lg:text-lg">
  Mobile → Tablet → Desktop
</div>
```

### Arbitrary Values
```html
<div class="w-[375px] h-[calc(100vh-64px)]">
  Still works!
</div>
```

## 🎯 Common Patterns for TransAfriq

### Complete Theme Setup
```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-primary-50: #f0f6ff;
  --color-primary-100: #e0ebff;
  --color-primary-500: #1E3A5F;   /* Navy */
  --color-primary-600: #1a3354;
  --color-primary-900: #0a1426;
  
  --color-secondary-500: #0891B2; /* Cyan */
  --color-accent-500: #F59E0B;    /* Orange */
  --color-success-500: #25D366;   /* WhatsApp */
  
  /* Custom Spacing */
  --spacing-18: 4.5rem;
  
  /* Shadows */
  --shadow-soft: 0 2px 8px -2px rgba(0, 0, 0, 0.1);
  --shadow-card: 0 4px 16px -4px rgba(0, 0, 0, 0.1);
  
  /* Fonts */
  --font-sans: 'Inter', -apple-system, sans-serif;
}
```

### Using Custom Colors in Components
```tsx
// Header
<header className="bg-primary-500 text-white">
  <h1 className="text-2xl">TransAfriq</h1>
</header>

// Button
<button className="bg-accent-500 hover:bg-accent-600">
  Commander
</button>

// Card
<div className="bg-white shadow-card rounded-lg p-4">
  Content
</div>
```

## 🔍 How to Verify It's Working

### 1. Check Browser DevTools
Open DevTools → Elements → Computed Styles
Look for your custom colors being applied:
```
background-color: rgb(30, 58, 95)  // Should be #1E3A5F
```

### 2. Inspect Generated CSS
In DevTools → Sources → Look for generated CSS
You should see:
```css
.bg-primary-500 {
  background-color: var(--color-primary-500);
}
```

### 3. Test a Simple Component
```tsx
<div className="bg-primary-500 text-white p-4">
  If this is Navy blue with white text, it works!
</div>
```

## ❌ Common Mistakes

### Mistake 1: Using v3 Config File
```typescript
// ❌ DON'T DO THIS
// tailwind.config.ts
export default {
  theme: { ... }
}
```

### Mistake 2: Wrong CSS Variable Names
```css
/* ❌ WRONG */
@theme {
  --primary: #1E3A5F;          /* Missing 'color' prefix */
  --color-primary: #1E3A5F;    /* Missing shade number */
}

/* ✅ CORRECT */
@theme {
  --color-primary-500: #1E3A5F;
}
```

### Mistake 3: Forgetting @theme Directive
```css
/* ❌ WRONG */
:root {
  --color-primary-500: #1E3A5F;  /* Won't work without @theme */
}

/* ✅ CORRECT */
@theme {
  --color-primary-500: #1E3A5F;
}
```

## 📚 Official Resources
- Tailwind v4 Beta Docs: https://tailwindcss.com/docs/v4-beta
- Migration Guide: https://tailwindcss.com/docs/upgrade-guide
- What's New in v4: https://tailwindcss.com/blog/tailwindcss-v4-beta

## 🎯 Quick Reference

| Feature | v3 Syntax | v4 Syntax |
|---------|-----------|-----------|
| Colors | `theme.colors.primary` | `@theme { --color-primary-500 }` |
| Spacing | `theme.spacing.18` | `@theme { --spacing-18 }` |
| Fonts | `theme.fontFamily.sans` | `@theme { --font-sans }` |
| Shadows | `theme.boxShadow.soft` | `@theme { --shadow-soft }` |
| Breakpoints | `theme.screens.xs` | `@theme { --breakpoint-xs }` |

Remember: When in doubt, ALWAYS check the official Tailwind v4 documentation!
