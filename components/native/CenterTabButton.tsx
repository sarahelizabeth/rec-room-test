import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { IconSymbol } from './IconSymbol';
import { Colors } from '@/styles/Colors';
import { Elevation } from '@/styles/Effects';
import * as Haptics from 'expo-haptics';

interface CenterTabButtonProps {
  onPress: () => void;
}

export function CenterTabButton({ onPress }: CenterTabButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
      }}
    >
      <IconSymbol 
        size={32} 
        name="plus.circle.fill" 
        color={Colors.light.icon.brand.primary} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -20,
    left: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.background.main.primary,
    ...Elevation.xl,
  }
}); 