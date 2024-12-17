import { StyleSheet, TextInput, View, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'
import { InputStyles } from '@/styles'
import { Elevation } from '@/styles/Effects'

interface InputFieldProps extends Omit<TextInputProps, 'onChange'> {
  label: string
  maxLength?: number
  value: string
  onChangeText: (text: string) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  hint?: string
  error?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
  colorScheme?: 'main' | 'brand' | 'info' | 'warning' | 'error' | 'success'
  disabled?: boolean
}

const InputField = ({ 
  label, 
  maxLength,
  value, 
  onChangeText, 
  leftIcon, 
  rightIcon, 
  hint,
  error,
  size = 'medium',
  variant = 'primary',
  colorScheme = 'main',
  disabled,
  style,
  ...rest
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const sizeConfig = InputStyles.sizes[size];
  const variantConfig = InputStyles.variants[variant];
    
  const backgroundColor = useThemeColor({...variantConfig.background[disabled ? 'disabled' : 'default']}, 'background');

  const borderColor = useThemeColor(
    {
      ...(error
        ? variantConfig.border.error
        : isFocused
        ? variantConfig.border.focused
        : disabled
        ? variantConfig.border.disabled
        : variantConfig.border.default),
    }, 'border');

  const textColor = useThemeColor(
    {
      ...variantConfig.text[disabled ? 'disabled' : 'default'],
    },
    'text'
  );

  const placeholderColor = useThemeColor(
    {
      ...variantConfig.text.placeholder,
    },
    'text'
  );

  const labelColor = useThemeColor(
    {
      ...(error ? variantConfig.label.error : variantConfig.label.default),
    },
    'text'
  );

  const hintColor = useThemeColor(
    {
      ...(error ? variantConfig.hint.error : variantConfig.hint.default),
    },
    'text'
  );

  return (
    <View style={[InputStyles.base.container]}>
      <View style={[InputStyles.base.labelContainer, { width: '100%' }  ]}>
        <ThemedText 
          style={[sizeConfig.label, { color: labelColor }]}
        >
          {label}
        </ThemedText>
        {maxLength && (
          <ThemedText 
            style={[sizeConfig.text, { color: hintColor }]}
          >
            {`${value.length}/${maxLength}`}
          </ThemedText>
        )}
      </View>

      <View style={[
        InputStyles.base.input,
        sizeConfig.input,
        { backgroundColor, borderColor },
        error && { borderWidth: 2 },
        isFocused && { borderWidth: 2 },
        disabled && { opacity: 0.5 },
        Elevation.xs
      ]}>
        {leftIcon && (
          <>
            <View style={InputStyles.base.iconContainer}>
              {leftIcon}
            </View>
            <View style={{ width: 1, height: '60%', borderColor: borderColor, borderWidth: StyleSheet.hairlineWidth }} />
          </>
        )}
        <TextInput 
          style={[
            InputStyles.base.textField,
            sizeConfig.text,
            { color: textColor },
            style,
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={placeholderColor}
          maxLength={maxLength}
          editable={!disabled}
          {...rest}
        />
        {rightIcon && <View style={InputStyles.base.iconContainer}>{rightIcon}</View>}
      </View>

      {(error || hint) && (
        <View style={InputStyles.base.messageContainer}>
          <ThemedText 
            style={[sizeConfig.hint, { color: hintColor }]}
          >
            {error || hint}
          </ThemedText>
        </View>
      )}
    </View>
  )
}

export default InputField