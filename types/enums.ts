export enum AuthStrategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url: string;
}