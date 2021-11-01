import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    height: 56,
    width: '100%'
  },
  icon_wrapper: {
    alignItems: 'center',
    borderColor: theme.colors.line,
    borderRightWidth: 1,
    height: 56,
    justifyContent: 'center',
    width: 56
  },
  icon: {
    height: 18,
    width: 24,
  },
  title: {
    color: theme.colors.heading,
    flex: 1,
    fontFamily: theme.fonts.semi_bold,
    fontSize: 15,
    textAlign: 'center'
  }
});

export default styles;