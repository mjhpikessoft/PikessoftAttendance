import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginApiCall} from './utils';

const ModalPassword = ({
  showPassCode,
  setShowPassCode,
  useremail,
  navigation,
}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        visible={showPassCode}
        onRequestClose={() => setShowPassCode(false)}
        animationType="slide"
        transparent
        // onShow={()=>

        //     Alert.alert('MPIN Passcode',passCode)}
        //Password
      >
        <View
          style={{
            backgroundColor: '#263238',
            opacity: 0.9,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: '#FFC727',
              width: '100%',
              height: '70%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View
              style={{
                backgroundColor: '#FFC727',
                flex: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingTop: 30,
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setShowPassCode(false)}>
                  <Image
                    style={{width: 22, height: 16, marginRight: '10%'}}
                    source={require('../../assets/BackArrow.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{fontWeight: '600', fontSize: 24, color: '#111828'}}>
                  Complete your Login
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: '#111828',
                    marginVertical: 20,
                    alignSelf: 'center',
                  }}>
                  Enter your 4 digit MPIN passcode
                </Text>

                <OTPInputView
                  pinCount={4}
                  style={styles.otpView}
                  codeInputFieldStyle={styles.underlineStyleBase}
                  onCodeFilled={value => {
                    LoginApiCall({email: useremail, password: value});

                    setShowPassCode(false);
                    navigation.navigate('Home');
                  }}
                />
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 14,
                    color: '#111828',
                    alignSelf: 'center',
                    marginTop: 20,
                  }}>
                  Forgot your MPIN Passcode?
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPassword;

const styles = StyleSheet.create({
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
