import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 8,
    height: 120,
    justifyContent: 'center',
    marginRight: 8,
    width: 104
  },
  content: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    height: 116,
    justifyContent: 'space-between',
    paddingVertical: 7,
    width: 100
  },
  checked: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    height: 11,
    marginRight: 7,
    width: 11
  },
  check: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
    borderWidth: 2,
    height: 13,
    marginRight: 7,
    width: 13
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.semi_bold,
    fontSize: 15
  }
});

export default styles;