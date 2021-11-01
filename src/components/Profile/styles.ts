import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  greatings: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    marginRight: 5
  },
  user: {
    flexDirection: 'row'
  },
  user_name: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.bold,
    fontSize: 24
  },
  message: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.regular,
  }
});

export default styles;