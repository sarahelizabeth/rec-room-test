import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity, View, Text } from 'react-native';

export default function OnboardingLayout() {
  const router = useRouter();
  // const 

  return (
    <Stack>
      <Stack.Screen
        name='signup'
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
          // title: 'Sign Up',
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => router.back()}>
          //     <Ionicons name='chevron-back' size={20} color='#000' />
          //   </TouchableOpacity>
          // ),
          headerShadowVisible: false,
          // headerTitle(props) {
          //   return (
          //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 200 }}>
          //       <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sign Up</Text>
          //     </View>
          //   )
          // },
          // headerBackground() {
          //   return (
          //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 250, backgroundColor: 'red', top: 0 }}>
          //       <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sign Up</Text>
          //     </View>
          //   )
          // },
          // contentStyle: {
          //   height: '50%',
          //   flex: 1,
          //   bottom: 0,
          // },
          // headerTitle: () => (
          //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: 'red' }}>
          //     <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sign Up</Text>
          //   </View>
          // )
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
    </Stack>
  );
}
