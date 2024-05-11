import { StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { useTheme } from '@react-navigation/native';

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  onPress: () => void;
  disabled?: boolean;
  activeOpacity?: number;
  title: string;
};

export function Button({
  onPress,
  disabled,
  activeOpacity = 0.8,
  title,
  style,
}: ButtonProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        styles.button,
        {
          backgroundColor: colors.primary,
        },
        style,
      ]}
    >
      <CustomText type="button">{title}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});
