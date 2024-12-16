import { OAuthStrategy } from '@/types/enums';

export const SIGNUP_OPTIONS = [
  {
    text: 'Sign up with Apple',
    strategy: OAuthStrategy.Apple,
    icon: require('@/assets/images/apple.png'),
  },
  {
    text: 'Sign up with Google',
    strategy: OAuthStrategy.Google,
    icon: require('@/assets/images/google.png'),
  },
  {
    text: 'Sign up with Facebook',
    strategy: OAuthStrategy.Facebook,
    icon: require('@/assets/images/facebook.png'),
  },
];
