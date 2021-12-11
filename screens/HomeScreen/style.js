import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: 'white',

    // height:height*0.4,
    // paddingVertical:10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  dateButton: {
    // marginLeft:20

    width: width * 0.4,
    height: height * 0.05,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#fff8e7',
    borderWidth: 2,
    borderColor: '#FFC727',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    // marginTop: 5,
    paddingHorizontal: 20,
    // paddingBottom:height*0.04
  },
  signIn: {
    width: '100%',
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // flex:1,
    backgroundColor: '#FFC727',
  },
  textSign: {
    color: '#263238',
    fontSize: 12,
    fontWeight: '800',
  },
  shadow: {
    shadowColor: 'black',
    // shadowRadius: 50,
    elevation: 9,
    shadowOpacity: 0.5,
    borderRadius: 8,
    width: '100%',
    height: height * 0.08,
  },
});
