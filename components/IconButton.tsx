import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useButtonStyles } from '@/hooks/useButtonStyles';

interface IconButtonProps {
  description?: string;
  onPress: () => void;
  icon: React.ReactNode;
  type?: 'solid' | 'outline' | 'ghost' | 'floating';
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  isPill?: boolean;
}
const IconButton = ({ description, onPress, disabled, type, size, variant, isPill, icon }: IconButtonProps) => {
  const styles = useButtonStyles('icon',type, size, variant, isPill, disabled);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
