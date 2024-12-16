import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/styles/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SIGNUP_OPTIONS } from '@/types/constants';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useOAuth, useSignUp, useSignIn } from '@clerk/clerk-expo';
import { OAuthStrategy } from '@/types/enums';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router/build/hooks';

const SignUpPage = () => {
  const { bottom, top } = useSafeAreaInsets();
  const { email } = useLocalSearchParams<{ email: string }>();
  const router = useRouter();
  const [email2, setEmail2] = useState(email);

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  
  // const onNext = async () => {
  //   if (!signUp && !signIn) return;

  //   const res = await signUp?.create({
  //     emailAddress: email,
  //   });

  //   if (res?.status === 'complete') {
  //     setActive?.({
  //       session: res.createdSessionId,
  //     });
  //   }
  // };

  const handleNext = () => {
    if (password !== password2) {
      Alert.alert('Passwords do not match');
      return;
    }
    router.push(`/(onboarding)/createProfile`);
  };

  return (
    <ThemedView type='fullPage' colorScheme='brand' colorType='primary'>
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: top + 50 }]}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sign Up</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name='close' size={20} color='#000' />
          </TouchableOpacity>
        </View>

        <View style={styles.emailContainer}>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
            Sign up with email
          </ThemedText>
          <TextInput
            placeholder='Email'
            placeholderTextColor={Colors.light.text.brand.subtle}
            style={styles.emailInput}
            value={email2}
            onChangeText={setEmail2}
          />
        </View>

        <View style={styles.passwordContainer}>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
            Password
          </ThemedText>
          <TextInput
            placeholder='Password'
            placeholderTextColor={Colors.light.text.brand.subtle}
            style={styles.emailInput}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.passwordContainer}>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>
            Confirm Password
          </ThemedText>
          <TextInput
            placeholder='Confirm Password'
            placeholderTextColor={Colors.light.text.brand.subtle}
            style={styles.emailInput}
            value={password2}
            onChangeText={setPassword2}
          />
        </View>

        <View style={[styles.footer, { paddingBottom: bottom }]}>
          <PrimaryButton
            title='Next'
            onPress={() => handleNext()}
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

export default SignUpPage;

const styles = StyleSheet.create({
  sheetContainer: {
    marginHorizontal: 24,
  },
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
    paddingVertical: 16,
  },
  socialOptions: {
    flex: 1,
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // paddingHorizontal: 16,
  },
  socialButton: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 16,
  },
  socialButtonIcon: {
    width: 20,
    height: 20,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    borderBottomColor: Colors.light.border.brand.subtle,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dividerText: {
    fontFamily: 'mon-sb',
    color: Colors.light.border.brand.tertiary,
    fontSize: 16,
  },
  emailContainer: {
    width: '100%',
  },
  passwordContainer: {
    width: '100%',
  },
  emailInput: {
    width: '100%',
    height: 56,
    borderColor: Colors.light.border.main.bold,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.light.background.main.primary,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
    color: Colors.light.text.main.primary,
    fontFamily: 'PlusJakartaSans_400Regular',
  },
  footer: {
    width: '100%',
    marginTop: 30,
  },
});
