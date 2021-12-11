import React, {useEffect, createContext, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert,
  Modal,
  Pressable,
  StatusBar,
} from 'react-native';
import {CallCheckInTimeApi} from '../../components/UserCheckInTime/utils';
import PushNotification from 'react-native-push-notification';
import EmployProfileComponenet from '../../components/EmployProfileComponenet';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimeSheetComponent from '../../components/TimeSheetComponent';
import Loader from '../../components/Loader';
import moment from 'moment';
import ExpCheckOutTime from '../../components/UserExp.outTime';
import CheckInTime from '../../components/UserCheckInTime/index';
import WorkingTimer from '../../components/WorkingTimer';
import {CallCheckOutTimeApi} from '../../components/checkoutTime/utils';
import {removeData} from '../../components/AsyncStorage';
import CheckInSuccessModal from '../../components/CheckInSuccessModal';
import NoApiResponse from '../../components/NoApiResponse';
const HomeScreen = ({navigation}) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeTime, setResumeTime] = useState('');
  const [checInTimeFromAsync, setCheckInTimeFromAsync] = useState('');
  const [ExpCheckOutTimeFromAsync, setExpCheckOutTimeFromAsync] = useState('');
  const [attendanceFromAsync, setAttendanceFromAsync] = useState([]);
  const [Timer, setTimer] = useState(false);
  const [IsStart, setIsStart] = useState(false);
  const [checkInModal, setCheckInModal] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [ApiResponse, setApiResponse] = useState({
    profileUri: '',
    name: '',
    desgnation: '',
    gender: '',
    Age: 0,
  });
  useEffect(() => {
    getAttendance();
  }, [loading]);
  useEffect(() => {
    setLoading(true);
    createChannels();
    setTimeout(() => {
      getExpCheckOutTime();
      getLoggedInData();
      getCheckInTIme();

      setLoading(false);
    }, 4000);
    if (checInTimeFromAsync && !Timer) {
      var currentTime = moment();
      var startTime = moment(`${checInTimeFromAsync}`, 'HH:mm A');
      var ctime = moment(currentTime).format('HH:mm A');
      var endTime = moment(`${ctime}`, 'HH:mm A');

      // calculate total duration
      var duration = moment.duration(endTime.diff(startTime));

      // duration in hours
      var hours = parseInt(duration.asHours());

      // duration in minutes
      var minutes = parseInt(duration.asMinutes()) % 60;
      setResumeTime(hours + ' hrs, ' + minutes + ' min.');
      console.log('wokign hrs', hours + ' hrs, ' + minutes + ' min.');
      console.log('State passing 1', resumeTime);
      setIsStart(true);
    }
  }, [checInTimeFromAsync]);
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };
  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'test-channel',
      title: 'Check Out Reminder !',
      message: 'Now you can CheckOut',
      color: 'green',
      date: new Date(Date.now() + 20 * 1000),
      // date:new Date(Date.now()+1*3.6e+6),
      allowWhileIdle: true,
    });
  };
  const getLoggedInData = () => {
    try {
      AsyncStorage.getItem('LoggedINUser').then(value => {
        if (value != null) {
          setApiResponse({
            profileUri: JSON.parse(value)?.User?.__profile__?.avatar,
            name: JSON.parse(value)?.User?.__profile__?.name,
            desgnation: JSON.parse(value)?.User?.__profile__?.designation,
            gender: JSON.parse(value)?.User?.__profile__?.gender,
            Age: JSON.parse(value)?.User?.__profile__?.age,
          });
          console.log('user name: ', JSON.parse(value).User.__profile__.name);
        }
      });
    } catch (error) {
      console.warn('error in getting user Data', error);
    }
  };

  const getCheckInTIme = () => {
    try {
      AsyncStorage.getItem('UserCheckInTime').then(value => {
        if (value != null) {
          setCheckInTimeFromAsync(JSON.parse(value));
          console.log('getting check in time from Async: ', JSON.parse(value));
        } else {
          console.log('not checkin time found');
        }
      });
    } catch (error) {
      console.warn('error in getting check in time', error);
    }
  };
  const getExpCheckOutTime = () => {
    try {
      AsyncStorage.getItem('UserExpCheckOutTime').then(value => {
        if (value != null) {
          setExpCheckOutTimeFromAsync(JSON.parse(value));
          console.log('getting Exp check Out from Async: ', JSON.parse(value));
        } else {
          console.log('not Exp TIme  found');
        }
      });
    } catch (error) {
      console.warn('error in getting EXP check out time', error);
    }
  };

  const getAttendance = () => {
    try {
      AsyncStorage.getItem('Attendance').then(value => {
        if (value != null) {
          setAttendanceFromAsync(JSON.parse(value));
          console.log('Attendance from Async has Fetched ');
        } else {
          console.log('Attendance not found');
        }
      });
    } catch (error) {
      console.warn('error in getting Attandance', error);
    }
  };
  // console.warn('iddd kkkk',checkInID)
  const handleRefresh = () => {
    setRefresh(true);
    getAttendance();
    setRefresh(false);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFFF'}}>
      {ApiResponse.name.length > 0 ? (
        <View
          style={[
            styles.innerContainer,
            {
              shadowColor: 'black',
              elevation: 9,
            },
          ]}>
          {loading ? <Loader /> : null}
          <View
            style={{paddingTop: 20}}
            // style={styles.dateButton}
          >
            {/* <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: 'black',
              fontFamily: 'Poppins',
            }}>
         
          
          </Text> */}
          </View>
          <CheckInSuccessModal
            checkInModal={checkInModal}
            setCheckInModal={setCheckInModal}
          />

          <EmployProfileComponenet
            name={ApiResponse.name ? ApiResponse.name : 'Sample Name'}
            designation={
              ApiResponse.desgnation
                ? ApiResponse.desgnation
                : 'Sapmle Desegnation'
            }
            gender={ApiResponse.gender ? ApiResponse.gender : 'Sapmle'}
            age={ApiResponse.Age}
            profileUri={
              ApiResponse.profileUri
                ? ApiResponse.profileUri
                : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
          />

          <View>
            {isCheckout ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <CheckInTime checkinTime={'---'} action="Check In" />

                <WorkingTimer
                  StartTime={false}
                  workingHrs={'---'}
                  IsStart={IsStart}
                  action="Working time"
                />

                <ExpCheckOutTime checOutTime={'---'} action="Exp. Check out" />
              </View>
            ) : (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                {/* <Text>{checInTimeFromAsync}</Text> */}
                <CheckInTime
                  checkinTime={
                    checInTimeFromAsync ? checInTimeFromAsync : '---'
                  }
                  action="Check In"
                />

                <WorkingTimer
                  StartTime={Timer}
                  workingHrs={resumeTime}
                  IsStart={IsStart}
                  action="Working time"
                />

                <ExpCheckOutTime
                  checOutTime={
                    ExpCheckOutTimeFromAsync ? ExpCheckOutTimeFromAsync : '---'
                  }
                  action="Exp. Check out"
                />
              </View>
            )}
          </View>

          <View style={styles.button}>
            {checInTimeFromAsync ? (
              <TouchableOpacity
                disabled={isCheckout}
                onPress={() => {
                  setLoading(true);
                  CallCheckOutTimeApi();
                  setTimeout(() => {
                    setIsCheckout(true);
                    setLoading(false);
                    removeData('UserCheckInTime');
                    removeData('UserExpCheckOutTime');
                  }, 4000);
                }}
                style={[
                  styles.signIn,
                  styles.shadow,
                  {
                    //   borderWidth: 1,
                    margin: 16,
                    // backgroundColor: 'red',
                    backgroundColor: isCheckout ? '#E6E7EB' : '#FFC727',
                  },
                ]}>
                <Text style={styles.textSign}>Check Out</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  CallCheckInTimeApi();
                  getCheckInTIme();
                  getExpCheckOutTime();
                  setTimer(true);
                  setCheckInModal(true);
                  // handleNotification();
                }}
                style={[
                  styles.signIn,
                  styles.shadow,
                  {
                    borderColor: '#FFC727',
                    borderWidth: 1,
                    margin: 16,
                    backgroundColor: '#FFC727',
                  },
                ]}>
                <Text style={styles.textSign}>Check In</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <NoApiResponse />
      )}
      {ApiResponse.name.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={handleRefresh}
              colors={['blue', 'red']}
              progressBackgroundColor={'white'}
            />
          }>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 25,
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: '#263238'}}>
              Last 7 days timesheet
            </Text>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '500', fontSize: 14, color: '#263238'}}>
                See All
              </Text>
              <Image
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
                source={require('../../assets/RightArrow.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 10, fontWeight: '500', color: '#263238'}}>
              Check In
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: '#263238',
                paddingHorizontal: 16,
              }}>
              Check Out
            </Text>
            <Text style={{fontSize: 10, fontWeight: '500', color: '#263238'}}>
              Working hrs
            </Text>
          </View>

          {attendanceFromAsync.map(item => (
            <TimeSheetComponent
              key={item.id}
              checkin={item?.checkInTime}
              checkout={item?.checkOutTime}
              date={item?.checkInTime}
            />
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default HomeScreen;
const {width, height} = Dimensions.get('screen');
