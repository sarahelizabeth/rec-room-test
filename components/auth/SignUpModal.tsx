import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, useMemo, useCallback } from 'react'
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { Colors } from '@/styles/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type SignUpModalRef = BottomSheetModal

const SignUpModal = forwardRef<SignUpModalRef>((props, ref) => {
  const snapPoints = useMemo(() => ['40%'], []);
  const { bottom } = useSafeAreaInsets();
  const { dismiss } = useBottomSheetModal();

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        opacity={0}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        onPress={dismiss}
      />
    )
  }, [dismiss]);

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      index={0}
      handleComponent={null}
      backdropComponent={renderBackdrop}
    >
      <View
        style={{
          paddingBottom: bottom,
          paddingHorizontal: 24,
          paddingTop: 24,
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>SignupModal</Text>
        <Text style={{ fontSize: 16, color: '#000' }}>SignupModal</Text>
      </View>
    </BottomSheetModal>
  );
});

export default SignUpModal

const styles = StyleSheet.create({})