import { StyleSheet, TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native'
import React, { forwardRef } from 'react'
import { useButtonStyles } from '@/hooks/useButtonStyles'
import { ThemedText } from './ThemedText'
import { spacing } from '@/styles/DesignTokens'

interface PrimaryButtonProps {
  title: string
  onPress: () => void
  icon?: React.ReactNode
  type?: 'solid' | 'outline' | 'ghost' | 'floating'
  size?: 'small' | 'medium' | 'large' | 'xLarge'
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  isPill?: boolean
  iconPosition?: 'left' | 'right'
}

const PrimaryButton = forwardRef<View, PrimaryButtonProps & { style?: StyleProp<ViewStyle> }>(({ 
  title, 
  onPress, 
  disabled, 
  ...rest
}: PrimaryButtonProps & { style?: StyleProp<ViewStyle> }, ref: React.Ref<View>) => {
  const styles = useButtonStyles(rest.type, rest.size, rest.variant, rest.isPill, disabled)

  return (
    <TouchableOpacity 
      ref={ref}
      style={[styles.button, rest.style]} 
      onPress={onPress} 
      disabled={disabled}
    >
      <View style={buttonStyles.contentContainer}>
        {rest.icon && rest.iconPosition === 'left' && (
          <View style={buttonStyles.iconContainer}>
            {rest.icon}
          </View>
        )}
        
        <ThemedText
          style={styles.buttonText}
          variant="body"
          size={rest.size === 'small' ? 'sm' : rest.size === 'xLarge' ? 'lg' : 'md'}
          weight="semiBold"
          colorScheme={rest.variant === 'primary' ? 'brand' : 'main'}
          colorType={rest.type === 'solid' || rest.type === 'floating' ? 'primary_inverse' : 'primary'}
        >
          {title}
        </ThemedText>

        {rest.icon && rest.iconPosition === 'right' && (
          <View style={buttonStyles.iconContainer}>
            {rest.icon}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
})

export default PrimaryButton

const buttonStyles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[8],
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})