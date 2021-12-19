import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import UpdatePassword from '../screens/UpdatePassword';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactUS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeData} from '../components/AsyncStorage';
// import 'react-native-gesture-handler';
import CustomSidebarMenu from './CustomSidebarMenu';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          toggleDrawer();
        }}>
        {/*Donute Button Image */}
        <Image
          source={require('../assets/Icon.png')}
          style={{width: 24, height: 13, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
function StackNavigator({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Spashscreen"
        component={SplashScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          // title: 'SignIn Screen'
          header: () => null,
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{
          title: ' Reset Password',
          headerStyle: {
            backgroundColor: '#009387',
          },
        }}
      />
      <Stack.Screen
        name="contact"
        component={ContactScreen}
        options={{
          title: 'Welcome to Attendence',
          // headerTransparent:true,
          headerTitleAlign: 'center',
          //          headerStyle: {
          //           shadowOffset: { height: 0, width: 0 },
          //           shadowColor: 'transparent',
          //           elevation:0,

          // },
          // headerTintColor: 'black',

          // headerTitleStyle: {
          //   fontWeight: '500',
          //   color:'#3F4142'
          // },
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{
          title: 'Update Password',
          headerStyle: {
            backgroundColor: '#009387',
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        screenOptions={{}}
        options={{
          title: 'Welcome to Attendence',
          // headerTransparent:true,
          headerTitleAlign: 'center',

          headerShadowVisible: false,
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: 'slide',
      }}
      drawerContent={props => (
        <CustomSidebarMenu navigationProps={navigation} {...props} />
      )}>
      <Drawer.Screen
        name="Home Screen"
        // options={{

        //   drawerLabel: 'Home',
        //   headerShown: false,
        //   // title:'test',
        //   //  drawerIcon:{

        //   //  }
        // }}
        options={{
          headerShown: false,
          drawerInactiveTintColor: '#0D1C2E',
          drawerActiveTintColor: '#0D1C2E',
          drawerActiveBackgroundColor: 'white',

          drawerItemStyle: {
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderTopColor: '#0D1C2E1A',
            borderBottomColor: '#0D1C2E1A',
          },
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            //  <Ionicons
            //     name="md-home"s
            //     size={size}
            //     color={focused ? '#7cc' : '#ccc'}
            //  />
            <Image
              style={{width: 24, height: 14}}
              source={require('../assets/homeicon.png')}
              resizeMode="contain"
            />
          ),
        }}
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
}

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default AppNavContainer;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  logoutStyle: {
    height: 120,
    marginTop: height * 0.6,
    paddingTop: '5%',
    borderTopWidth: 2,
    borderTopColor: 'red',
  },
});
