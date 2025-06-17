import { useTheme } from './ThemeContext';
import { designTokens } from './designTokens';
import { ColorTokens } from './types';

export const useColors = () => {
  const { theme } = useTheme();

  const getThemeColors = (colorTokens: ColorTokens) => {
    const themeSpecificColors = {
      neutral: colorTokens.neutral[theme],
      brand: colorTokens.brand[theme],
      error: colorTokens.error[theme],
      dataViz: colorTokens.dataViz[theme],
    };

    return themeSpecificColors;
  };

  return getThemeColors(designTokens.colors);
}; 