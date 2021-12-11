import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import StopWatch from './StopWatch';
const WorkingTimer = ({action, StartTime, workingHrs, IsStart}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View>
          <Text style={{fontSize: 12, color: '#111828B2', fontWeight: '600'}}>
            {action}
          </Text>
        </View>
        {console.log('start state,', IsStart)}

        {IsStart ? (
          <Text
            style={{
              fontSize: 12,
              color: '#111828',
              fontWeight: '800',
              lineHeight: 28,
            }}>
            {workingHrs}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 12,
              color: '#111828',
              fontWeight: '800',
              lineHeight: 28,
            }}>
            {StartTime ? <StopWatch goTimer={StartTime} /> : <Text>---</Text>}
          </Text>
        )}
      </View>
    </View>
  );
};

export default WorkingTimer;
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
