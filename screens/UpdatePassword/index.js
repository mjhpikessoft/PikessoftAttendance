import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Pressable,
  ScrollView,
  Dimensions,
  Modal,
  Image,
  ToastAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from './style';
const UpdatePassword = () => {
  const [data, setUserData] = React.useState({
    previuspassword: '',
    newPassword: '',
    // check_textInputChange: false,
    previusPasswordsecureTextEntry: true,
    // isValidUser: true,
    isPreviusValidPassword: true,
    NewPasswordsecureTextEntry: true,
    // isValidUser: true,
    isNewValidPassword: true,
  });
  // const [name, setName] = useState('');
  const [handleLogindisable, setHandleLogindisable] = useState(false);

  // const [previuspassword, setpreviuspassword] = useState('');
  // const [Newpassword, setNewpassword] = useState('');

  useEffect(() => {
    if (data?.previuspassword.length < 7 && data?.newPassword?.length < 7) {
      setHandleLogindisable(true);
    }
    if (data?.previuspassword?.length > 7 && data?.newPassword?.length > 7) {
      setHandleLogindisable(false);
    }
  }, [data?.newPassword, data?.previuspassword]);

  const HandlePasswordUpdate = () => {
    if (data?.newPassword.length === data?.previuspassword?.length) {
      if (data?.previuspassword === data?.newPassword) {
        Alert.alert('Wrong Input !', 'New Password must be Different');
      } else {
        console.log(
          'previus :',
          data.previuspassword,
          'new :',
          data?.newPassword,
        );
      }
    } else {
      console.log(
        'previus :',
        data.previuspassword,
        'new :',
        data?.newPassword,
      );
    }
  };

  const handlePrevoiusPasswordChange = val => {
    // setpreviuspassword(val)
    if (val.trim().length >= 8) {
      setUserData({
        ...data,
        previuspassword: val,
        isPreviusValidPassword: true,
      });
      // setHandleLogindisable(false)
    } else {
      setUserData({
        ...data,
        previuspassword: val,
        isPreviusValidPassword: false,
      });
      setHandleLogindisable(true);
    }
  };

  const updateSecureTextEntry = () => {
    setUserData({
      ...data,
      previusPasswordsecureTextEntry: !data.previusPasswordsecureTextEntry,
    });
  };

  const handleNewPasswordChange = val => {
    // setNewpassword(val)
    if (val.trim().length >= 8) {
      setUserData({
        ...data,
        newPassword: val,
        isNewValidPassword: true,
      });
      // setHandleLogindisable(false)
    } else {
      setUserData({
        ...data,
        newPassword: val,
        isNewValidPassword: false,
      });
      setHandleLogindisable(true);
    }
  };

  const updateNewPasswordSecureTextEntry = () => {
    setUserData({
      ...data,
      NewPasswordsecureTextEntry: !data.NewPasswordsecureTextEntry,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#009387'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 10}}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            zIndex: 100000,
            position: 'absolute',
            top: '15%',
            alignSelf: 'center',
          }}
          source={require('../../assets/key1.jpg')}
        />

        <View
          style={{
            //       width:'100%'
            //   ,height:'100%',
            flex: 1,
            backgroundColor: 'white',
            marginTop: '40%',
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'blue',
              marginTop: 60,
              alignSelf: 'center',
            }}>
            Update Password
          </Text>
          <View style={{marginTop: 20}}>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 10,
                },
              ]}>
              Previous Password
            </Text>
            <View style={styles.action}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder="Enter Previous Password"
                placeholderTextColor="#666666"
                secureTextEntry={
                  data.previusPasswordsecureTextEntry ? true : false
                }
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handlePrevoiusPasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.previusPasswordsecureTextEntry ? (
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../assets/eye1.png')}
                  />
                ) : (
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../assets/eye2.jpg')}
                  />
                )}
              </TouchableOpacity>
            </View>
            {data.isPreviusValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </Animatable.View>
            )}
          </View>
          {/* 2nd input */}
          <View style={{marginTop: 10}}>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 10,
                },
              ]}>
              New Password
            </Text>
            <View style={styles.action}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/lock.png')}
              />
              <TextInput
                placeholder="Enter new Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.NewPasswordsecureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handleNewPasswordChange(val)}
              />
              <TouchableOpacity onPress={updateNewPasswordSecureTextEntry}>
                {data.NewPasswordsecureTextEntry ? (
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../assets/eye1.png')}
                  />
                ) : (
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../assets/eye2.jpg')}
                  />
                )}
              </TouchableOpacity>
            </View>
            {data.isNewValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </Animatable.View>
            )}
          </View>

          {/* Button */}
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => HandlePasswordUpdate()}
              disabled={handleLogindisable}
              style={[
                styles.signIn,
                {
                  //    borderColor: '#009387',
                  // borderWidth: 1,
                  margin: 15,
                  backgroundColor: handleLogindisable ? '#eeee' : '#4169E1',
                },
              ]}>
              <Text style={styles.textSign}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdatePassword;
const {width, height} = Dimensions.get('screen');
