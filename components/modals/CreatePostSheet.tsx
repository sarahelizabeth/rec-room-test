import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { BottomSheetView } from '@gorhom/bottom-sheet';

export function CreatePostSheet() {
  return (
    <BottomSheetView style={styles.container}>
      <ThemedText size="lg" variant="display" colorScheme="main" colorType="primary">
        Create New Post
      </ThemedText>
    </BottomSheetView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
}); 