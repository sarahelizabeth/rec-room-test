import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/styles/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { ThemedView } from '@/components/ThemedView';
import { Link, useRouter } from 'expo-router';
import { useOAuth, useSignUp, useSignIn } from '@clerk/clerk-expo';
import { OAuthStrategy } from '@/types/enums';
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import InputField from '@/components/InputField';

const EmailAccountPage = () => {
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
      // return;
    }
    router.dismiss();
    // router.push(`/(onboarding)/createProfile`);
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

        <View style={styles.inputContainer}>
          <InputField
            label='Verified Email'
            value={email2}
            onChangeText={setEmail2}
            hint='This is the email you will use to sign in to your account'
            colorScheme='main'
            variant='secondary'
          />

          <InputField
            label='Password'
            value={password}
            onChangeText={setPassword}
            colorScheme='main'
            variant='secondary'
          />

          <InputField
            label='Confirm Password'
            value={password2}
            onChangeText={setPassword2}
            colorScheme='main'
            variant='secondary'
          />
        </View>

        <View style={[styles.footer, { paddingBottom: bottom }]}>
          <Link href='/(onboarding)/createProfile' asChild>
            <PrimaryButton
              title='Next'
              onPress={() => handleNext()}
              type='floating'
              size='large'
              variant='secondary'
              icon={<Ionicons name='chevron-forward' size={20} color={Colors.light.text.brand.primary} />}
            />
          </Link>
        </View>
      </View>
    </ThemedView>
  );
};

export default EmailAccountPage;

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
