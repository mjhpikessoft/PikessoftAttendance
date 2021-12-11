import React, {useContext, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CheckInButton from './CheckInButton';
import {
  OPEN_SANS_REGULAR,
  PROXIMA_NOVA_ALT_BOLD,
  PROXIMA_NOVA_BOLD,
} from '../components/Fonts';
// import { Context1 } from '../screens/HomeScreen'
// import RBSheet from "react-native-raw-bottom-sheet";

const EmployProfileComponenet = ({
  profileUri,
  name,
  designation,
  gender,
  age,
}) => {
  // const value1 = useContext(Context1)

  const refRBSheet = useRef();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingLeft: 15,
        }}>
        <View style={styles.ImgWithInfoContainer}>
          <View style={styles.shadow}>
            <Image style={styles.img} source={{uri: profileUri}} />
          </View>

          <View style={{justifyContent: 'center', marginLeft: 10}}>
            {/* <Context1.Consumer> */}
            <Text numberOfLines={1} style={styles.name}>
              {name}
            </Text>

            {/* </Context1.Consumer> */}

            <Text numberOfLines={1} style={styles.desegnation}>
              {designation}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '400', fontSize: 12, color: '#263238'}}>
                Gender: <Text style={styles.desegnation}>{gender},</Text>
              </Text>

              <Text style={{fontWeight: '400', fontSize: 12, color: '#263238'}}>
                {' '}
                Age: <Text style={styles.desegnation}>{age}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployProfileComponenet;

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowRadius: 50,
    elevation: 9,
    shadowOpacity: 0.5,
    borderRadius: 50,
    height: 84,
    width: 82,
  },

  img: {
    // width: width*0.04,
    // height: height*0.04,
    height: 84,
    width: 82,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    // alignSelf: 'center'
  },
  name: {
    fontSize: 18,
    // marginBottom:5,
    fontWeight: '400',
    maxWidth: 300,
    fontFamily: 'Poppins',
    color: '#111828',
  },

  desegnation: {
    fontSize: 12,
    fontWeight: '600',
    // lineHeight:18,
    maxWidth: 300,
    color: '#111828',
    marginVertical: 5,
  },

  ImgWithInfoContainer: {
    // alignItems: 'center',
    flexDirection: 'row',

    // width: 90,
    // height: 180
  },
});
