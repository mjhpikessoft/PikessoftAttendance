import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // header: {
  //     flex: 1,
  //     justifyContent: 'flex-end',
  //     paddingHorizontal: 20,
  //     paddingBottom: 0
  // },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingTop: 20
  },
  // text_header: {
  //     color: '#fff',
  //     fontWeight: 'bold',
  //     fontSize: 12,
  //     alignSelf:'center',
  //     marginTop:10
  // },
  text_footer: {
    color: '#111828',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 42,
  },
  action: {
    // flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E6E7EB',
    marginBottom: 5,
    borderRadius: 8,
    height: 56,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : 3,
    paddingLeft: 16,
    // height:50,
    backgroundColor: '#FAFAFA',
    color: '#05375a',
    borderRadius: 8,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    // marginTop: 12
    // paddingBottom:height*0.04
  },
  signIn: {
    width: '100%',
    height: 55,
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
  otpView: {
    width: '80%',
    height: 100,
    color: 'black',
    marginHorizontal: 40,
    // backgroundColor:'red'
  },
  underlineStyleBase: {
    width: 56,
    height: 64,
    borderWidth: 2,
    borderBottomWidth: 1,
    color: 'black',
    borderColor: '#E5E5E5',
    borderRadius: 8,
    backgroundColor: '#FCFCFE',
  },
});
