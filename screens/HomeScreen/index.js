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
import Geolocation from '@react-native-community/geolocation';
import {color} from 'react-native-reanimated';

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
  const [durringCurrentTime, setDurringCurrentTime] = useState('');
  const [ApiResponse, setApiResponse] = useState({
    profileUri: '',
    name: '',
    desgnation: '',
    gender: '',
    Age: 0,
  });
  const [currentAddress, setCurrentAddress] = useState({
    currentLatitude: 0,
    currentLongitude: 0,
  });

  useEffect(() => {
    getAttendance();
  }, [loading, isCheckout]);
  useEffect(() => {
    getCheckInTIme();
    getExpCheckOutTime();
  }, [checkInModal]);
  useEffect(() => {
    getUserCurrentLocation();
    setLoading(true);
    createChannels();
    setTimeout(() => {
      getLoggedInData();

      var currentTime = moment();
      var ctime = moment(currentTime).format('HH:mm A');
      setDurringCurrentTime(ctime);
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
      playSound: true,
      vibrate: true,
      soundName: 'ring_bell.mp3',
    });
  };
  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'test-channel',
      title: 'Check Out Reminder !',
      message: 'Now you can CheckOut',
      color: 'green',
      priority: 'max',
      importance: 'max',
      visibility: 'public',
      autoCancel: false,

      date: new Date(Date.now() + 10 * 1000),
      // date:new Date(Date.now()+1*3.6e+6),
      allowWhileIdle: true,
      soundName: 'ring_bell.mp3',

      playSound: true,
      vibrate: true,
    });
  };
  const getUserCurrentLocation = () => {
    let latitude, longitude;

    Geolocation.getCurrentPosition(
      info => {
        const {coords} = info;

        latitude = coords.latitude;
        longitude = coords.longitude;

        console.log('latitude : ', latitude);
        console.log('longitude  : ', longitude);

        setCurrentAddress({
          currentLatitude: latitude,
          currentLongitude: longitude,
        });

        // getUserCurrentAddress(latitude, longitude)
      },
      error => console.log(error),
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 10000,
      },
    );
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
                checkinTime={checInTimeFromAsync ? checInTimeFromAsync : '---'}
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
          {
            checInTimeFromAsync ? (
              <TouchableOpacity
                disabled={isCheckout}
                onPress={() => {
                  setLoading(true);
                  CallCheckOutTimeApi();
                  setTimeout(() => {
                    setIsCheckout(true);
                    setLoading(false);
                    getAttendance();
                    removeData('UserCheckInTime');
                    removeData('UserExpCheckOutTime');
                  }, 4000);
                }}
                style={[
                  styles.signIn,
                  styles.shadow,
                  {
                    borderColor: isCheckout ? '#E6E7EB' : '#FF3B30',
                    borderWidth: 1,
                    margin: 16,
                    // backgroundColor: 'red',
                    backgroundColor: isCheckout ? '#E6E7EB' : '#FFCCC9',
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {color: isCheckout ? 'gray' : '#FF3B30'},
                  ]}>
                  Check Out
                </Text>
              </TouchableOpacity>
            ) : (
              // currentAddress.currentLatitude === 31.469413
              // &&
              //   currentAddress.currentLongitude === 74.2691429
              //   ? (
              <TouchableOpacity
                disabled={
                  durringCurrentTime > '03:00:PM' &&
                  durringCurrentTime < '10:00:AM'
                    ? true
                    : false
                }
                onPress={() => {
                  // CallCheckInTimeApi();
                  // getCheckInTIme();
                  // getExpCheckOutTime();
                  // setTimer(true);
                  // setCheckInModal(true);
                  handleNotification();
                }}
                style={[
                  styles.signIn,
                  styles.shadow,
                  {
                    borderColor:
                      durringCurrentTime > '03:00:PM' &&
                      durringCurrentTime < '10:00:AM'
                        ? '#E6E7EB'
                        : '#FFC727',
                    borderWidth: 1,
                    margin: 16,
                    backgroundColor:
                      durringCurrentTime > '03:00:PM' &&
                      durringCurrentTime < '10:00:AM'
                        ? '#E6E7EB'
                        : '#FFC727',
                  },
                ]}>
                <Text style={styles.textSign}>Check In</Text>
              </TouchableOpacity>
            )
            // ) : (
            //   <TouchableOpacity
            //     style={[
            //       styles.signIn,
            //       styles.shadow,
            //       {
            //         borderColor: '#FFC727',
            //         borderWidth: 1,
            //         margin: 16,
            //         backgroundColor: '#FFC727',
            //       },
            //     ]}>
            //     <Text style={styles.textSign}>Not In Office</Text>
            //   </TouchableOpacity>
            // )
          }
        </View>
      </View>

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 10,
              marginLeft: width * 0.1,
              fontWeight: '500',
              color: '#263238',
            }}>
            Day & Date
          </Text>
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
    </View>
  );
};

export default HomeScreen;
const {width, height} = Dimensions.get('screen');
