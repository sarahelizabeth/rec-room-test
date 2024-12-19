import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/styles/Colors';
import { Link, useRouter } from 'expo-router';
import PrimaryButton from '@/components/PrimaryButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';


export default function Index() {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: 50 + top }]}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 150,
          }}
        >
          <Feather name='music' size={60} color='white' />
          <MaterialCommunityIcons name='television-classic' size={64} color='white' style={{ marginBottom: 2 }} />
          <Feather name='book-open' size={60} color='white' />
          <FontAwesome5 name='film' size={60} color='white' style={{ marginRight: 5 }} />
        </View>

        <ThemedText size='lg' variant='display' colorScheme='main' colorType='primary_inverse'>
          theRecRoom
        </ThemedText>
      </View>

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
      </View>

      <View style={[styles.footer, { paddingBottom: bottom + 12 }]}>
        <Text style={styles.footerText}>Terms of Service</Text>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 38,
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    color: 'white',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 12,
  },
  footerText: {
    color: 'white',
  },
});
