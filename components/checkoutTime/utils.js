import axios from '../../baseUrl/axios';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getToken } from "../AsyncStorage";
import {setData} from '../AsyncStorage';
const getcheckInId = () => {
  try {
    const ID = AsyncStorage.getItem('CheckInID');
    return ID;
  } catch (error) {
    console.log('error', error);
  }
  // AsyncStorage.getItem('CheckInID').then(value => {
  //   console.log('getting user ID',JSON.parse(value))
  //   let CheckInID='12'
  //     return CheckInID;
  //     }).catch((e)=>console.log('error:***',e))
};

export const CallCheckOutTimeApi = async () => {
  const iD = await getcheckInId();
  console.log('id ****', iD);
  var outtime = moment().format();

  //   console.log('calling check IN api Token Here',token)
  console.log('checkIn ID', iD);
  setTimeout(() => {
    CheckOutApiCall(outtime, iD);
  }, 2000);
};

const CheckOutApiCall = async (checkOutTime, iD) => {
  console.log('incomiing check Out Time', checkOutTime);
  // console.log("Token in CHeckout APi ",token)
  // Check out TIme For Home Screen
  // var timeForHomeScreen = moment().utcOffset('').format('hh:mm a');
  // setData('UserCheckInTime',timeForHomeScreen)
  // console.log("Usr Check IN time Saved in Async")

  try {
    //   console.log('token in Try block',token)
    const checkOutTimeJSON = JSON.stringify({
      checkOutTime: checkOutTime,
    });
    console.log('check Out Time in try block', checkOutTimeJSON);
    let response = await axios.patch(
      `/api/v1/attendances/${iD}`,
      checkOutTimeJSON,
      //   {
      //     headers: {Authorization: `Bearer ${token}`},
      //   },
    );
    console.log('Check Out APi Response :', response.data);
    CallAttendanceApi();
  } catch (error) {
    console.log(error, 'error in CHeck Out TIme ');
  }
};

const CallAttendanceApi = async () => {
  try {
    let response = await axios.get(
      '/api/v1/attendances',

      //   {
      //     headers: {Authorization: `Bearer ${token}`},
      //   },
    );
    setData('Attendance', response?.data?.slice(-7).reverse());
    console.log('Attendance  On Chekout  :', response.data);
  } catch (error) {
    console.log(error, 'error in Getting  Attendance ');
  }
};
