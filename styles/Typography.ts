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

export const display = {
  sm: {
    ...extraBold,
    fontSize: 56,
    lineHeight: 40,
  },
  md: {
    ...extraBold,
    fontSize: 64,
    lineHeight: 48,
  },
  lg: {
    ...extraBold,
    fontSize: 72,
    lineHeight: 56,
  },
};

export const label = {
  sm: {
    ...bold,
    fontSize: 12,
    lineHeight: 16,
  },
  md: {
    ...bold,
    fontSize: 14,
    lineHeight: 20,
  },
  lg: {
    ...bold,
    fontSize: 16,
    lineHeight: 24,
  },
};

export const body = {
  xs: {
    ...regular,
    fontSize: 10,
    lineHeight: 16,
  },  
  sm: {
    ...regular,
    fontSize: 12,
    lineHeight: 16,
  },
  md: {
    ...regular,
    fontSize: 14,
    lineHeight: 20,
  },
};
