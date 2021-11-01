import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  content: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%'
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.bold,
    fontSize: 18,
  },
  category: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    marginRight: 24
  },
  playes_info: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  date_info: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  date: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.semi_bold,
    fontSize: 13,
    marginLeft: 7
  },
  player: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24
  }
});

export default styles;