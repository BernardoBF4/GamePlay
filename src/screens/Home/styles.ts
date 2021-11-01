import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 42,
    marginTop: 26 + getStatusBarHeight(),
    paddingHorizontal: 24,
    width: '100%'
  },
  content: {
    marginTop: 42
  },
  matches: {
    marginLeft: 24,
    marginTop: 24
  }
});

export default styles;