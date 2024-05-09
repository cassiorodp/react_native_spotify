import { CustomText } from '@/components/CustomText';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const { colors } = useTheme();

  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <CustomText>Entre com sua conta Spotify</CustomText>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          {
            backgroundColor: colors.primary,
          },
        ]}
        onPress={handlePress}
      >
        <CustomText type="button">Entrar</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
  button: {
    borderRadius: 100,
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  buttonText: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});
