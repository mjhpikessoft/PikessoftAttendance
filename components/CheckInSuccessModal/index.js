import React from 'react';
import {StyleSheet, Text, View, Modal, Image, Pressable} from 'react-native';

const CheckInSuccessModal = ({checkInModal, setCheckInModal}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        visible={checkInModal}
        // onRequestClose={()=>setShowModwl(false)}
        animationType="slide"
        transparent>
        <View
          style={{
            backgroundColor: 'black',
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '97%',
              // height: '34%',
              borderRadius: 20,
            }}>
            <View style={{backgroundColor: 'white', borderRadius: 20}}>
              <View
                style={{
                  backgroundColor: '#FFC727',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                }}>
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../assets/valid.png')}
                  resizeMode="contain"
                />
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    paddingTop: 20,
                    fontWeight: '700',
                  }}>
                  Great!
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    paddingVertical: 10,
                    fontWeight: '500',
                  }}>
                  You have been checked in successfully.
                </Text>
              </View>

              <Pressable
                style={{
                  backgroundColor: '#FFC727',
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                }}
                android_ripple={{color: 'red'}}
                onPress={() => setCheckInModal(false)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '700',
                    margin: 10,
                  }}>
                  Ok
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckInSuccessModal;

const styles = StyleSheet.create({});
