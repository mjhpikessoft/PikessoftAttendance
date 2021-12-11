import React, {useState, useEffect} from 'react';
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
const ForgotPassword = ({navigation}) => {
  const [data, setUserData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  // const [name, setName] = useState('');
  const [handleLogindisable, setHandleLogindisable] = useState(false);

  const [password, setPassword] = useState('');

  useEffect(() => {
    if (data.password.length < 7) {
      setHandleLogindisable(true);
    }
  }, []);

  const handlePasswordChange = val => {
    setPassword(val);
    if (val.trim().length >= 8) {
      setUserData({
        ...data,
        password: val,
        isValidPassword: true,
      });
      setHandleLogindisable(false);
    } else {
      setUserData({
        ...data,
        password: val,
        isValidPassword: false,
      });
      setHandleLogindisable(true);
    }
  };

  const updateSecureTextEntry = () => {
    setUserData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      {/* <View style={styles.header}>
                 
       
        </View> */}
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Image
          style={{width: '100%', height: height * 0.4}}
          source={require('../../assets/forgotpassword.jpg')}
        />

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
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
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
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:20}}>
            <TouchableOpacity>
                <Text style={{color: '#009387',}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text style={{color: '#0080ff',}}>Create new account</Text>
            </TouchableOpacity>
            </View> */}
        <View style={styles.button}>
          <TouchableOpacity
            // onPress={() => setData()}
            disabled={handleLogindisable}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                // borderWidth: 1,
                margin: 15,
                backgroundColor: handleLogindisable ? '#eeee' : '#009387',
              },
            ]}>
            <Text style={styles.textSign}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default ForgotPassword;
const {width, height} = Dimensions.get('screen');
