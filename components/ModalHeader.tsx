import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

export default function ModalHeader(props: { handleCloseModal: () => void }) {
  const { colors } = useTheme();
  return (
    <View style={styles.header}>
      <TouchableNativeFeedback
        testID="close-icon"
        onPress={props.handleCloseModal}
      >
        <Ionicons name="close" size={32} color={colors.text} />
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 'auto',
  },
});
