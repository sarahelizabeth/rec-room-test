import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { forwardRef, useMemo, useCallback } from 'react'
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetHandle, BottomSheetModal, BottomSheetTextInput, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { Colors } from '@/styles/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SIGNUP_OPTIONS } from '@/types/constants'
import { Ionicons } from '@expo/vector-icons'
import PrimaryButton from '../PrimaryButton'

export type SignUpModalRef = BottomSheetModal

const SignUpModal = forwardRef<SignUpModalRef>((props, ref) => {
  const snapPoints = useMemo(() => ['55%'], []);
  const { bottom } = useSafeAreaInsets();
  const { dismiss } = useBottomSheetModal();

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        opacity={0.1}
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
      detached={true}
      bottomInset={24}
      style={styles.sheetContainer}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={[styles.container, { paddingBottom: bottom }]}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Sign Up</Text>
          <TouchableOpacity onPress={() => dismiss()}>
            <Ionicons name="close" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.socialOptions}>
          {SIGNUP_OPTIONS.map((option, index) => (
            <View style={styles.socialButton} key={index}>
              <Image source={option.icon} style={styles.socialButtonIcon} />
              <Text style={styles.socialButtonText}>{option.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.emailContainer}>
          <Text style={styles.emailInputLabel}>Sign up with email</Text>
          <BottomSheetTextInput
            placeholder="Email"
            placeholderTextColor={Colors.light.text.brand.subtle}
            style={styles.emailInput}
          />
        </View>

          <View style={[styles.footer, { paddingBottom: bottom }]}>
            <PrimaryButton
              title="Next"
              onPress={() => {}}
              type="solid"
              size="large"
              variant="primary"
              icon={<Ionicons name="chevron-forward" size={20} color={Colors.light.text.main.primary_inverse} />}
            />
          </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default SignUpModal

const styles = StyleSheet.create({
  sheetContainer: {
    marginHorizontal: 24,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  socialOptions: {
    flex: 1,
    gap: 24,
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  socialButtonIcon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    borderBottomColor: Colors.light.border.brand.subtle,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dividerText: {
    fontFamily: 'mon-sb',
    color: Colors.light.border.brand.tertiary,
    fontSize: 16,
  },
  emailContainer: {
    width: '100%',
  },
  emailInputLabel: {
    fontFamily: 'mon-sb',
    color: Colors.light.text.main.primary,
    fontSize: 16,
  },
  emailInput: {
    width: '100%',
    borderColor: Colors.light.border.main.bold,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: 16,
  },
  footer: {
    width: '100%',
    marginTop: 30,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  footerButtonText: {
    fontFamily: 'mon-sb',
    color: Colors.light.text.main.primary,
    fontSize: 16,
  },
});
