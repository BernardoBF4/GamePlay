import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    height: 360,
    width: '100%'
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.bold,
    fontSize: 40,
    lineHeight: 45,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.heading,
    lineHeight: 25,
    fontFamily: theme.fonts.semi_bold,
    fontSize: 15,
    marginBottom: 64,
    textAlign: 'center'
  }
});

export default styles;