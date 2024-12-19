import { OAuthStrategy } from '@/types/enums';

export const AUTH_OPTIONS = [
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
    signUpText: 'Sign up with Facebook',
    signInText: 'Log in with Facebook',
    strategy: OAuthStrategy.Facebook,
    icon: require('@/assets/images/facebook.png'),
  },
];
