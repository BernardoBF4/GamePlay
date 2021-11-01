import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    width: '100%'
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.bold,
    fontSize: 18
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.semi_bold,
    fontSize: 13
  }
});

export default styles;