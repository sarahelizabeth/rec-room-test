import { Tabs } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';

import { HapticTab } from '@/components/native/HapticTab';
import { IconSymbol } from '@/components/native/IconSymbol';
import { CenterTabButton } from '@/components/native/CenterTabButton';
import TabBarBackground from '@/components/native/TabBarBackground';
import { Colors } from '@/styles/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CreateNewRecSheet } from '@/components/create/CreateNewRecSheet';
import { SelectMediaTypeSheet } from '@/components/create/SelectMediaTypeSheet';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ['20%', '70%'], []);
  const [sheetIndex, setSheetIndex] = useState(-1);
  const [mediaType, setMediaType] = useState<'book' | 'film' | 'show' | 'music' | null>(null);
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
    setSheetIndex(0);
  }, []);

  const handleSelectMedia = (type: 'book' | 'film' | 'show' | 'music') => {
    console.log(type);
    bottomSheetRef.current?.snapToIndex(1);
    setSheetIndex(1);
    setMediaType(type);
  };

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        opacity={0.6}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={() => bottomSheetRef.current?.close()}
      />
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].icon.main.primary,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            title: 'Feed',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: 'Notifications',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="bell.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: '',
            tabBarButton: () => <CenterTabButton onPress={handlePresentPress} />,
          }}
          listeners={{
            tabPress: (e) => {
              console.log('tabPress');
              e.preventDefault();
              
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
          }}
        />
      </Tabs>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        enableOverDrag={false}
        enableHandlePanningGesture={false}
        enableDynamicSizing={false}
        enableContentPanningGesture={false}
        handleComponent={null}
        backgroundStyle={{
          backgroundColor: Colors[colorScheme ?? 'light'].background.main.primary,
        }}
        backdropComponent={renderBackdrop}
        bottomInset={20}
        detached={true}
        style={styles.bottomSheet}
      >
        {sheetIndex === 0 && <SelectMediaTypeSheet handleSelectMedia={handleSelectMedia}/>}
        {sheetIndex === 1 && <CreateNewRecSheet mediaType={mediaType} />}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    marginHorizontal: 12,
    borderRadius: 40,
  },
});
