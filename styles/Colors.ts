const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

import { Primitives } from './Primitives';

export const Colors = {
  light: {
    background: {
      main: {
        primary: Primitives.white_a100,
        secondary: Primitives.gray_50,
        hover: Primitives.gray_100,
        pressed: Primitives.gray_200,
        subtle: Primitives.gray_200,
        neutral: Primitives.gray_100,
        disabled: Primitives.gray_100,
        primary_inverse: Primitives.gray_1000,
        secondary_inverse: Primitives.gray_900,
        neutral_inverse: Primitives.gray_600,
      },
      secondary: {
        primary: Primitives.secondary_500,
        pressed: Primitives.secondary_700,
        hover: Primitives.secondary_600,
        subtle: Primitives.secondary_100,
        disabled: Primitives.secondary_200,
        subtle_hover: Primitives.secondary_200,
        subtle_pressed: Primitives.secondary_300,
      },
      brand: {
        primary: Primitives.brand_500,
        pressed: Primitives.brand_700,
        selected: Primitives.brand_50,
        hover: Primitives.brand_600,
        subtle: Primitives.brand_100,
        sublte_hover: Primitives.brand_200,
        subtle_pressed: Primitives.brand_300,
      },
    },
    text: {
      main: {
        primary: Primitives.gray_1000,
        secondary: Primitives.gray_900,
        tertiary: Primitives.gray_500,
        disabled: Primitives.gray_300,
        primary_inverse: Primitives.gray_50,
        secondary_inverse: Primitives.gray_100,
        tertiary_inverse: Primitives.gray_300,
      },
      secondary: {
        primary: Primitives.secondary_500,
        pressed: Primitives.secondary_800,
        hover: Primitives.secondary_700,
        subtle: Primitives.secondary_200,
        disabled: Primitives.secondary_300,
      },
      brand: {
        primary: Primitives.brand_600,
        pressed: Primitives.brand_800,
        bold: Primitives.brand_700,
        hover: Primitives.brand_700,
        subtle: Primitives.brand_200,
        disabled: Primitives.brand_300,
      },
    },
    border: {
      main: {
        primary: Primitives.gray_400,
        secondary: Primitives.gray_300,
        tertiary: Primitives.gray_100,
        bold: Primitives.gray_600,
        subtle: Primitives.gray_300,
        inverse: Primitives.gray_50,
        disabled: Primitives.gray_200,
      },
      secondary: {
        primary: Primitives.secondary_500,
        pressed: Primitives.secondary_700,
        subtle: Primitives.secondary_200,
        disabled: Primitives.secondary_100,
      },
      brand: {
        primary: Primitives.brand_600,
        bold: Primitives.brand_700,
        selected: Primitives.brand_500,
        subtle: Primitives.brand_200,
        disabled: Primitives.brand_200,
      },
    },
    icon: {
      main: {
        primary: Primitives.gray_1000,
        secondary: Primitives.gray_900,
        tertiary: Primitives.gray_500,
        inverse: Primitives.gray_50,
        disabled: Primitives.gray_300,
      },
      secondary: {
        primary: Primitives.secondary_500,
        pressed: Primitives.secondary_800,
        hover: Primitives.secondary_700,
        subtle: Primitives.secondary_200,
        disabled: Primitives.secondary_300,
      },
      brand: {
        primary: Primitives.brand_600,
        pressed: Primitives.brand_800,
        bold: Primitives.brand_700,
        hover: Primitives.brand_700,
        subtle: Primitives.brand_200,
        disabled: Primitives.brand_300,
      },
    },
    // original colors
    tint: tintColorLight,
    // tabIconDefault: '#687076',
    // tabIconSelected: tintColorLight,
  },
  dark: {
    background: {
      main: {
        primary: Primitives.gray_1000,
        secondary: Primitives.gray_900,
        hover: Primitives.gray_800,
        pressed: Primitives.gray_700,
        subtle: Primitives.gray_800,
        neutral: Primitives.gray_900,
        disabled: Primitives.gray_900,
        primary_inverse: Primitives.white_a100,
        secondary_inverse: Primitives.gray_50,
        neutral_inverse: Primitives.gray_400,
      },
      secondary: {
        primary: Primitives.secondary_400,
        pressed: Primitives.secondary_200,
        hover: Primitives.secondary_300,
        subtle: Primitives.secondary_900,
        disabled: Primitives.secondary_800,
        subtle_hover: Primitives.secondary_800,
        subtle_pressed: Primitives.secondary_700,
      },
      brand: {
        primary: Primitives.brand_500,
        pressed: Primitives.brand_200,
        selected: Primitives.brand_900,
        hover: Primitives.brand_300,
        subtle: Primitives.brand_900,
        sublte_hover: Primitives.brand_800,
        subtle_pressed: Primitives.brand_700,
      },
    },
    text: {
      main: {
        primary: Primitives.gray_50,
        secondary: Primitives.gray_100,
        tertiary: Primitives.gray_400,
        disabled: Primitives.gray_600,
        primary_inverse: Primitives.gray_1000,
        secondary_inverse: Primitives.gray_800,
        tertiary_inverse: Primitives.gray_600,
      },
      secondary: {
        primary: Primitives.secondary_400,
        pressed: Primitives.secondary_200,
        hover: Primitives.secondary_300,
        subtle: Primitives.secondary_900,
        disabled: Primitives.secondary_800,
      },
      brand: {
        primary: Primitives.brand_400,
        pressed: Primitives.brand_200,
        bold: Primitives.brand_300,
        hover: Primitives.brand_300,
        subtle: Primitives.brand_700,
        disabled: Primitives.brand_700,
      },
    },
    border: {
      main: {
        primary: Primitives.gray_600,
        secondary: Primitives.gray_700,
        tertiary: Primitives.gray_900,
        bold: Primitives.gray_400,
        subtle: Primitives.gray_700,
        inverse: Primitives.gray_1000,
        disabled: Primitives.gray_800,
      },
      secondary: {
        primary: Primitives.secondary_400,
        pressed: Primitives.secondary_200,
        hover: Primitives.secondary_300,
        subtle: Primitives.secondary_900,
        disabled: Primitives.secondary_800,
      },
      brand: {
        primary: Primitives.brand_400,
        bold: Primitives.brand_300,
        selected: Primitives.brand_400,
        subtle: Primitives.brand_700,
        disabled: Primitives.brand_800,
      },
    },
    icon: {
      main: {
        primary: Primitives.gray_50,
        secondary: Primitives.gray_100,
        tertiary: Primitives.gray_400,
        inverse: Primitives.gray_1000,
        disabled: Primitives.gray_700,
      },
      secondary: {
        primary: Primitives.secondary_400,
        pressed: Primitives.secondary_200,
        hover: Primitives.secondary_300,
        subtle: Primitives.secondary_800,
        disabled: Primitives.secondary_900,
      },
      brand: {
        primary: Primitives.brand_400,
        pressed: Primitives.brand_200,
        bold: Primitives.brand_300,
        hover: Primitives.brand_300,
        subtle: Primitives.brand_700,
        disabled: Primitives.brand_700,
      },
    },
    // original colors
    // tint: tintColorDark,
    // tabIconDefault: '#9BA1A6',
    // tabIconSelected: tintColorDark,
  },
};
