import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/styles/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { ThemedView } from '@/components/ThemedView';
import { Link, useRouter } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import InputField from '@/components/InputField';

const EmailAccountPage = () => {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();

  const { loginEmail } = useLocalSearchParams<{ loginEmail: string }>();
  const [email, setEmail] = useState(loginEmail);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const { isLoaded, signUp, setActive } = useSignUp();
  
  const onSubmitUserInfo = async () => {
    if (!isLoaded) return;

    if (password !== password2) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      await signUp?.create({
        emailAddress: email,
        username: username,
        password: password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  }

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      console.log('Attempting verification with code:', verificationCode);
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        console.log('User verified');
        router.push('/(onboarding)/createProfile');
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.log('User not verified');
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <ThemedView variant='fullPage' colorScheme='brand' colorType='primary'>
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: top + 50 }]}>
          <ThemedText size='sm' variant='display' colorScheme='main' colorType='primary_inverse'>
            Confirm Email
          </ThemedText>
          <TouchableOpacity onPress={() => router.dismissAll()}>
            <Ionicons name='close' size={20} color={Colors.light.text.main.primary_inverse} />
          </TouchableOpacity>
        </View>

        {pendingVerification ? (
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1, width: '100%' }}>
              <InputField
                label='Verification Code'
                value={verificationCode}
                onChangeText={setVerificationCode}
                hint='Please enter the 6 digit code sent to your email'
                variant='secondary'
              />
            </View>

            <View style={[styles.footer, {paddingBottom: bottom}]}>
              <PrimaryButton
                title='Verify'
                  onPress={onVerifyPress}
                  type='floating'
                  size='large'
                  variant='secondary'
                  icon={<Ionicons name='chevron-forward' size={20} color={Colors.light.text.brand.primary} />}
                />
              </View>
            </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={styles.inputContainer}>
              <InputField
                label='Email'
                value={email}
                onChangeText={setEmail}
                hint='This is the email you will use to sign in to your account'
                variant='secondary'
              />
              {/* <InputField
                label='Username'
                value={username}
                onChangeText={setUsername}
                hint='This is the username you will use to sign in to your account'
                colorScheme='main'
                variant='secondary'
              /> */}
              <InputField
                label='Password'
                value={password}
                onChangeText={setPassword}
                variant='secondary'
                error={passwordError}
                autoComplete='new-password'
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={true}
                textContentType='newPassword'
              />

              <InputField
                label='Confirm Password'
                value={password2}
                onChangeText={setPassword2}
                variant='secondary'
                error={passwordError}
                autoComplete='password'
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={true}
                textContentType='password'
              />
            </View>

            <View style={[styles.footer, { paddingBottom: bottom }]}>
              <PrimaryButton
                title='Next'
                onPress={onSubmitUserInfo}
                type='floating'
                size='large'
                variant='secondary'
                icon={<Ionicons name='chevron-forward' size={20} color={Colors.light.text.brand.primary} />}
              />
            </View>
          </View>
        )}
      </View>
    </ThemedView>
  );
};

export default EmailAccountPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    gap: 36,
  },
  footer: {
    width: '100%',
    marginTop: 30,
  },
});
