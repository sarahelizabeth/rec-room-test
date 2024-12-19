import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import PrimaryButton from '@/components/PrimaryButton'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '@clerk/clerk-expo'
import { ThemedText } from '@/components/ThemedText'

const ProfilePage = () => {
  const { signOut } = useAuth();
  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <ThemedText size='md' variant='display' colorScheme='main' colorType='primary'>
          Profile
        </ThemedText>
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
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
})