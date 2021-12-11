import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

const StopWatch = ({goTimer}) => {
  //   const [isTimerStart, setIsTimerStart] = useState(false);
  //   const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  //   const [timerDuration, setTimerDuration] = useState(90000);
  //   const [resetTimer, setResetTimer] = useState(false);
  //   const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stopwatch
        laps
        // msecs
        start={goTimer}
        // To start
        // reset={resetStopwatch}
        // To reset
        options={options}
        // Options for the styling
        // getTime={(time) => {
        //   console.log(time);
        // }}
      />
    </SafeAreaView>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    // textAlign: 'center',
    // fontSize: 20,
    // fontWeight: 'bold',
    // padding: 20,
  },
  sectionStyle: {
    // flex: 1,
    // marginTop: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  //   buttonText: {
  //     fontSize: 20,
  //     marginTop: 10,
  //   },
});

const options = {
  container: {
    //  backgroundColor: '#FF0000',
    // padding: 5,
    // borderRadius:  {showCounter ? (
    // width: 200,
    // alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
};
