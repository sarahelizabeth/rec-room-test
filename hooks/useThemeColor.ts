import { Colors } from '@/styles/Colors';
import { Primitives } from '@/styles/Primitives';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: {
    light?: string;
    dark?: string;
    colorScheme?: 'main' | 'secondary' | 'brand';
    colorType?:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'hover'
      | 'pressed'
      | 'subtle'
      | 'neutral'
      | 'disabled'
      | 'primary_inverse'
      | 'secondary_inverse'
      | 'neutral_inverse'
      | 'bold'
      | 'selected'
      | 'subtle_hover'
      | 'subtle_pressed';
  },
  elementType: 'background' | 'text' | 'border' | 'icon'
): string {
  const theme = useColorScheme() ?? 'light';

  if (!props.light && props.dark) {
    const colorValue = theme === 'light' ? props.light : props.dark;
    const primitiveValue = Primitives[colorValue as keyof typeof Primitives];
    return primitiveValue;
  } else {
    const themeColors = Colors[theme as keyof typeof Colors];
    const elementColors = themeColors[elementType as keyof typeof themeColors];
    const schemeColors = elementColors[props.colorScheme as keyof typeof elementColors];
    return schemeColors[props.colorType as keyof typeof schemeColors];
  }
}
