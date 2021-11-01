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
    borderRadius: 8,
    height: 116,
    justifyContent: 'space-between',
    paddingVertical: 20,
    width: 100
  },
  checked: {
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
    height: 10,
    position: 'absolute',
    right: 7,
    top: 7,
    width: 10
  },
  check: {
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
    borderWidth: 2,
    height: 13,
    position: 'absolute',
    right: 7,
    top: 7,
    width: 13
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.bold,
    fontSize: 15
  }
});

export default styles;