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


export const getToken= async()=> {
  try {
      // const value= await AsyncStorage.getItem("LoggedINUser");
      const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11amFoaWQuYWxpQHBpa2Vzc29mdC5jb20iLCJpZCI6MywiaWF0IjoxNjM5Mzc4NDIzfQ.FwnZ6TCr0_9dSUi1_rn_s6bdgslnYpJb_r7chN3iuLU'

      if(token!=null){
        return token
      }
     else{
       console.log('error in fetching Token Form Async')
     }
  } catch (error) {
      console.log('error in getting Token',error)
  }
}