// styles/Buttons.ts

import { ViewStyle, TextStyle } from 'react-native';
import { Typography, createTextStyle, Elevation, spacing } from '.';

type ColorScheme = 'main' | 'secondary' | 'brand';
type ColorType =
  | 'primary'
  | 'secondary'
  | 'hover'
  | 'pressed'
  | 'disabled'
  | 'primary_inverse'
  | 'secondary_inverse'
  | 'tertiary'
  | 'subtle'
  | 'neutral'
  | 'neutral_inverse'
  | 'bold'
  | 'selected'
  | 'subtle_hover'
  | 'subtle_pressed';

// Base styles shared across all buttons
const baseButton: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 16,
  gap: 8,
  alignSelf: 'stretch',
};

// Size variants using direct numeric values
const sizes: Record<string, { container: ViewStyle, text: TextStyle }> = {
  small: {
    container: {
      paddingVertical: 8,
      borderRadius: 6,
    },
    text: createTextStyle('semiBold', Typography.body.sm),
  },
  medium: {
    container: {
      paddingVertical: 12,
      borderRadius: 6,
    },
    text: createTextStyle('semiBold', Typography.body.md),
  },
  large: {
    container: {
      paddingVertical: 12,
      borderRadius: 8,
    },
    text: createTextStyle('semiBold', Typography.body.lg),
  },
  xLarge: {
    container: {
      paddingVertical: 24,
      borderRadius: 8,
    },
    text: createTextStyle('semiBold', Typography.body.xl),
  }
};

// Button types with color schemes
export const Buttons = {
  solid: {
    base: {
      ...baseButton,
      ...Elevation.xs,
    },
    sizes,
    variants: {
      primary: {
        background: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          hover: { colorScheme: 'brand' as ColorScheme, colorType: 'hover' as ColorType },
          pressed: { colorScheme: 'brand' as ColorScheme, colorType: 'pressed' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        text: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      secondary: {
        background: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          hover: { colorScheme: 'secondary' as ColorScheme, colorType: 'hover' as ColorType },
          pressed: { colorScheme: 'secondary' as ColorScheme, colorType: 'pressed' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        text: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      tertiary: {
        background: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
        },
        text: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      }
    }
  },
  outline: {
    base: {
      ...baseButton,
      borderWidth: 1,
      backgroundColor: 'transparent',
    },
    sizes,
    variants: {
      primary: {
        border: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          hover: { colorScheme: 'brand' as ColorScheme, colorType: 'hover' as ColorType },
          pressed: { colorScheme: 'brand' as ColorScheme, colorType: 'pressed' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        text: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      secondary: {
        border: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          hover: { colorScheme: 'secondary' as ColorScheme, colorType: 'hover' as ColorType },
          pressed: { colorScheme: 'secondary' as ColorScheme, colorType: 'pressed' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        },
        text: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      tertiary: {
        border: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
        },
        text: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      }
    }
  },
  ghost: {
    base: {
      ...baseButton,
      backgroundColor: 'transparent',
    },
    sizes,
    variants: {
      primary: {
        text: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      secondary: {
        text: {
          default: { colorScheme: 'secondary' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'secondary' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      tertiary: {
        background: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
        },
        text: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      }
    }
  },
  floating: {
    base: {
      ...baseButton,
      ...Elevation.lg,
    },
    sizes,
    variants: {
      primary: {
        background: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
        },
        text: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      secondary: {
        background: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'subtle' as ColorType },
        },
        text: {
          default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
          disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      },
      tertiary: {
        background: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'secondary' as ColorType },
        },
        text: {
          default: { colorScheme: 'main' as ColorScheme, colorType: 'secondary' as ColorType },
          disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
        }
      }
    }
  }
};

// Additional modifiers using direct numeric values
export const Modifiers = {
  pill: {
    borderRadius: 999,
  },
  disabled: {
    opacity: 0.5,
  }
};