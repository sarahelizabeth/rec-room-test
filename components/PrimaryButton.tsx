import { StyleSheet, Text, TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { useButtonStyles } from '@/hooks/useButtonStyles'

interface PrimaryButtonProps {
  title: string
  onPress: () => void
  icon?: React.ReactNode
  type?: 'solid' | 'outline' | 'ghost' | 'floating'
  size?: 'small' | 'medium' | 'large' | 'xLarge'
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  isPill?: boolean
}

const PrimaryButton = ({ title, onPress, disabled, type, size, variant, isPill, icon, style }: PrimaryButtonProps & { style?: StyleProp<ViewStyle> }) => {
  const styles = useButtonStyles(type, size, variant, isPill, disabled)

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
      {icon}
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})