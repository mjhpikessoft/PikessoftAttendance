import React, {useState, useEffect, createContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Pressable,
  ScrollView,
  Dimensions,
  Modal,
  Image,
  ToastAndroid,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {styles} from './style';
// import Loader from '../../components/Loader';
import ModalPassword from '../../components/Modal';
// import OtpInput from '../../components/OtpInput';
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [showPassCode, setShowPassCode] = useState(false);
  const [handleLogindisable, setHandleLogindisable] = useState();
  const [emailValidError, setEmailValidError] = useState('');
  const [data, setUserData] = useState({
    email: '',
    // password:''
  });

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(data.email) === false) {
      setHandleLogindisable(true);
    }
    if (reg.test(data.email) === true) {
      setHandleLogindisable(false);
    }
  }, [data?.email]);
  const handleUserLogin = val => {
    if (val.slice(-10) != '@pikessoft.com') {
      if (val.slice(-14) === '@pikessoft.com') {
        setShowPassCode(true);
      } else {
        Alert.alert('Wrong Input!', 'Please enter company email');
      }
    }
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(val) === false) {
      //   setEmailValidError('Enter valid email address');
      setHandleLogindisable(true);
    } else if (reg.test(val) === true) {
      setEmailValidError('');
      setUserData({
        ...data,
        email: val,
        // isValidUser: true
      });
    } else {
      console.log('user Email :', data.email);
    }
  };

  // var passCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ModalPassword
        showPassCode={showPassCode}
        setShowPassCode={setShowPassCode}
        useremail={data?.email}
        navigation={navigation}
      />

      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: '#111828',
            marginTop: 45,
            fontFamily: 'Poppins',
          }}>
          {`Login to 
Pikes Soft Attendence`}
        </Text>
        <Text style={styles.text_footer}>Email Address</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            placeholder="Employee Email Address"
            value={email}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View>
        {/* { emailValidError ? 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{emailValidError}</Text>
         
            </Animatable.View>:null
            } */}

        <View style={{flexDirection: 'column', marginTop: 0}}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => handleUserLogin(data?.email)}
              disabled={handleLogindisable}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  // borderWidth: 1,
                  margin: 16,
                  backgroundColor: handleLogindisable ? '#E6E7EB' : '#FFC727',
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {color: handleLogindisable ? 'white' : '#263238'},
                ]}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgotPassword')}>
            <Text
              style={{
                color: '#111828',
                fontSize: 14,
                fontWeight: '700',
                alignSelf: 'center',
                fontFamily: 'Poppins',
              }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
          <Image
            style={{
              width: 235,
              height: 235,
              marginTop: 40,
              alignSelf: 'center',
            }}
            source={require('../../assets/login.png')}
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 13,
              color: '#384152',
              alignSelf: 'center',
              textAlign: 'center',
              paddingHorizontal: 10,
              marginTop: 40,
              lineHeight: 18,
              fontFamily: 'Poppins',
            }}>
            By login, you accept our{' '}
            <Text style={{fontWeight: '700'}}>Terms of Service</Text> and
            <Text style={{fontWeight: '700', fontFamily: 'Poppins'}}>
              {' '}
              Privacy Policy.
            </Text>
          </Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default SignInScreen;
const {width, height} = Dimensions.get('screen');
