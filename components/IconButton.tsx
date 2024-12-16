import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useButtonStyles } from '@/hooks/useButtonStyles';

interface IconButtonProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
  type?: 'solid' | 'outline' | 'ghost' | 'floating';
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  isPill?: boolean;
}

const IconButton = ({ title, onPress, disabled, type, size, variant, isPill, icon }: IconButtonProps) => {
  const styles = useButtonStyles(type, size, variant, isPill, disabled);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
