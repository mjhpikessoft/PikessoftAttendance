import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpInput = ({navigation}) => {
  const [showHome, setShowHome] = useState(false);
  return (
    <View>
      <OTPInputView
        pinCount={4}
        style={styles.otpView}
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={value => {
          console.log(value);
        }}
      />
      {showHome ? navigation.navigate('Home') : null}
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  otpView: {
    width: '80%',
    height: 200,
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
