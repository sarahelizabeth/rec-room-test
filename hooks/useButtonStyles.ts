// hooks/buttons.ts

import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { buttons, modifiers } from '@/styles';

export const useButtonStyles = (
  type: 'solid' | 'outline' | 'ghost' | 'floating' = 'solid',
  size: 'small' | 'medium' | 'large' | 'xLarge' = 'medium',
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary',
  isPill?: boolean,
  isDisabled?: boolean
) => {
  const buttonConfig = buttons[type].variants[variant];

  // Get colors based on button type
  const backgroundColor = (type === 'solid' || type === 'floating') && 'background' in buttonConfig
    ? useThemeColor(buttonConfig.background.default, 'background')
    : 'transparent';

  const borderColor = type === 'outline' && 'border' in buttonConfig
    ? useThemeColor(buttonConfig.border.default, 'border')
    : undefined;

  const textColor = useThemeColor(isDisabled ? buttonConfig.text.disabled : buttonConfig.text.default, 'text');

  return StyleSheet.create({
    button: {
      ...buttons[type].base,
      ...buttons[type].sizes[size],
      backgroundColor,
      borderColor,
      ...(isPill && modifiers.pill),
      ...(isDisabled && modifiers.disabled),
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      fontFamily: 'PlusJakartaSans-SemiBold',
      color: textColor,
      textAlign: 'left',
    },
  });
};
