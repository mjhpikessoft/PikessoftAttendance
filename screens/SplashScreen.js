import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import Loader from '../components/Loader';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getLoggedInData();
      setLoading(false)
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
const [loading,setLoading]=useState(false)
const image = { uri: "https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" };

  return (
    <View style={{flex: 1,}}>
 
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     {loading?<Loader />:null} 
    </ImageBackground>
    </View>
  );
};

export default SplashScreen;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

