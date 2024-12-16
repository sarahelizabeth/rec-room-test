import { View, StyleSheet, ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Elevation } from '@/styles/Effects';

export type ContainerProps = ViewProps & {
  children: React.ReactNode;
  variant?: 'default' | 'row' | 'center' | 'card';
  padding?: number;
  colorScheme?: 'main' | 'secondary' | 'brand';
  colorType?: 'primary' | 'secondary' | 'tertiary' | 'subtle' | 'neutral';
  flex?: number;
  gap?: number;
  elevation?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
};

export function Container({
  children,
  style,
  variant = 'default',
  padding,
  colorScheme = 'main',
  colorType = 'primary',
  flex,
  gap,
  elevation = 'none',
  ...rest
}: ContainerProps) {
  const backgroundColor = useThemeColor(
    { colorScheme, colorType },
    'background'
  );

  return (
    <View
      style={[
        styles.base,
        variant === 'default' && styles.default,
        variant === 'row' && styles.row,
        variant === 'center' && styles.center,
        variant === 'card' && styles.card,
        elevation !== 'none' && Elevation[elevation],
        {
          backgroundColor,
          padding: padding,
          flex: flex,
          gap: gap,
        } as const,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
  },
  default: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 8,
    padding: 16,
  },
}); 