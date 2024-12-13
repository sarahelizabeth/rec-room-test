import { Colors } from '@/constants/Colors';
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
) {
  const theme = useColorScheme() ?? 'light';

  if (props.colorScheme && props.colorType) {
    const themeColors = Colors[theme as keyof typeof Colors];
    const elementColors = themeColors[elementType as keyof typeof themeColors];
    const schemeColors = elementColors[props.colorScheme as keyof typeof elementColors];
    return schemeColors[props.colorType as keyof typeof schemeColors];
  }
  return 'white';
}
