import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
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
import InputField from '@/components/InputField';
import { spacing } from '@/styles/DesignTokens';

const SignUpPage = () => {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: OAuthStrategy.Google });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: OAuthStrategy.Apple });
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: OAuthStrategy.Facebook });

  const onSelectAuth = async (strategy: OAuthStrategy) => {
    if (!signUp && !signIn) return;

    const selectedAuth = {
      [OAuthStrategy.Google]: googleAuth,
      [OAuthStrategy.Apple]: appleAuth,
      [OAuthStrategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();
      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
        console.log('Session created successfully');
      }
    } catch (err) {
      console.error('Error signing in or signing up', err);
    }
  };

  const handleNext = () => {
    if (showPassword) {
      router.push('/(onboarding)/createProfile');
    } else {
      setShowPassword(true);
      router.push(`/(onboarding)/emailAccount?email=${email}`);
    }
  };

  return (
    <ThemedView variant='fullPage' colorScheme='brand' colorType='primary'>
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: top + spacing[24] }]}>
          <ThemedText size='sm' variant='display' colorScheme='main' colorType='primary_inverse'>
            Sign Up
          </ThemedText>
          <TouchableOpacity onPress={() => router.dismissAll()}>
            <Ionicons name='close' size={20} color={Colors.light.text.main.primary_inverse} />
          </TouchableOpacity>
        </View>

        <View style={styles.socialOptions}>
          {SIGNUP_OPTIONS.map((option, index) => (
            <PrimaryButton
              key={index}
              onPress={() => onSelectAuth(option.strategy)}
              type='floating'
              size='large'
              variant='tertiary'
              title={option.text}
              icon={<Image source={option.icon} style={styles.socialButtonIcon} />}
            />
          ))}
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <ThemedText size='md' variant='body' colorScheme='brand' colorType='subtle'>
            OR
          </ThemedText>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.emailContainer}>
          <InputField
            label='Sign up with email'
            value={email}
            onChangeText={setEmail}
            placeholder='Email'
            size='large'
            colorScheme='main'
            variant='secondary'
            leftIcon={<Ionicons name='mail' size={20} color={Colors.light.text.main.tertiary} />}
          />
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

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[24],
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: spacing[16],
  },
  socialOptions: {
    flex: 1,
    gap: spacing[24],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialButtonIcon: {
    width: spacing[20],
    height: spacing[20],
  },
  divider: {
    flexDirection: 'row',
    gap: spacing[12],
    alignItems: 'center',
    marginVertical: spacing[12],
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    borderBottomColor: Colors.light.border.brand.subtle,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  emailContainer: {
    width: '100%',
    marginTop: spacing[12],
  },
  footer: {
    width: '100%',
    marginTop: spacing[24],
  },
});
