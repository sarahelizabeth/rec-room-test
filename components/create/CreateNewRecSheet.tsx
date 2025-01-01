import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { Colors } from '@/styles/Colors';
import InputField from '@/components/InputField';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';

type MediaType = 'book' | 'film' | 'show' | 'music' | null;

interface CreateNewRecSheetProps {
  mediaType: MediaType;
}

export function CreateNewRecSheet({ mediaType }: CreateNewRecSheetProps) {
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const bottomSheetRef = useRef(null);

  const getCreatorLabel = () => {
    switch (mediaType) {
      case 'book':
        return 'Author';
      case 'film':
      case 'show':
        return 'Director';
      case 'music':
        return 'Artist';
      default:
        return 'Creator';
    }
  };

  const handleSubmit = () => {
    // TODO: Handle submission logic
    console.log({
      mediaType,
      title,
      creator,
      review,
      rating
    });
  };

  return (
    <BottomSheetView style={styles.container}>
      <ThemedText size='sm' variant='display' colorScheme='main' colorType='primary'>
        New {mediaType} Recommendation
      </ThemedText>

      <View style={styles.inputContainer}>
        <InputField
          label='Title'
          value={title}
          onChangeText={setTitle}
          variant='secondary'
          placeholder={`Enter ${mediaType} title...`}
          leftIcon={<Ionicons name='text' size={20} color={Colors.light.text.main.tertiary} />}
        />

        <InputField
          label={getCreatorLabel()}
          value={creator}
          onChangeText={setCreator}
          variant='secondary'
          placeholder={`Enter ${getCreatorLabel().toLowerCase()}...`}
          leftIcon={<Ionicons name='person' size={20} color={Colors.light.text.main.tertiary} />}
        />

        <InputField
          label='Review'
          value={review}
          onChangeText={setReview}
          variant='secondary'
          placeholder='Write your thoughts...'
          style={{ height: 100 }}
          multiline
          numberOfLines={4}
          leftIcon={<Ionicons name='create' size={20} color={Colors.light.text.main.tertiary} />}
        />

        {selectedUsers.length > 0 ? (
          <TouchableOpacity
            style={styles.membersContainer}
            onPress={() => {
              // bottomSheetRef.current?.present();
              console.log('selectedUsers', selectedUsers);
            }}
          >
            <Ionicons name='people' size={24} color={Colors.light.text.main.tertiary} />
            <Text style={styles.memberText}>
              Recommending to <Text style={{ fontWeight: 'bold' }}>{selectedUsers.length} people</Text>
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.assignMemberButton}
            onPress={() => {
              // bottomSheetRef.current?.present();
              console.log('selectedUsers', selectedUsers);
            }}
          >
            <Ionicons name='people' size={24} color={Colors.light.text.main.tertiary} />
            <Text style={styles.assignMemberText}>Select users to recommend to</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          title='Create Recommendation'
          onPress={handleSubmit}
          type='floating'
          size='large'
          variant='secondary'
          icon={<Ionicons name='arrow-forward' size={20} color={Colors.light.text.brand.primary} />}
          iconPosition='right'
        />
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
    gap: 20,
  },
  footer: {
    marginTop: 32,
  },
  membersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.light.background.main.subtle,
    borderRadius: 8,
    gap: 8,
  },
  memberText: {
    color: Colors.light.text.main.secondary,
  },
  assignMemberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.light.background.main.subtle,
    borderRadius: 8,
    gap: 8,
  },
  assignMemberText: {
    color: Colors.light.text.main.secondary,
  },
});
