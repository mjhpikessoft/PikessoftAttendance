import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
export const setData = async (name, Data) => {
  try {
    //   let user = {
    //     Token: Data?.token,
    //     User: Data?.user,
    //   };
    await AsyncStorage.setItem(`${name}`, JSON.stringify(Data));
    // ToastAndroid.show('User Data saved Successfuly', ToastAndroid.SHORT);
    console.warn('saved Successfuly');
    console.log(`User ${name} set `, Data);
  } catch (error) {
    console.warn(error);
  }
};

export const removeData = async keyName => {
  try {
    await AsyncStorage.removeItem(`${keyName}`);
    if (keyName === 'UserCheckInTime') {
      ToastAndroid.show('Attendance  Completed ', ToastAndroid.LONG);
    } else {
      ToastAndroid.show(' Good Bye :) ', ToastAndroid.LONG);
    }
    // navigation.replace('SplashScreen');
  } catch (error) {
    console.log(error);
  }
};
export const RemoveUserData = async () => {
  try {
    await AsyncStorage.removeItem('LoggedINUser');
    ToastAndroid.show(' Good Bye :) ', ToastAndroid.LONG);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  AsyncStorage.getItem('LoggedINUser').then(value => {
    global.token = JSON.parse(value)?.Token;

    // if (value != null) {
    //     global.token= JSON.parse(value)?.Token
    //       console.log('global token in get Token',global.token)
    //   } else {
    //     console.log('not Token Found');
    //   }
  });
};
// const getToken=()=> {
//   try {
//       const token=AsyncStorage.getItem("LoggedINUser").then(token=>{return token});
//       return token;
//   } catch (error) {
//       console.log('error in getting Token',error)
//   }
//   // AsyncStorage.getItem('CheckInID').then(value => {
//   //   console.log('getting user ID',JSON.parse(value))
//   //   let CheckInID='12'
//   //     return CheckInID;
//   //     }).catch((e)=>console.log('error:***',e))
//     }
