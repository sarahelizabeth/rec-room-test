import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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

const SignUpPage = () => {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: OAuthStrategy.Google });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: OAuthStrategy.Apple });
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: OAuthStrategy.Facebook });

  const onSelectAuth = async (strategy: OAuthStrategy) => {
    console.log(strategy);
    if (!signUp && !signIn) return;

    const selectedAuth = {
      [OAuthStrategy.Google]: googleAuth,
      [OAuthStrategy.Apple]: appleAuth,
      [OAuthStrategy.Facebook]: facebookAuth,
    }[strategy];

    // If the user has an account in your application, but does not yet
    // have an OAuth account connected to it, you can transfer the OAuth
    // account to the existing user account.
    const userExistsButNeedsToSignIn =
      signUp?.verifications.externalAccount.status === 'transferable' &&
      signUp?.verifications.externalAccount.error?.code === 'external_account_exists';

    if (userExistsButNeedsToSignIn) {
      const res = await signIn?.create({ transfer: true });

      if (res?.status === 'complete') {
        setActive?.({
          session: res.createdSessionId,
        });
      }
    }

    // If the user has an OAuth account but does not yet
    // have an account in your app, you can create an account
    // for them using the OAuth information.
    const userNeedsToBeCreated = signIn?.firstFactorVerification.status === 'transferable';

    if (userNeedsToBeCreated) {
      const res = await signUp?.create({
        transfer: true,
      });

      if (res?.status === 'complete') {
        setActive?.({
          session: res.createdSessionId,
        });
      }
    } else {
      // If the user has an account in your application
      // and has an OAuth account connected to it, you can sign them in.
      try {
        const { createdSessionId, setActive } = await selectedAuth();
        if (createdSessionId) {
          setActive?.({ session: createdSessionId });
          console.log('Session created successfully');
        }
      } catch (err) {
        console.error('Error signing in or signing up', err);
      }
    }
  };

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

  const onNext = () => {
    router.push(`/(onboarding)/createProfile`);
  }

  const handleNext = () => {
    if (showPassword) {
      onNext();
    } else {
      setShowPassword(true);
      router.push(`/(onboarding)/emailAccount?email=${email}`);
    }
  }

  return (
    <ThemedView type='fullPage' colorScheme='brand' colorType='primary'>
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: top + 50 }]}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sign Up</Text>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='close' size={20} color='#000' />
          </TouchableOpacity>
        </View>
        <View style={styles.socialOptions}>
          {SIGNUP_OPTIONS.map((option, index) => (
            <PrimaryButton 
              style={styles.socialButton} 
              onPress={() => onSelectAuth(option.strategy)} 
              type='floating' 
              size='xLarge' 
              variant='tertiary' 
              key={index} 
              title={option.text} 
              icon={<Image source={option.icon} style={styles.socialButtonIcon} />} 
            />
          ))}
        </View>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.emailContainer}>
          <ThemedText size='md' variant='label' colorScheme='main' colorType='primary'>Sign up with email</ThemedText>
          <TextInput
            placeholder='Email'
            placeholderTextColor={Colors.light.text.brand.subtle}
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
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
