import { ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { createTextStyle } from './DesignTokens';
import { Elevation } from './Effects';
import * as Typography from './Typography';

type ColorScheme = 'main' | 'secondary' | 'brand';
type ColorType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'primary_inverse'
  | 'secondary_inverse';

const baseInput: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 8,
  minHeight: 44,
  ...Elevation.xs,
};

const baseTextField: TextStyle = {
  flex: 1,
  paddingHorizontal: 12,
  paddingVertical: 8,

  ...createTextStyle('regular', Typography.body.md),
};

const sizes = {
  small: {
    input: {
      minHeight: 36,
    },
    text: createTextStyle('regular', Typography.body.sm),
    label: createTextStyle('medium', Typography.label.md),
    hint: createTextStyle('medium', Typography.body.sm),
  },
  medium: {
    input: {
      minHeight: 44,
    },
    text: createTextStyle('regular', Typography.body.md),
    label: createTextStyle('bold', Typography.label.md),
    hint: createTextStyle('medium', Typography.body.sm),
  },
  large: {
    input: {
      minHeight: 52,
    },
    text: createTextStyle('regular', Typography.body.lg),
    label: createTextStyle('medium', Typography.label.lg),
    hint: createTextStyle('medium', Typography.body.md),
  },
};

export const InputStyles = {
    base: {
      container: {
        width: '100%' as const,
        gap: 4,
      },
      input: {
        ...baseInput,
      },
      textField: {
        ...baseTextField,
      },
      labelContainer: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        marginBottom: 4,
      },
      messageContainer: {
        marginTop: 4,
      },
      iconContainer: {
        paddingHorizontal: 12,
      },
    },
    sizes,
    variants: {
      primary: {
        background: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        border: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'secondary' as ColorType },
          focused: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          error: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        text: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary' as ColorType },
          placeholder: { colorScheme: 'main' as ColorScheme, colorType: 'tertiary' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        label: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary' as ColorType },
          error: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
        },
        hint: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
          error: { colorScheme: 'error' as ColorScheme, colorType: 'primary' as ColorType },
        },
      },
      secondary: {
        background: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        border: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'secondary' as ColorType },
          focused: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          error: { colorScheme: 'error' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        text: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          placeholder: { colorScheme: 'secondary' as ColorScheme, colorType: 'tertiary' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        label: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
          error: { colorScheme: 'error' as ColorScheme, colorType: 'primary' as ColorType },
        },
        hint: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
          error: { colorScheme: 'error' as ColorScheme, colorType: 'primary' as ColorType },
        },
      },
    },
};

export const modifiers = {
  error: {
    borderWidth: 2,
  },
  focused: {
    borderWidth: 2,
  },
  disabled: {
    opacity: 0.5,
  },
}; 