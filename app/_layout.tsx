import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { tokenCache } from '@/utils/tokenCache';
import { ClerkProvider, ClerkLoaded, useAuth, useSession, useUser } from '@clerk/clerk-expo';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ActivityIndicator, LogBox, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SupabaseProvider } from '@/context/SupabaseContext';

LogBox.ignoreAllLogs();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publishableKey) {
  throw new Error('EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not set');
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const { session } = useSession();
  const { user } = useUser();
  const segments = useSegments();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';
    console.log(segments);
    // console.log(session);
    console.log('user', user);
    console.log('isSignedIn', isSignedIn);
    console.log('inAuthGroup', inAuthGroup);

    if (isSignedIn && user?.username === null) {
      console.log('isSignedIn and !user?.username');
      router.replace('/(onboarding)/createProfile');
      // return;
    }
    else if (isSignedIn && !inAuthGroup)  {
      console.log('isSignedIn and !inAuthGroup');
      router.replace('/(auth)/(tabs)/feed');
    } else if (!isSignedIn && inAuthGroup) {
      console.log('!isSignedIn and inAuthGroup');
      router.replace('/');
    }
  }, [isSignedIn, isLoaded]);

  // useEffect(() => {
  //   if (!isLoaded) return;

  //   const inAuthGroup = segments[0] === '(auth)';
  //   console.log(segments);
  //   // console.log(session);
  //   console.log('user', user);
  //   console.log('isSignedIn', isSignedIn);
  //   console.log('inAuthGroup', inAuthGroup);

  //   if (isSignedIn && user?.username === null) {
  //     console.log('isSignedIn and !user?.username');
  //     router.replace('/(onboarding)/createProfile');

  //   else if (!isSignedIn) {
  //     console.log('!isSignedIn');
  //     router.replace('/');
  //     return;
  //   }
  // }, [isSignedIn, isLoaded]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='white' />
      </View>
    );
  }

  return (
    <SupabaseProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </SupabaseProvider>
  );
};


export default function RootLayoutNav() {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <InitialLayout />
              <StatusBar style='auto' />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
