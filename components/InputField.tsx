import { StyleSheet, TextInput, View, TextInputProps, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'
import { InputStyles } from '@/styles'
import { Elevation } from '@/styles/Effects'
import { InputContentTypes } from '@/types/helpers'

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
  disabled?: boolean
  textContentType?: InputContentTypes
  keyboardType?: KeyboardTypeOptions
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoCorrect?: boolean
  onSubmitEditing?: () => void
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
  disabled,
  style,
  textContentType = 'none',
  autoComplete = 'off',
  autoCapitalize = 'none',
  autoCorrect = false,
  onSubmitEditing,
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
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={placeholderColor}
          maxLength={maxLength}
          editable={!disabled}
          textContentType={textContentType}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
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