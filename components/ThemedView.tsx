import { View, type ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Elevation } from '@/styles/Effects';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'default' | 'container' | 'fullPage' | 'card' | 'modal';
  colorScheme?: 'main' | 'secondary' | 'brand' | 'info' | 'warning' | 'error' | 'success';
  colorType?: 'primary' | 'secondary' | 'tertiary' | 'subtle' | 'neutral' | 'disabled';
  elevation?: keyof typeof Elevation;
};

export function ThemedView({ 
  style, 
  lightColor, 
  darkColor, 
  variant = 'default',
  colorScheme = 'main',
  colorType = 'primary',
  elevation,
  ...rest 
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { 
      light: lightColor, 
      dark: darkColor, 
      colorScheme, 
      colorType 
    }, 
    'background'
  );

  return (
    <View 
      style={[
        { backgroundColor },
        styles.base,
        styles[variant],
        elevation && Elevation[elevation],
        style,
      ]} 
      {...rest} 
    />
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  default: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  fullPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
});
