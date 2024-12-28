import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import PrimaryButton from '@/components/PrimaryButton'
import { Ionicons } from '@expo/vector-icons'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { ThemedText } from '@/components/ThemedText'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ProfilePage = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  const { top, bottom } = useSafeAreaInsets();
  
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={[styles.container, { paddingTop: top, paddingBottom: bottom + 36 }]}>
        <ThemedText size='md' variant='display' colorScheme='main' colorType='primary'>
          Profile
        </ThemedText>
        <View style={{ flex: 1, alignItems: 'center', gap: 12, justifyContent: 'center' }}>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
            Username: {user?.username}
          </ThemedText>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
            First Name: {user?.firstName}
          </ThemedText>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
            Email: {user?.emailAddresses[0].emailAddress}
          </ThemedText>

          {user?.verifiedExternalAccounts && user?.verifiedExternalAccounts.length > 0 && (
            <>
              <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
                Verified External Accounts:
              </ThemedText>
            
              {user?.verifiedExternalAccounts?.map((account) => (
                <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
                  {account.provider.charAt(0).toUpperCase() + account.provider.slice(1)}
                </ThemedText>
              ))}
            </>
          )}

          {user?.hasImage && (
            <Image source={{ uri: user.imageUrl }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          )}
        </View>
        <PrimaryButton
          title='Sign Out'
          onPress={() => signOut()}
          type='solid'
          size='large'
          variant='primary'
          icon={<Ionicons name='log-out' size={20} color='#000' />}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
})