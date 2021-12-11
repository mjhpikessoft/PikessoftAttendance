import axios from '../../baseUrl/axios';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const setLogginUserData = async userData => {
  try {
    let user = {
      Token: userData?.token,
      User: userData?.user,
    };
    await AsyncStorage.setItem('LoggedINUser', JSON.stringify(user));
    ToastAndroid.show('Logging Completed Successfuly', ToastAndroid.SHORT);

    // setApiResponse(userData?.user)

    console.log('token has set ', user?.Token);
    console.log('User data set ', userData?.User);
  } catch (error) {
    console.warn(error);
  }
};
1
export const LoginApiCall = async user => {
  console.log('incomiing data', user);
  //  setLoading(true)
  try {
    const userLogin = JSON.stringify(user);
    console.log('in try block', userLogin);
    let response = await axios.post(
      '/api/v1/auth/login',
      userLogin,
      //   {
      //     headers: {Authorization: `Bearer ${token}`},
      //   },
    );
    response.data ? setLogginUserData(response?.data) : setLogginUserData(null);

    console.log('response', response?.data);
  } catch (error) {
    console.log(error, 'error in login user');
  }
};
