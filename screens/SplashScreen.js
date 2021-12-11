import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getLoggedInData();
    }, 3000);
  }, []);
  const getLoggedInData = () => {
    try {
      AsyncStorage.getItem('LoggedINUser').then(value => {
        if (value != null) {
          navigation.navigate('Home');

          console.log('user Logged in again **** ');
        } else {
          navigation.navigate('SignIn');
          console.log('user Not Logged iN **** ');
        }
      });
    } catch (error) {
      console.warn('No Loggin user found', error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#ffff'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Image
          style={{width: 60, height: 60}}
          source={require('../assets/rush.png')}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#263238',
            marginTop: 12,
            fontFamily: 'Poppins',
          }}>
          Time Attendence
        </Text>
      </View>
      <Image
        style={{width: 158, height: 60, position: 'absolute', bottom: 100}}
        source={require('../assets/logo2.png')}
      />
    </View>
  );
};

export default SplashScreen;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({});
