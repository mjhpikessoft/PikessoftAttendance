import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  text_footer: {
    color: '#05375a',
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    // paddingBottom:height*0.04
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // flex:1,
    backgroundColor: '#0080ff',
  },
  textSign: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
