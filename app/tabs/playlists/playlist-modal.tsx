import { StyleSheet } from 'react-native';
import React from 'react';
import { CustomText } from '@/components/CustomText';
import SafeAreaViewWithPadding from '@/components/SafeAreaViewWithPadding';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ModalHeader from '@/components/ModalHeader';
import CreatePlaylist from '@/components/CreatePlaylist';
import { useTheme } from '@react-navigation/native';

export default function PlaylistModal() {
  const handleCloseModal = () => {
    router.back();
  };
  const { colors } = useTheme();

  return (
    <SafeAreaViewWithPadding style={{ backgroundColor: colors.card }}>
      <ModalHeader handleCloseModal={handleCloseModal} />
      <CreatePlaylist handleCloseModal={handleCloseModal} />
    </SafeAreaViewWithPadding>
  );
}

const styles = StyleSheet.create({});
