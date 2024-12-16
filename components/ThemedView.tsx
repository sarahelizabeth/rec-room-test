import { View, type ViewProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'containerRow' | 'page' | 'card' | 'modal';
  colorScheme?: 'main' | 'secondary' | 'brand';
  colorType?: any;
};

export function ThemedView({ style, lightColor, darkColor, type = 'default', colorScheme = 'main', colorType = 'primary', ...rest }: ThemedViewProps) {
  // color type preferences go here
  // if (type === 'page') colorType = 'secondary';

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor, colorScheme: colorScheme, colorType: colorType }, 'background');

  return <View style={[
        { backgroundColor },
        type === 'default' ? styles.default : undefined,
        type === 'containerRow' ? styles.containerRow : undefined,
        type === 'page' ? styles.page : undefined,
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
  page: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
