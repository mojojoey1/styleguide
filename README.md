# Design Tokens System

This design system provides a comprehensive set of design tokens for building consistent user interfaces. It includes colors, typography, spacing, border radius, and shadow tokens, with built-in support for light and dark themes.

## Features

- 🎨 Complete color system (neutral, brand, error, data visualization)
- 📝 Typography scale
- 📏 Spacing system
- 🔲 Border radius tokens
- 🌗 Light/dark theme support
- 💅 State variations (rest, hover, pressed, selected)
- 📦 TypeScript support

## Using the Design Tokens in Another Project

### Method 1: Direct Usage

1. **Copy Required Files**
   Copy these files to your project:
   ```
   src/theme/
   ├── designTokens.ts    (token definitions)
   ├── types.ts           (TypeScript types)
   ├── ThemeContext.tsx   (theme provider)
   └── useColors.ts       (color hook)
   ```

2. **Install Dependencies**
   ```bash
   npm install react typescript @types/react
   ```

3. **Usage in Your Project**
   ```typescript
   import { designTokens } from './theme/designTokens';
   import { ThemeProvider, useTheme } from './theme/ThemeContext';
   import { useColors } from './theme/useColors';

   // Wrap your app with ThemeProvider
   function App() {
     return (
       <ThemeProvider>
         <YourComponents />
       </ThemeProvider>
     );
   }

   // Use in components
   function YourComponent() {
     const colors = useColors();
     
     return (
       <div style={{
         backgroundColor: colors.neutral.background[1].rest,
         padding: designTokens.spacing.vertical.m,
         borderRadius: designTokens.borderRadius.medium,
         ...designTokens.typography.body1.regular
       }}>
         Your content
       </div>
     );
   }
   ```

### Method 2: Create a Package

1. **Create Package Structure**
   ```
   design-tokens-package/
   ├── src/
   │   ├── designTokens.ts
   │   ├── types.ts
   │   ├── ThemeContext.tsx
   │   ├── useColors.ts
   │   └── index.ts
   ├── package.json
   └── tsconfig.json
   ```

2. **Create index.ts**
   ```typescript
   export { designTokens } from './designTokens';
   export { ThemeProvider, useTheme } from './ThemeContext';
   export { useColors } from './useColors';
   export type { DesignTokens, Theme } from './types';
   ```

3. **Install in Other Projects**
   ```bash
   npm install your-design-tokens-package
   ```

### Method 3: Make Tokens Configurable

```typescript
interface TokenOptions {
  primaryColor?: string;
  fontFamily?: string;
  // other customizable options
}

export function createDesignTokens(options?: TokenOptions): DesignTokens {
  return {
    colors: {
      brand: {
        background: {
          rest: options?.primaryColor || '#0060ca',
          // ...
        }
      },
      // ...
    },
    typography: {
      fontFamily: options?.fontFamily || 'Segoe UI',
      // ...
    },
    // ...
  };
}
```

### Method 4: CSS Variables Support

```typescript
export function createCSSVariables(tokens: DesignTokens): string {
  return `
    :root {
      --primary-color: ${tokens.colors.brand.background.rest};
      --body-font: ${tokens.typography.fontFamily};
      // ...
    }
  `;
}
```

## Token Categories

### Colors
- Neutral colors (backgrounds, foregrounds, strokes)
- Brand colors
- Error states
- Data visualization colors

### Typography
- Display
- Large Title
- Title (1, 2, 3)
- Subtitle (1, 2)
- Body (1, 2)
- Caption (1, 2)

### Spacing
- Vertical and horizontal scales
- From none (0) to xxxl (32px)

### Border Radius
- From none (0) to circular
- Special page radius

### Shadows
- Elevation scale (2-64)
- Brand shadows
- Light/dark variations

## Best Practices

1. **Theme Support**
   - Always use the ThemeProvider at the root of your application
   - Use the useColors hook for color values
   - Test in both light and dark themes

2. **Responsive Design**
   - Use spacing tokens for consistent layouts
   - Apply typography scale appropriately
   - Consider device-specific adjustments

3. **Accessibility**
   - Use proper color contrast ratios
   - Maintain readable text sizes
   - Consider focus states

4. **Performance**
   - Import only needed tokens
   - Consider code splitting if needed
   - Use static values where appropriate

## Contributing

Feel free to contribute to this design system by:
1. Reporting issues
2. Suggesting improvements
3. Adding new token categories
4. Improving documentation

## License

MIT License
