import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { CustomText } from './CustomText';
import { spacing } from '@/constants/config';
import Image from './Image';

export default function ArtistHeader(props: {
  artistName: string;
  artistImage: string;
}) {
  const { colors } = useTheme();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableWithoutFeedback testID="back-button" onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={32} color={colors.text} />
        </TouchableWithoutFeedback>
        <CustomText>{props.artistName}</CustomText>
      </View>

      <Image width={64} height={64} src={props.artistImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
});
