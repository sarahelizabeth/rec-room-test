import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/styles/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import InputField from '@/components/InputField';
import SocialAuth from '@/components/SocialAuth';

const LoginPage = () => {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleNext = () => {
    // TODO: Add login logic... check if user exists, if not, create user
    // TODO: If user exists, check if user has a username, if not, take them through the onboarding flow
    // TODO: If user has a username, take them to the feed
  };

  return (
    <ThemedView variant='fullPage' colorScheme='brand' colorType='primary'>
      <View style={[styles.container, { paddingTop: top + 24 }]}>
        <View style={styles.header}>
          <ThemedText size='sm' variant='display' colorScheme='main' colorType='primary_inverse'>
            Login
          </ThemedText>
          <TouchableOpacity onPress={() => router.dismissAll()}>
            <Ionicons name='close' size={20} color={Colors.light.text.main.primary_inverse} />
          </TouchableOpacity>
        </View>

        <View style={styles.emailContainer}>
          <InputField
            label='Email'
            value={email}
            onChangeText={setEmail}
            placeholder='Email'
            size='large'
            variant='secondary'
            leftIcon={<Ionicons name='mail' size={20} color={Colors.light.text.main.tertiary} />}
          />
          <InputField
            label='Password'
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
            size='large'
            variant='secondary'
            leftIcon={<Ionicons name='lock-closed' size={20} color={Colors.light.text.main.tertiary} />}
          />
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialOptions}>
          <SocialAuth type='signIn' />
        </View>

        <View style={[styles.footer, { paddingBottom: bottom }]}>
          <PrimaryButton
            title='Next'
            onPress={handleNext}
            type='floating'
            size='large'
            variant='secondary'
            icon={<Ionicons name='chevron-forward' size={20} color={Colors.light.text.brand.primary} />}
          />
        </View>
      </View>
    </ThemedView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 24,
  },
  socialOptions: {
    flex: 1,
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialButtonIcon: {
    width: 20,
    height: 20,
  },
  divider: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginVertical: 12,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    borderBottomColor: Colors.light.text.main.primary_inverse,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  emailContainer: {
    width: '100%',
    paddingVertical: 12,
    gap: 24,
  },
  footer: {
    width: '100%',
    marginTop: 24,
  },
});
