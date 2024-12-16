export enum OAuthStrategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook',
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url: string;
}