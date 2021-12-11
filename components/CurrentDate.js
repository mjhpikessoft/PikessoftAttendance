import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CurrentDate = () => {
  const [currentDate, setCurrentData] = useState('');
  useEffect(() => {
    let time = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let mon = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current minutes
    let sec = new Date().getSeconds(); //Current seconds
    const d = new Date();

    const weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let day = weekday[d.getDay()];
    // setCurrentData(
    //     date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' +sec
    // )
    // setCurrentData(
    //     time.includes(date)===true?`0${date }`+ '-' + mon[month-1] + '-' + year+' '+day :date + '-' + month + '-' + year +' '+day
    //         )
    setCurrentData(hours + ':' + min);
  }, []);
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          color: 'black',
          fontFamily: 'Poppins',
        }}>
        {currentDate}
      </Text>
    </View>
  );
};

export default CurrentDate;

const styles = StyleSheet.create({});
