import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const CheckInTime = ({action, checkinTime}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View>
          <Text style={{fontSize: 12, color: '#111828B2', fontWeight: '600'}}>
            {action}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 12,
            color: '#111828',
            fontWeight: '800',
            lineHeight: 28,
          }}>
          {checkinTime}
        </Text>
      </View>
    </View>
  );
};

export default CheckInTime;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: '27%',
    height: height * 0.08,
    backgroundColor: '#fff8e7',
    borderColor: '#FFC727',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
