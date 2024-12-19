import { Colors, ColorScheme, ColorType, ElementType } from '@/styles/Colors';
import { Primitives } from '@/styles/Primitives';
import { useColorScheme } from '@/hooks/useColorScheme';

interface ThemeColorProps {
  light?: string;
  dark?: string;
  colorScheme?: ColorScheme;
  colorType?: ColorType;
}

export function useThemeColor(
  props: ThemeColorProps,
  elementType: ElementType
): string {
  const theme = useColorScheme() ?? 'light';
  const { light, dark, colorScheme = 'main', colorType = 'primary' } = props;

  // Handle direct light/dark color overrides
  if (light || dark) {
    const colorValue = theme === 'light' ? light : dark;
    if (colorValue) {
      const primitiveValue = Primitives[colorValue as keyof typeof Primitives];
      return primitiveValue || colorValue;
    }
  }

  // Get colors from theme
  const themeColors = Colors[theme as keyof typeof Colors];
  const elementColors = themeColors[elementType];

  // Handle missing color scheme or type
  if (!elementColors[colorScheme as keyof typeof elementColors] || 
      !elementColors[colorScheme as keyof typeof elementColors][colorType as keyof typeof elementColors[keyof typeof elementColors]]) {
    // Fallback to main primary if specified combination doesn't exist
    return themeColors[elementType].main.primary;
  }

  return elementColors[colorScheme as keyof typeof elementColors][colorType as keyof typeof elementColors[keyof typeof elementColors]];
}


// Basic usage
// const color = useThemeColor({}, 'text');

// // With color scheme and type
// const brandColor = useThemeColor({ 
//   colorScheme: 'brand', 
//   colorType: 'hover' 
// }, 'background');

// // With direct color overrides
// const customColor = useThemeColor({
//   light: 'white_a100',
//   dark: 'gray_900'
// }, 'background');