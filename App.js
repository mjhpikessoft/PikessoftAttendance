import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import AppNavContainer from './AppNavContainer/AppNavContainer';
import {useNetInfo} from '@react-native-community/netinfo';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';
const App = ({navigation}) => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  const netinfo = useNetInfo();
  useEffect(() => {
    const unsub = NetInfo.addEventListener(state => {
      if (!state.isConnected && !state.isInternetReachable) {
        Alert.alert(
          'No Internet Connection',
          'Please check your Internet Connection.',
        );
      }
      return state.isConnected && state.isInternetReachable;
    });
    return unsub;
  }, [netinfo.isConnected]);

  return <AppNavContainer />;
};
export default App;
