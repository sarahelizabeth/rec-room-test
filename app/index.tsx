import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '@/assets/images/logo-inverse.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useButtonStyles } from '@/hooks/useButtonStyles';
import { Colors } from '@/styles/Colors';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import SignUpModal from '@/components/auth/SignUpModal';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const mainButton = useButtonStyles('floating', 'xLarge', 'secondary');
  const secondaryButton = useButtonStyles('ghost', 'medium', 'primary');

  const signUpModalRef = useRef<BottomSheetModal>(null);
  const loginModalRef = useRef<BottomSheetModal>(null);
  const emailAccountModalRef = useRef<BottomSheetModal>(null);
  const profileModalRef = useRef<BottomSheetModal>(null);

  const handleSignUpModal = () => {
    console.log('handleSignUpModal', signUpModalRef.current);
    signUpModalRef.current?.present();
  };
  const handleLoginModal = () => loginModalRef.current?.present();
  const handleEmailAccountModal = () => emailAccountModalRef.current?.present();
  const handleProfileModal = () => profileModalRef.current?.present();

  return (
    <BottomSheetModalProvider>
    {/* <View style={{ flex: 1 }}> */}
      <SignUpModal ref={signUpModalRef} />
      <View style={[styles.container, { paddingTop: 50 + top }]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '80%',
            marginTop: 150,
          }}
        >
          {/* <Logo width={40} height={40} /> */}
          <Feather name='music' size={50} color='white' />
          <MaterialCommunityIcons name='television-classic' size={52} color='white' style={{ marginBottom: 2 }} />
          <Feather name='book-open' size={50} color='white' />
          <FontAwesome5 name='film' size={50} color='white' />
        </View>
        <Text style={styles.splashTitle}>theRecRoom</Text>

        <View style={{ flex: 1, alignItems: 'center', marginTop: 'auto', gap: 12, width: '100%' }}>
          <TouchableOpacity style={mainButton.button} onPress={() => router.push('/(onboarding)/signup')}>
            <Text style={mainButton.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={secondaryButton.button} onPress={() => signUpModalRef.current?.present()}>
            <Text style={[secondaryButton.buttonText, { color: Colors.light.text.main.primary_inverse }]}>Login</Text>
          </TouchableOpacity>
          <Text>Terms of Service</Text>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: Colors.light.background.brand.primary,
  },
  splashTitle: {
    fontSize: 38,
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    color: 'white',
  },
});
