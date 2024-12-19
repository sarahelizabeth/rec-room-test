import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import InputField from '@/components/InputField'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/styles/Colors'
import { useBotttsAvatar } from '@/hooks/useAvatar'
import { SvgUri } from 'react-native-svg';
import { useUser } from '@clerk/clerk-expo'


const CreateProfilePage = () => {
  const router = useRouter()
  const { top } = useSafeAreaInsets()
  const { user } = useUser()
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [avatarUri, setAvatarUri] = useState(useBotttsAvatar())
  console.log(user)
  const checkUsername = () => {
    // TODO: Check if username is already taken
    setUsernameError('This username is already taken')
  }

  const handleUploadAvatarImage = () => {
    // TODO: Upload avatar image
  }

  const handleSelectAvatarImage = () => {
    // TODO: Select avatar image
  }

  const handleRegenerateAvatar = () => {
    setAvatarUri(useBotttsAvatar())
  }

  const onFinish = () => {
    // TODO: Finish creating profile
  }

  return (
    <ThemedView variant='fullPage' colorScheme='brand' colorType='primary'>
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={styles.header}>
          <ThemedText size='sm' variant='display' colorScheme='main' colorType='primary_inverse'>
            Create Profile
          </ThemedText>
          <TouchableOpacity onPress={() => router.dismissAll()}>
            <Ionicons name='close' size={24} color={Colors.light.text.main.primary_inverse} />
          </TouchableOpacity>
        </View>

        <View style={styles.usernameContainer}></View>
        <InputField
          label='Username'
          value={username}
          onChangeText={setUsername}
          hint='This will be your username on the app'
          error={usernameError}
          colorScheme='main'
          variant='secondary'
          placeholder='Enter your username'
          maxLength={20}
          leftIcon={<Ionicons name='person' size={20} color={Colors.light.text.main.primary} />}
        />
      </View>

      <View style={styles.avatarContainer}>
        <ThemedText>Your Avatar</ThemedText>
        <TouchableOpacity onPress={handleRegenerateAvatar}>
          <ThemedText>regenerate avatar</ThemedText>
        </TouchableOpacity>
        <View style={styles.avatarRow}>
          <View style={styles.uploadAvatarButton}></View>
          <View style={styles.divider} />
          <View style={styles.defaultAvatarPreview}>{/* <ThemedText>Default Avatar</ThemedText> */}</View>
          <View style={styles.initialsAvatarPreview}>{/* <ThemedText>Initials Avatar</ThemedText> */}</View>
          <View style={styles.botsAvatarPreview}>
            <SvgUri
              width="100%"
              height="100%"
              uri={avatarUri}
            />
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

export default CreateProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    width: '100%',
  },
  usernameContainer: {
    width: '100%',
  },
  avatarContainer: {
    width: '100%',
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  uploadAvatarButton: {
    width: 48,
    height: 48,
    backgroundColor: Colors.light.background.main.primary,
    borderRadius: 8,
  },
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.light.text.main.primary,
    height: 48,
  },
  defaultAvatarPreview: {
    width: 48,
    height: 48,
    backgroundColor: Colors.light.background.main.primary,
    borderRadius: 8,
  },
  initialsAvatarPreview: {
    width: 48,
    height: 48,
    backgroundColor: Colors.light.background.main.primary,
    borderRadius: 8,
  },
  botsAvatarPreview: {
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
});