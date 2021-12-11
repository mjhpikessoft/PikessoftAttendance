// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { RemoveUserData } from '../components/AsyncStorage';
const CustomSidebarMenu = (props,navigation) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={{alignItems:'center',marginVertical:50}}>
      <Image
          style={{width: 60, height: 60}}
          source={require('../assets/rush.png')}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#263238',
            marginTop: 12,
            fontFamily: 'Poppins',
          }}>
          Time Attendence
        </Text>
        </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      
        <DrawerItem
          label="Leaves"
          style={{
            borderBottomWidth:1,
            // borderTopWidth:1,
            // borderTopColor:'#0D1C2E1A',
            borderBottomColor:'#0D1C2E1A' 
          }}
          // activeBackgroundColor='#FFC727'
          icon={()=>
            <Image
            style={{width: 20, height: 16}}
            source={require('../assets/leaves.png')}
            resizeMode="contain"
          />
          }
         inactiveTintColor='#0D1C2E'
        //  onPress={()=>props.navigation.navigate('forgotPassword')}
         
        />
            <DrawerItem
          label="Feedback"
          style={{
            borderBottomWidth:1,
            // borderTopWidth:1,
            // borderTopColor:'#0D1C2E1A',
            borderBottomColor:'#0D1C2E1A' 
          }}
          // activeBackgroundColor='#FFC727'
          icon={()=>
            <Image
            style={{width: 20, height: 17}}
            source={require('../assets/feedback.png')}
            resizeMode="contain"
          />
          }
         inactiveTintColor='#0D1C2E'
        //  onPress={()=>props.navigation.navigate('forgotPassword')}
         
        />
            <DrawerItem
          label="Help & Support"
          style={{
            borderBottomWidth:1,
            // borderTopWidth:1,
            // borderTopColor:'#0D1C2E1A',
            borderBottomColor:'#0D1C2E1A' 
          }}
          // activeBackgroundColor='#FFC727'
          icon={()=>
            <Image
            style={{width: 20, height: 17}}
            source={require('../assets/help.png')}
            resizeMode="contain"
          />
          }
         inactiveTintColor='#0D1C2E'
        //  onPress={()=>props.navigation.navigate('forgotPassword')}
         
        />
            <DrawerItem
          label="About Pikes Soft"
          style={{
            borderBottomWidth:1,
            // borderTopWidth:1,
            // borderTopColor:'#0D1C2E1A',
            borderBottomColor:'#0D1C2E1A' 
          }}
          // activeBackgroundColor='#FFC727'
          icon={()=>
            <Image
            style={{width: 20, height: 17}}
            source={require('../assets/about.png')}
            resizeMode="contain"
          />
          }
         inactiveTintColor='#0D1C2E'
        //  onPress={()=>props.navigation.navigate('forgotPassword')}
         
        />
     
      </DrawerContentScrollView>
      <TouchableOpacity style={{marginBottom:25}} 
       onPress={()=> {RemoveUserData(), props.navigation.navigate('SignIn')}}
       >
      <Image
          style={{width: '100%', height: 20}}
          source={require('../assets/logoutimg.png')}
        /></TouchableOpacity>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          color: '#231F20',
          marginBottom:20
        }}>
    Version 0.1
      </Text>
    </SafeAreaView>
  );
};
const{width,height}=Dimensions.get('screen')
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;