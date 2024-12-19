import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/styles/Colors';
import { useRouter } from 'expo-router';
import PrimaryButton from '@/components/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  return (
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
          <PrimaryButton
            type="floating"
            size="xLarge"
            variant="secondary"
            title="Sign Up"
            onPress={() => router.push('/(onboarding)/signup')}
          />
          <PrimaryButton
            type="ghost"
            size="medium"
            variant="secondary"
            title="Login"
            onPress={() => router.push('/(onboarding)/login')}
          />
          <Text>Terms of Service</Text>
        </View>
      </View>
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
