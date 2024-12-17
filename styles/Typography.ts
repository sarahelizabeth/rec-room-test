export const light = {
  fontFamily: 'PlusJakartaSans_300Light',
}

export const regular = {
  fontFamily: 'PlusJakartaSans_400Regular',
}

export const medium = {
  fontFamily: 'PlusJakartaSans_500Medium',
}

export const semiBold = {
  fontFamily: 'PlusJakartaSans_600SemiBold',
}

export const bold = {
  fontFamily: 'PlusJakartaSans_700Bold',
}

export const extraBold = {
  fontFamily: 'PlusJakartaSans_800ExtraBold',
}

export const family = {
  light: light,
  regular: regular,
  medium: medium,
  semiBold: semiBold,
  bold: bold,
  extraBold: extraBold,
}

export const display = {
  xs: {
    ...extraBold,
    fontSize: 28,
    lineHeight: 28,
  },
  sm: {
    ...extraBold,
    fontSize: 32,
    lineHeight: 32,
  },
  md: {
    ...extraBold,
    fontSize: 40,
    lineHeight: 40,
  },
  lg: {
    ...extraBold,
    fontSize: 48,
    lineHeight: 48,
  },
  xl: {
    ...extraBold,
    fontSize: 56,
    lineHeight: 56,
  },
  xxl: {
    ...extraBold,
    fontSize: 64,
    lineHeight: 64,
  },
};

export const label = {
  xs: {
    ...bold,
    fontSize: 10,
    lineHeight: 12,
  },
  sm: {
    ...bold,
    fontSize: 12,
    lineHeight: 14,
  },
  md: {
    ...bold,
    fontSize: 14,
    lineHeight: 16,
  },
  lg: {
    ...bold,
    fontSize: 16,
    lineHeight: 18,
  },
  xl: {
    ...bold,
    fontSize: 18,
    lineHeight: 24,
  },
  xxl: {
    ...bold,
    fontSize: 20,
    lineHeight: 24,
  },
};

export const body = {
  xs: {
    ...regular,
    fontSize: 10,
    lineHeight: 12,
  },  
  sm: {
    ...regular,
    fontSize: 12,
    lineHeight: 14,
  },
  md: {
    ...regular,
    fontSize: 14,
    lineHeight: 16,
  },
  lg: {
    ...regular,
    fontSize: 16,
    lineHeight: 18,
  },
  xl: {
    ...regular,
    fontSize: 18,
    lineHeight: 24,
  },
  xxl: {
    ...regular,
    fontSize: 20,
    lineHeight: 24,
  },
};
