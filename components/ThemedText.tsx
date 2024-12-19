import { Text, TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import * as Typography from '@/styles/Typography';
import { ColorScheme, ColorType } from '@/styles/Colors';

export type ThemedTextProps = TextProps & {
  children: React.ReactNode;
  variant?: 'body' | 'label' | 'display';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  colorScheme?: ColorScheme;
  colorType?: ColorType;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText({
  children,
  style,
  variant = 'body',
  size = 'md',
  weight = 'regular',
  colorScheme = 'main',
  colorType = 'primary',
  lightColor,
  darkColor,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(
    { 
      light: lightColor, 
      dark: darkColor, 
      colorScheme, 
      colorType 
    }, 
    'text'
  );

  const getTypographyStyle = () => {
    // Handle display and label variants which have predefined styles
    if (variant === 'display' && size in Typography.display) {
      return Typography.display[size as keyof typeof Typography.display];
    }
    if (variant === 'label' && size in Typography.label) {
      return Typography.label[size as keyof typeof Typography.label];
    }

    if (variant === 'body' && size in Typography.body) {
      return Typography.body[size as keyof typeof Typography.body];
    }

    // For body text, combine weight with custom sizes
    const weightStyle = Typography[weight as keyof typeof Typography];
    const sizeStyle = styles[`body${size.toUpperCase()}` as keyof typeof styles];
    
    return {
      ...weightStyle,
      ...sizeStyle,
    };
  };

  return (
    <Text
      style={[
        getTypographyStyle(),
        { color },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  bodySM: {
    fontSize: 14,
    lineHeight: 20,
  },
  bodyMD: {
    fontSize: 16,
    lineHeight: 24,
  },
  bodyLG: {
    fontSize: 18,
    lineHeight: 28,
  },
});
