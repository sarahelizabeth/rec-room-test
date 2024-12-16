// styles/Buttons.ts

import { Elevation } from './Effects';
import { ViewStyle } from 'react-native';

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
  paddingHorizontal: 24,
  gap: 10,
  alignSelf: 'stretch',
};

// Size variants
const sizes: Record<string, ViewStyle> = {
  small: {
    paddingVertical: 8,
    borderRadius: 6,
  },
  medium: {
    paddingVertical: 10,
    borderRadius: 6,
  },
  large: {
    paddingVertical: 12,
    borderRadius: 8,
  },
  xLarge: {
    paddingVertical: 16,
    borderRadius: 8,
  }
};

// Button types with color schemes
export const buttons = {
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
    },
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

// Additional modifiers
export const modifiers = {
  pill: {
    borderRadius: 9999,
  },
  disabled: {
    opacity: 0.5,
  }
};