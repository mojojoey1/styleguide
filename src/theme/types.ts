/**
 * Design token type definitions
 */

// Color state variations
interface ColorStates {
          rest: string;
  hover?: string;
  pressed?: string;
  selected?: string;
}

// Status color variations
interface StatusColorSet {
  background1: { rest: string };
  background3: { rest: string };
  foreground1: { rest: string };
  foreground2?: { rest: string };
  foreground3?: { rest: string };
  foregroundInverted?: { rest: string };
  border1: { rest: string };
  border2?: { rest: string };
}

// Presence status colors
interface PresenceColors {
  oof: { rest: string };
  away: { rest: string };
  available: { rest: string };
}

// Error color token types
interface ErrorColors {
  danger: StatusColorSet;
  severe: StatusColorSet;
  success: StatusColorSet;
  warning: StatusColorSet;
  presence: PresenceColors;
}

// Neutral color token types
interface NeutralColors {
  black: string;
  white: string;
  grey: {
    26: string;
    38: string;
    86: string;
    88: string;
    96: string;
    98: string;
  };
  background: {
    1: ColorStates;
    2: ColorStates;
    3: ColorStates;
    4: ColorStates;
    5: ColorStates;
    6: { rest: string };
    inverted: {
          rest: string;
          disabled: string;
        };
    alpha: {
      1: string;
      2: string;
      3: string;
        };
    static: string;
          disabled: string;
        };
        foreground: {
    1: ColorStates & { static: string };
    2: ColorStates & {
      brandHover: string;
      brandPressed: string;
      brandSelected: string;
    };
    3: ColorStates & {
      brandHover: string;
      brandPressed: string;
      brandSelected: string;
    };
    4: { rest: string };
          disabled: string;
    inverted: ColorStates & {
      static: string;
      2: { rest: string };
    };
    onBrand: string;
  };
  stroke: {
    1: ColorStates;
    2: { rest: string };
    3: { rest: string };
    alpha: {
      1: string;
      2: string;
    };
    subtle: string;
    onBrand: {
      1: string;
      2: ColorStates;
    };
    accessible: ColorStates;
          disabled: string;
    invertedDisabled: string;
    focus: {
      1: string;
      2: string;
        };
      };
  subtleBackground: ColorStates & {
    lightAlpha: {
          hover: string;
          pressed: string;
      selected: string;
    };
    inverted: ColorStates;
  };
  transparentBackground: ColorStates;
  overlay: {
    background: string;
    scrollbar: string;
  };
  stencil: {
    1: string;
    2: string;
  };
}

// Brand color token types
interface BrandColors {
  background: ColorStates & {
    static: { rest: string };
    2: ColorStates;
    inverted: ColorStates;
    compound: ColorStates;
        };
        foreground: {
    1: { rest: string };
    2: ColorStates;
    link: ColorStates;
    inverted: ColorStates;
    onLight: ColorStates;
    compound1: ColorStates;
  };
  stroke: {
    1: { rest: string };
    2: ColorStates & {
      contrast: { rest: string };
        };
    compound: ColorStates;
    };
}

// Data visualization color slots
interface DataVizColors {
  slot1: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  slot6: string;
  slot7: string;
  slot8: string;
}

// Theme variants
export type ThemeVariant = 'light' | 'dark';

// Color token types with theme variants
export interface ColorTokens {
  neutral: {
    light: NeutralColors;
    dark: NeutralColors;
  };
  brand: {
    light: BrandColors;
    dark: BrandColors;
  };
  error: {
    light: ErrorColors;
    dark: ErrorColors;
  };
  dataViz: {
    light: DataVizColors;
    dark: DataVizColors;
  };
}

export interface Typography {
  fontFamily: string;
  caption2: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
    strong: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  caption1: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
    strong: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
    stronger: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  body1: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
    strong: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
    stronger: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  body2: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  subtitle2: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
    stronger: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  subtitle1: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  title3: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  title2: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  title1: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  largeTitle: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
  display: {
    regular: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
    };
  };
}

export interface ShadowToken {
  x: string;
  y: string;
  blur: string;
  color: string;
  alpha: number;
}

interface ShadowTokenPair {
  primary: ShadowToken;
  secondary?: ShadowToken;
}

interface ShadowSizes {
  2: ShadowTokenPair;
  4: ShadowTokenPair;
  8: ShadowTokenPair;
  16: ShadowTokenPair;
  28: ShadowTokenPair;
  64: ShadowTokenPair;
}

interface BrandShadows {
  2: ShadowTokenPair;
  4: ShadowTokenPair;
  8: ShadowTokenPair;
  16: ShadowTokenPair;
  28: ShadowTokenPair;
  64: ShadowTokenPair;
}

interface ThemeShadows {
  light: ShadowSizes & {
    brand: BrandShadows;
  };
  dark: ShadowSizes & {
    brand: BrandShadows;
  };
}

interface BorderRadiusTokens {
    none: string;
    small: string;
    medium: string;
    large: string;
  xLarge: string;
  circular: string;
  page: string;
}

interface SpacingSet {
  none: string;
  xxs: string;
  xs: string;
  sNudge: string;
  s: string;
  mNudge: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

interface SpacingTokens {
  vertical: SpacingSet;
  horizontal: SpacingSet;
}

export interface DesignTokens {
  colors: ColorTokens;
  typography: Typography;
  spacing: SpacingTokens;
  borderRadius: BorderRadiusTokens;
  shadows: ThemeShadows;
} 