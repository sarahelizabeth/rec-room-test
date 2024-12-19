import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Stack, useRouter } from 'expo-router';
import { TouchableOpacity, View, Text } from 'react-native';

export default function OnboardingLayout() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href='/(auth)/(tabs)/feed' />
  }

  return (
    <Stack>
      <Stack.Screen
        name='signup'
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen
        name='emailAccount'
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='createProfile'
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='login'
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
