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
import { useAuth, useUser } from '@clerk/clerk-expo'
import PrimaryButton from '@/components/PrimaryButton'


const CreateProfilePage = () => {
  const router = useRouter()
  const { top, bottom } = useSafeAreaInsets()
  const { user } = useUser()
  const { signOut } = useAuth()
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [firstName, setFirstName] = useState(user?.firstName || '')
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

  const onFinish = async () => {
    // TODO: Finish creating profile
    try {
      await user?.update({
        username: username,
        firstName: firstName,
      })
      router.push('/(auth)/(tabs)/feed')
    } catch (error) {
      console.error(error)
    }

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

        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.inputContainer}>
            <InputField
              label='Username'
              value={username}
              onChangeText={setUsername}
              error={usernameError}
              variant='secondary'
              placeholder='Your username...'
              maxLength={20}
              leftIcon={<Ionicons name='person' size={20} color={Colors.light.text.main.primary} />}
            />

            <InputField
              label='First Name (optional)'
              value={firstName}
              onChangeText={setFirstName}
              variant='secondary'
              size='small'
              placeholder='Your first name...'
              hint='This will be displayed to your friends & used for search'
            />
          </View>

          <View style={styles.avatarContainer}>
            <ThemedText
              size='sm'
              variant='display'
              colorScheme='brand'
              colorType='primary_inverse'
            >
              Your Avatar
            </ThemedText>
            <PrimaryButton
              title='Regenerate Avatar'
              onPress={handleRegenerateAvatar}
              type='floating'
              size='small'
              variant='secondary'
              icon={<Ionicons name='refresh' size={20} color={Colors.light.text.brand.primary} />}
            />
            <View style={styles.avatarRow}>
              <View style={styles.uploadAvatarButton}></View>
              <View style={styles.divider} />
              <View style={styles.defaultAvatarPreview}>
                <Image source={{ uri: user?.imageUrl }} style={styles.defaultAvatarPreview} />
              </View>
              <View style={styles.initialsAvatarPreview}>{/* <ThemedText>Initials Avatar</ThemedText> */}</View>
              <View style={styles.botsAvatarPreview}>
                <SvgUri width='100%' height='100%' uri={avatarUri} />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.footer, { paddingBottom: bottom + 24 }]}>
          <PrimaryButton
            title='Finish'
            onPress={onFinish}
            type='floating'
            size='large'
            variant='secondary'
            icon={<Ionicons name='chevron-forward' size={20} color={Colors.light.text.brand.primary} />}
            iconPosition='right'
          />
          <PrimaryButton
            title='Sign Out'
            onPress={signOut}
            type='ghost'
            size='small'
            variant='secondary'
          />
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
  inputContainer: {
    width: '100%',
    gap: 32,
  },
  avatarContainer: {
    width: '100%',
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  uploadAvatarButton: {
    width: 72,
    height: 72,
    backgroundColor: Colors.light.background.main.primary,
    borderRadius: 8,
  },
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.light.text.main.primary,
    height: 48,
  },
  defaultAvatarPreview: {
    width: 72,
    height: 72,
    backgroundColor: Colors.light.background.main.primary,
    borderRadius: 8,
  },
  initialsAvatarPreview: {
    width: 72,
    height: 72,
    backgroundColor: Colors.light.background.main.primary,
    borderRadius: 8,
  },
  botsAvatarPreview: {
    width: 72,
    height: 72,
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    width: '100%',
  },
});
