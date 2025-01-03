import * as Typography from './Typography';
import { TextStyle } from 'react-native';

// Typography Tokens
export const typography = {
  family: {
    light: Typography.light,
    regular: Typography.regular,
    medium: Typography.medium,
    semiBold: Typography.semiBold,
    bold: Typography.bold,
    extraBold: Typography.extraBold,
  },
  size: {
    display: {
      lg: { fontSize: 48, lineHeight: 56 },
      md: { fontSize: 40, lineHeight: 48 },
      sm: { fontSize: 32, lineHeight: 40 },
    },
    heading: {
      xxl: { fontSize: 36, lineHeight: 44 },
      xl: { fontSize: 32, lineHeight: 40 },
      lg: { fontSize: 28, lineHeight: 36 },
      md: { fontSize: 24, lineHeight: 32 },
      sm: { fontSize: 20, lineHeight: 28 },
      xs: { fontSize: 18, lineHeight: 24 },
      xxs: { fontSize: 16, lineHeight: 20 },
    },
    body: {
      xl: { fontSize: 18, lineHeight: 28 },
      lg: { fontSize: 16, lineHeight: 18 },
      md: { fontSize: 14, lineHeight: 16 },
      sm: { fontSize: 12, lineHeight: 14 },
      xs: { fontSize: 10, lineHeight: 14 },
    },
    label: {
      xxl: { fontSize: 20, lineHeight: 28 },
      xl: { fontSize: 18, lineHeight: 24 },
      lg: { fontSize: 16, lineHeight: 20 },
      md: { fontSize: 14, lineHeight: 16 },
      sm: { fontSize: 12, lineHeight: 14 },
    },
  },
};

// Helper function to create text styles
export function createTextStyle(
  family: keyof typeof Typography.family,
  size: {fontSize: number, lineHeight: number}
): TextStyle {
  return {
    ...Typography.family[family],
    fontSize: size.fontSize,
    lineHeight: size.lineHeight,
  };
}

// Preset Text Styles
export const TextStyles = {
  displayLg: createTextStyle('extraBold', Typography.display.lg),
  displayMd: createTextStyle('extraBold', Typography.display.md),
  displaySm: createTextStyle('extraBold', Typography.display.sm),
  
  // heading2xl: createTextStyle('bold', Typography.heading['2xl']),
  // headingXl: createTextStyle('bold', Typography.heading.xl),
  // headingLg: createTextStyle('bold', Typography.heading.lg),
  // headingMd: createTextStyle('bold', Typography.heading.md),
  // headingSm: createTextStyle('bold', Typography.heading.sm),
  // headingXs: createTextStyle('bold', Typography.heading['2xs']),
  
  bodyLg: createTextStyle('regular', Typography.body.lg),
  bodyMd: createTextStyle('regular', Typography.body.md),
  bodySm: createTextStyle('regular', Typography.body.sm),
  
  label2xl: createTextStyle('semiBold', Typography.label.xxl),
  labelXl: createTextStyle('semiBold', Typography.label.xl),
  labelLg: createTextStyle('semiBold', Typography.label.lg),
  labelMd: createTextStyle('semiBold', Typography.label.md),
  labelSm: createTextStyle('semiBold', Typography.label.sm),
};
