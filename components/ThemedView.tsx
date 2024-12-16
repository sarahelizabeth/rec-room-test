import { View, type ViewProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'containerRow' | 'fullPage' | 'card' | 'modal';
  colorScheme?: 'main' | 'secondary' | 'brand';
  colorType?: any;
};

export function ThemedView({ style, lightColor, darkColor, type = 'default', colorScheme = 'main', colorType = 'primary', ...rest }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor, colorScheme: colorScheme, colorType: colorType }, 'background');

  return <View style={[
        { backgroundColor } as const,
        type === 'default' ? styles.default : undefined,
        type === 'containerRow' ? styles.containerRow : undefined,
        type === 'fullPage' ? styles.fullPage : undefined,
        type === 'card' ? styles.card : undefined,
        type === 'modal' ? styles.modal : undefined,
        style,
      ]} {...rest} />;
}

const styles = StyleSheet.create({
  // basic flex container
  default: {
    flex: 1,
    alignItems: 'center',
  },
  // flex row container for a row of items
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // fill the screen
  fullPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 12,
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
