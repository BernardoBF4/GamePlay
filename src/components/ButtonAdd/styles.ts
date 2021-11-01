import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    width: 48
  },
  icon: {
    textAlign: 'center'
  }
});

export default styles;