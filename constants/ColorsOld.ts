
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const primitives = {
  white_a100: '#FFFFFF',
  white_a80: '#FFFFFFCC',
  white_a60: '#FFFFFF99',
  white_a40: '#FFFFFF66',
  white_a20: '#FFFFFF33',
  white_a10: '#FFFFFF1A',
  white_a5: '#FFFFFF0D',
  black_a100: '#000000',
  black_a80: '#000000CC',
  black_a60: '#00000099',
  black_a40: '#00000066',
  black_a20: '#00000033',
  black_a10: '#0000001A',
  black_a5: '#0000000D',
  gray_1000: '#0D0D0D',
  gray_900: '#262626',
  gray_800: '#333333',
  gray_700: '#4D4D4D',
  gray_600: '#666666',
  gray_500: '#808080',
  gray_400: '#999999',
  gray_300: '#A6A6A6',
  gray_200: '#CCCCCC',
  gray_100: '#DBDBDB',
  gray_50: '#FAFAFA',
  warning_900: '#683C04',
  warning_800: '#884F05',
  warning_700: '#AF6606',
  warning_600: '#E18308',
  warning_500: '#F79009',
  warning_400: '#F9A63A',
  warning_300: '#FAB55A',
  warning_200: '#FBCC8E',
  warning_100: '#FDDDB3',
  warning_50: '#FEF4E6',
  info_900: '#15246B',
  info_800: '#1C2F8C',
  info_700: '#243CB5',
  info_600: '#2E4DE8',
  info_500: '#3355FF',
  info_400: '#5C77FF',
  info_300: '#8FA2FF',
  info_200: '#A1B1FF',
  info_100: '#C0CAFF',
  info_50: '#EBEEFF',
  success_900: '#004015',
  success_800: '#00541C',
  success_700: '#006D24',
  success_600: '#008B2E',
  success_500: '#009933',
  success_400: '#33AD5C',
  success_300: '#54BB76',
  success_200: '#8AD0A1',
  success_100: '#B0DFC0',
  success_50: '#E6F5EB',
  error_900: '#600000',
  error_800: '#7E0000',
  error_700: '#A30000',
  error_600: '#D00000',
  error_500: '#E50000',
  error_400: '#EA3333',
  error_300: '#F16F6F',
  error_200: '#F38A8A',
  error_100: '#F7B0B0',
  error_50: '#FCE6E6',
  secondary_900: '#1D003C',
  secondary_800: '#25004F',
  secondary_700: '#300066',
  secondary_600: '#3E0083',
  secondary_500: '#440090',
  secondary_400: '#6933A6',
  secondary_300: '#8254B5',
  secondary_200: '#A98ACC',
  secondary_100: '#C5B0DD',
  secondary_50: '#ECE6F4',
  brand_900: '#67198C',
  brand_800: '#8520B5',
  brand_700: '#AA29E8',
  brand_600: '#BB2DFF',
  brand_500: '#C957FF',
  brand_400: '#D172FF',
  brand_300: '#DB8FFF',
  brand_200: '#E8B8FF',
  brand_100: '#F1D6FF',
  brand_50: '#F3EFF5',
};

export const Colors = {
  light: {
    background: {
      primary: primitives.white_a100,
      secondary: primitives.gray_50,
      hover: primitives.gray_100,
      pressed: primitives.gray_200,
      subtle: primitives.gray_200,
      neutral: primitives.gray_100,
      disabled: primitives.gray_100,
      primary_inverse: primitives.gray_1000,
      secondary_inverse: primitives.gray_900,
      neutral_inverse: primitives.gray_600,
      brand: {
        primary: primitives.brand_500,
        pressed: primitives.brand_700,
        selected: primitives.brand_50,
        hover: primitives.brand_600,
        subtle: primitives.brand_100,
        sublte_hover: primitives.brand_200,
        subtle_pressed: primitives.brand_300,
      },
    },
    text: {
      primary: primitives.gray_1000,
      secondary: primitives.gray_900,
      tertiary: primitives.gray_500,
      disabled: primitives.gray_300,
      primary_inverse: primitives.gray_50,
      secondary_inverse: primitives.gray_100,
      tertiary_inverse: primitives.gray_300,
      brand: {
        primary: primitives.brand_600,
        pressed: primitives.brand_800,
        bold: primitives.brand_700,
        hover: primitives.brand_700,
        subtle: primitives.brand_200,
        disabled: primitives.brand_300,
      },
    },
    border: {
      primary: primitives.gray_400,
      secondary: primitives.gray_300,
      tertiary: primitives.gray_100,
      bold: primitives.gray_600,
      subtle: primitives.gray_300,
      inverse: primitives.gray_50,
      disabled: primitives.gray_200,
      brand: {
        primary: primitives.brand_600,
        bold: primitives.brand_700,
        selected: primitives.brand_500,
        subtle: primitives.brand_200,
        disabled: primitives.brand_200,
      },
    },
    // original colors
    icon: '#687076',
    tint: tintColorLight,
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: {
      primary: primitives.gray_1000,
      secondary: primitives.gray_900,
      hover: primitives.gray_800,
      pressed: primitives.gray_700,
      subtle: primitives.gray_800,
      neutral: primitives.gray_900,
      disabled: primitives.gray_900,
      primary_inverse: primitives.white_a100,
      secondary_inverse: primitives.gray_50,
      neutral_inverse: primitives.gray_400,
      brand: {
        primary: primitives.brand_500,
        pressed: primitives.brand_200,
        selected: primitives.brand_900,
        hover: primitives.brand_300,
        subtle: primitives.brand_900,
        sublte_hover: primitives.brand_800,
        subtle_pressed: primitives.brand_700,
      },
    },
    text: {
      primary: primitives.gray_50,
      secondary: primitives.gray_100,
      tertiary: primitives.gray_400,
      disabled: primitives.gray_600,
      primary_inverse: primitives.gray_1000,
      secondary_inverse: primitives.gray_800,
      tertiary_inverse: primitives.gray_600,
      brand: {
        primary: primitives.brand_400,
        pressed: primitives.brand_200,
        bold: primitives.brand_300,
        hover: primitives.brand_300,
        subtle: primitives.brand_700,
        disabled: primitives.brand_700,
      },
    },
    border: {
      primary: primitives.gray_600,
      secondary: primitives.gray_700,
      tertiary: primitives.gray_900,
      bold: primitives.gray_400,
      subtle: primitives.gray_700,
      inverse: primitives.gray_1000,
      disabled: primitives.gray_800,
      brand: {
        primary: primitives.brand_400,
        bold: primitives.brand_300,
        selected: primitives.brand_400,
        subtle: primitives.brand_700,
        disabled: primitives.brand_800,
      },
    },
    // original colors
    icon: '#9BA1A6',
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};



// ///////////////////////////////////////////
// ///////////////////////////////////////////
// ///////////////////////////////////////////


export const ColorsAgain = {
  light: {
    main: {
      primary: {
        background: primitives.white_a100,
        text: primitives.gray_1000,
        border: primitives.gray_500,
      },
      secondary: {
        background: primitives.gray_50,
        text: primitives.gray_900,
        border: primitives.gray_300,
      },
      tertiary: {
        text: primitives.gray_500,
        border: primitives.gray_100,
      },
      hover: {
        background: primitives.gray_100,
      },
      pressed: {
        background: primitives.gray_300,
        border: primitives.gray_600,
      },
      subtle: {
        background: primitives.gray_200,
        border: primitives.gray_300,
      },
      neutral: {
        background: primitives.gray_100,
        text: primitives.gray_500,
      },
      disabled: {
        background: primitives.gray_100,
        text: primitives.gray_300,
        border: primitives.gray_200,
      },
      primary_inverse: {
        background: primitives.gray_1000,
        text: primitives.gray_50,
        border: primitives.gray_50,
      },
      secondary_inverse: {
        background: primitives.gray_900,
        text: primitives.gray_100,
      },
      tertiary_inverse: {
        text: primitives.gray_300,
      },
      neutral_inverse: {
        background: primitives.gray_600,
      },
    },
    brand: {
      primary: {
        background: primitives.brand_500,
        text: primitives.brand_600,
        border: primitives.brand_400,
      },
      pressed: {
        background: primitives.brand_700,
        text: primitives.brand_800,
        border: primitives.brand_600,
      },
      bold: {
        text: primitives.brand_700,
        border: primitives.brand_700,
      },
      selected: {
        background: primitives.brand_50,
        text: primitives.brand_600,
        border: primitives.brand_600,
      },
      hover: {
        background: primitives.brand_600,
        text: primitives.brand_700,
        border: primitives.brand_500,
      },
      subtle: {
        background: primitives.brand_100,
        text: primitives.brand_200,
        border: primitives.brand_200,
      },
      disabled: {
        background: primitives.brand_200,
        text: primitives.brand_300,
        border: primitives.brand_200,
      },
      subtle_hover: {
        background: primitives.brand_200,
      },
      subtle_pressed: {
        background: primitives.brand_300,
      },
    },
    // original colors
    // icon: '#687076',
    tint: tintColorLight,
    // tabIconDefault: '#687076',
    // tabIconSelected: tintColorLight,
  },
  dark: {
    main: {
      primary: {
        background: primitives.gray_1000,
        text: primitives.gray_50,
        border: primitives.gray_600,
      },
      secondary: {
        background: primitives.gray_900,
        text: primitives.gray_100,
        border: primitives.gray_700,
      },
      tertiary: {
        text: primitives.gray_400,
        border: primitives.gray_900,
      },
      hover: {
        background: primitives.gray_800,
      },
      pressed: {
        background: primitives.gray_700,
        border: primitives.gray_400,
      },
      subtle: {
        background: primitives.gray_800,
        border: primitives.gray_700,
      },
      neutral: {
        background: primitives.gray_900,
        text: primitives.gray_50,
      },
      disabled: {
        background: primitives.gray_900,
        text: primitives.gray_600,
        border: primitives.gray_800,
      },
      primary_inverse: {
        background: primitives.white_a100,
        text: primitives.gray_1000,
        border: primitives.gray_900,
      },
      secondary_inverse: {
        background: primitives.gray_50,
        text: primitives.gray_800,
      },
      tertiary_inverse: {
        text: primitives.gray_600,
      },
      neutral_inverse: {
        background: primitives.gray_400,
      },
    },
    brand: {
      primary: {
        background: primitives.brand_500,
        text: primitives.brand_400,
        border: primitives.brand_400,
      },
      pressed: {
        background: primitives.brand_200,
        text: primitives.brand_200,
        border: primitives.brand_200,
      },
      selected: {
        background: primitives.brand_900,
        text: primitives.brand_400,
        border: primitives.brand_400,
      },
      bold: {
        text: primitives.brand_300,
        border: primitives.brand_200,
      },
      hover: {
        background: primitives.brand_300,
        text: primitives.brand_400,
        border: primitives.brand_300,
      },
      subtle: {
        background: primitives.brand_900,
        text: primitives.brand_700,
        border: primitives.brand_700,
      },
      disabled: {
        background: primitives.brand_200,
        text: primitives.brand_700,
        border: primitives.brand_800,
      },
      subtle_hover: {
        background: primitives.brand_800,
      },
      subtle_pressed: {
        background: primitives.brand_700,
      },
    },
    // original colors
    // icon: '#9BA1A6',
    tint: tintColorDark,
    // tabIconDefault: '#9BA1A6',
    // tabIconSelected: tintColorDark,
  },
};
