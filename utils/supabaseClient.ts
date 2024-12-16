import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

function createSupabaseClient() {
  return createClient(
    supabaseUrl, 
    supabaseAnonKey, 
    {
      global: {
        // get Supabase auth token with custome fetch method
        fetch: async (url, options) => {
          const clerkToken = await (window as any)?.Clerk?.session?.getToken({
            template: 'supabase',
          });

          // construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set('Authorization', `Bearer ${clerkToken}`);

          // call the default fetch method
          return fetch(url, { ...options, headers });
        }
      } 
    }
  );
}

export const client = createSupabaseClient();