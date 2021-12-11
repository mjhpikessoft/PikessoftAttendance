import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import CurrentDate from './CurrentDate';
import moment from 'moment';
const TimeSheetComponent = ({checkin, checkout}) => {
  let time = moment(`${checkin}`);
  let checkInTime = time.format('h:mm A');
  let time2 = moment(`${checkout}`);
  let checkOutTime = time2.format('h:mm A');
  const AttendanceDate = time.format('DD/MM/YYYY');
  const weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  let day = weekday[time.day()];

  var startTime = moment(`${checkInTime}`, 'HH:mm A');

  var endTime = moment(`${checkOutTime}`, 'HH:mm A');

  // calculate total duration
  var duration = moment.duration(endTime.diff(startTime));

  // duration in hours
  var hours = parseInt(duration.asHours());

  // duration in minutes
  var minutes = parseInt(duration.asMinutes()) % 60;
  //   const workingHrs=(hours + ' hrs, '+ minutes+' min.')

  const workingHrs = hours;
  // console.warn(typeof(workingHrs.to))

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#FFC727',
          backgroundColor: '#fff8e7',

          width: width * 0.9,
          height: 64,
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 20,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold'}}>
              {day}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#111828',
                lineHeight: 18,
                fontWeight: '400',
              }}>
              {AttendanceDate}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 10, fontWeight: '700', color: '#111828'}}>
              {checkInTime}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: '#111828',
                paddingHorizontal: 22,
              }}>
              {checkOutTime}
            </Text>

            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: '#111828',
                paddingLeft: 12,
              }}>
              {workingHrs}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeSheetComponent;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({});
