import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const NoApiResponse = () => {
  return (
    <Animatable.View animation="fadeInUpBig" duration={2000} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 350, height: 300, marginLeft: 50}}
        source={require('../assets/api.png')}
        resizeMode="contain"
      />
      <Text style={{color: 'black', fontWeight: '700', fontSize: 15}}>
        No Api Reponse
      </Text>
    </Animatable.View>
  );
};

export default NoApiResponse;

const styles = StyleSheet.create({});
