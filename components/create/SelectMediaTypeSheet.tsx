import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { Colors } from '@/styles/Colors';
import IconButton from '@/components/IconButton';
import { Ionicons } from '@expo/vector-icons';

export function SelectMediaTypeSheet({ handleSelectMedia }: { handleSelectMedia: (type: 'book' | 'film' | 'show' | 'music') => void } ) {

  return (
    <BottomSheetView style={styles.container}>
          <ThemedText size='sm' variant='display' colorScheme='main' colorType='primary'>
            Select Media Type
          </ThemedText>
          <View style={styles.buttonContainer}>
            <IconButton onPress={() => handleSelectMedia('book')} icon={<Ionicons name="book" size={24} color="white" />} />
            <IconButton onPress={() => handleSelectMedia('film')} icon={<Ionicons name="film" size={24} color="white" />} />
            <IconButton onPress={() => handleSelectMedia('music')} icon={<Ionicons name="mic" size={24} color="white" />} />
            <IconButton onPress={() => handleSelectMedia('show')} icon={<Ionicons name="tv" size={24} color="white" />} />
        </View>
    </BottomSheetView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputContainer: {
    marginTop: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
}); 