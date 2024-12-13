import { Text, useColorScheme, View } from 'react-native';
import Logo from '@/assets/images/logo-inverse.svg';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  const colorScheme = useColorScheme();
  console.log('colorScheme', colorScheme);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
      <ThemedText type="title" colorScheme="main" colorType="primary">
        Hello
      </ThemedText>
    </View>
  );
}
