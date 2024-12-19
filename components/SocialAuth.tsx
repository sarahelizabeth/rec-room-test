import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import { useOAuth, useSignUp, useSignIn } from '@clerk/clerk-expo';
import { OAuthStrategy } from '@/types/enums';
import { useRouter } from 'expo-router';

const AUTH_OPTIONS = [
  {
    signUpText: 'Sign up with Apple',
    signInText: 'Log in with Apple',
    strategy: OAuthStrategy.Apple,
    icon: require('@/assets/images/apple.png'),
  },
  {
    signUpText: 'Sign up with Google',
    signInText: 'Log in with Google',
    strategy: OAuthStrategy.Google,
    icon: require('@/assets/images/google.png'),
  },
  {
    signUpText: 'Sign up with Github',
    signInText: 'Log in with Github',
    strategy: OAuthStrategy.Github,
    icon: require('@/assets/images/github.png'),
  },
];

const SocialAuth = ({ type }: { type: 'signUp' | 'signIn' }) => {
  const router = useRouter();
  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: OAuthStrategy.Google });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: OAuthStrategy.Apple });
  const { startOAuthFlow: githubAuth } = useOAuth({ strategy: OAuthStrategy.Github });

  const onSelectAuth = async (strategy: OAuthStrategy) => {
    console.log('onSelectAuth', strategy);
    if (!signUp && !signIn) {
      console.log('No signUp or signIn');
      return;
    } else {
      console.log('signUp or signIn');
    }

    const selectedAuth = {
      [OAuthStrategy.Google]: googleAuth,
      [OAuthStrategy.Apple]: appleAuth,
      [OAuthStrategy.Github]: githubAuth,
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
        console.log('User signed in successfully');
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
      console.log('User needs to be created');
      const res = await signUp?.create({
        transfer: true,
      });

      if (res?.status === 'complete') {
        console.log('User created successfully');
        setActive?.({
          session: res.createdSessionId,
        });
      }
    } else {
      console.log('User needs to be signed in');
      // If the user has an account in your application
      // and has an OAuth account connected to it, you can sign them in.
      try {
        const { createdSessionId, setActive } = await selectedAuth();
        console.log('createdSessionId', createdSessionId);
        console.log('setActive', setActive);
        if (createdSessionId) {
          setActive?.({ session: createdSessionId });
          console.log('Session created successfully');
          router.push('/(auth)/(tabs)/feed');
        }
      } catch (err) {
        console.error('Error signing in or signing up', err);
      }
    }
  };

  return (
    <View style={styles.socialOptions}>
      {AUTH_OPTIONS.map((option, index) => (
        <PrimaryButton
          key={index}
          onPress={() => onSelectAuth(option.strategy)}
          type='floating'
          size='large'
          variant='tertiary'
          title={type === 'signUp' ? option.signUpText : option.signInText}
          icon={<Image source={option.icon} style={styles.socialButtonIcon} />}
          iconPosition='left'
        />
      ))}
    </View>
  );
};

export default SocialAuth;

const styles = StyleSheet.create({
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
});
