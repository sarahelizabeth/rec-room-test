// styles/Buttons.ts
import { ViewStyle, TextStyle } from 'react-native';
import * as Typography from './Typography';
import { createTextStyle } from './Text';
import { Elevation } from './Effects';
import { gap_sm, gap_md, gap_lg, gap_xl, gap_2xl, gap_3xl, gap_4xl, gap_5xl } from './Primitives';
import { ColorScheme, ColorType } from './Colors';

export type ButtonSize = 'small' | 'medium' | 'large' | 'xLarge';

// Base styles shared across all buttons
const baseButton: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
};

// Size variants for text buttons
export const textButtonSizes: Record<string, { container: ViewStyle, text: TextStyle }> = {
  small: {
    container: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 6,
      gap: gap_sm,
    },
    text: createTextStyle('semiBold', Typography.body.sm),
  },
  medium: {
    container: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 6,
      gap: gap_sm,
    },
    text: createTextStyle('semiBold', Typography.body.md),
  },
  large: {
    container: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      gap: gap_sm,
    },
    text: createTextStyle('semiBold', Typography.body.lg),
  },
  xLarge: {
    container: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderRadius: 8,
      gap: gap_sm,
    },
    text: createTextStyle('semiBold', Typography.body.xl),
  }
};

// Size variants for icon-only buttons
export const iconButtonSizes: Record<string, { container: ViewStyle, icon: { width: number, height: number } }> = {
  small: {
    container: {
      padding: 8,
      borderRadius: 6,
    },
    icon: {
      width: 16,
      height: 16,
    }
  },
  medium: {
    container: {
      padding: 12,
      borderRadius: 6,
    },
    icon: {
      width: 20,
      height: 20,
    }
  },
  large: {
    container: {
      padding: 12,
      borderRadius: 8,
    },
    icon: {
      width: 24,
      height: 24,
    }
  },
  xLarge: {
    container: {
      padding: 16,
      borderRadius: 8,
    },
    icon: {
      width: 32,
      height: 32,
    }
  }
};

// Button types with color schemes
export const Buttons = {
  text: {
    solid: {
      base: {
        ...baseButton,
        ...Elevation.xs,
      },
      sizes: textButtonSizes,
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
      sizes: textButtonSizes,
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
            default: { colorScheme: 'main' as ColorScheme, colorType: 'secondary_inverse' as ColorType },
          },
          text: {
            default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
            disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
          }
        },
        tertiary: {
          border: {
            default: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
          },
          text: {
            default: { colorScheme: 'brand' as ColorScheme, colorType: 'inverse' as ColorType },
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
      sizes: textButtonSizes,
      variants: {
        primary: {
          text: {
            default: { colorScheme: 'brand' as ColorScheme, colorType: 'primary' as ColorType },
            disabled: { colorScheme: 'brand' as ColorScheme, colorType: 'disabled' as ColorType },
          }
        },
        secondary: {
          text: {
            default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
            disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
          }
        },
        tertiary: {
          text: {
            default: { colorScheme: 'main' as ColorScheme, colorType: 'primary_inverse' as ColorType },
            disabled: { colorScheme: 'main' as ColorScheme, colorType: 'disabled' as ColorType },
          }
        }
      }
    },
    floating: {
      base: {
        ...baseButton,
        ...Elevation.lg,
      },
      sizes: textButtonSizes,
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
  },
  icon: {
    solid: {
      base: {
        ...baseButton,
        ...Elevation.xs,
      },
      sizes: iconButtonSizes,
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
      sizes: iconButtonSizes,
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
      sizes: iconButtonSizes,
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
      sizes: iconButtonSizes,
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