import axios from '../../baseUrl/axios';
import moment from 'moment';
import {setData} from '../AsyncStorage';
import {getToken} from '../AsyncStorage';
import CurrentDate from '../CurrentDate';

export const CallCheckInTimeApi = async() => {
  const token= await getToken();
  console.log('Token 1',token);
  var time = moment().format();

  CheckInApiCall(time,token);

};

const CheckInApiCall = async (checkInTime, token) => {
  console.log('incomiing check IN Time', checkInTime);
  console.log('Token 2',token);

  // Check IN TIme For Home Screen
  var timeForHomeScreen = moment().utcOffset('').format('hh:mm A');
  setData('UserCheckInTime', timeForHomeScreen);
  console.log('Usr Check IN time Saved in Async');
  // Exp Time
  var ExpCheckOuttime = moment().add(9, 'hours').format('hh:mm A');
  setData('UserExpCheckOutTime', ExpCheckOuttime);
  console.log('Usr Check IN time Saved in Async');
  try {
      console.log('token 3 in Try block',token)
      console.log('CheckIn Time With Token',checkInTime);

    const checkINTimeJSON = JSON.stringify({
      checkInType: 'string',
      checkInTime: checkInTime,
    });
    console.log('check in Time in try block', checkINTimeJSON);
    let response = await axios.post(
      '/api/v1/attendances',
      checkINTimeJSON,
        {
          headers: {Authorization: `Bearer ${token}`},
        },
    );
    setData('CheckInID', response?.data?.id);
    console.log('Check In Id :', response.data.id);
    console.log('Check In APi Response :', response.data);
    CallAttendanceApi(token);

  } catch (error) {
    console.log(error, 'error in CHeck IN TIme ');
  }
};

const CallAttendanceApi = async (token) => {
  try {
    let response = await axios.get(
      '/api/v1/attendances',

        {
          headers: {Authorization: `Bearer ${token}`},
        },
    );
    setData('Attendance', response?.data?.slice(-7).reverse());

    console.log('Attendance  APi Response :', response.data);
  } catch (error) {
    console.log(error, 'error in Getting  Attendance ');
  }
};
