// hooks/buttons.ts

import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Buttons, Modifiers, textButtonSizes, iconButtonSizes } from '@/styles';

export const useButtonStyles = (
  buttonType: 'text' | 'icon',
  type: 'solid' | 'outline' | 'ghost' | 'floating' = 'solid',
  size: 'small' | 'medium' | 'large' | 'xLarge' = 'medium',
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary',
  isPill?: boolean,
  isDisabled?: boolean
) => {
  console.log('buttonType:', buttonType);
  console.log('Buttons:', Buttons);
  console.log('type:', type);
  console.log('size:', size);
  console.log('variant:', variant);
  
  const buttonConfig = Buttons[buttonType][type].variants[variant];
  const sizeConfig = Buttons[buttonType][type].sizes[size];

  // Get background color based on button type and variant
  const backgroundColor = (type === 'solid' || type === 'floating') && 'background' in buttonConfig
    ? useThemeColor({
        colorScheme: buttonConfig.background.default.colorScheme,
        colorType: buttonConfig.background.default.colorType
      }, 'background')
    : 'transparent';

  // Get border color for outline buttons
  const borderColor = type === 'outline' && 'border' in buttonConfig
    ? useThemeColor({
        colorScheme: buttonConfig.border.default.colorScheme,
        colorType: buttonConfig.border.default.colorType
      }, 'border')
    : undefined;

  // Get text color based on state and configuration
  const textColor = useThemeColor({
    colorScheme: buttonConfig.text[isDisabled ? 'disabled' : 'default'].colorScheme,
    colorType: buttonConfig.text[isDisabled ? 'disabled' : 'default'].colorType
  }, 'text');

  const styles = {
    button: {
      ...Buttons[buttonType][type].base,
      ...sizeConfig.container,
      backgroundColor,
      borderColor,
      ...(isPill && Modifiers.pill),
      ...(isDisabled && Modifiers.disabled),
    },
    ...(buttonType === 'text' && 'text' in sizeConfig && {
      buttonText: {
        ...(sizeConfig as typeof textButtonSizes['small']).text,
        color: textColor,
        textAlign: 'center' as const,
      },
    }),
  };

  return StyleSheet.create(styles);
};