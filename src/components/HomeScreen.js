import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BookingTicket from './common/BookingTicket';


function HomeScreen({navigation}) {
  return (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'skyblue',
          height: 50,
          width: 100,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('AttractionList')}>
        <Text style={{color: '#ffffff', fontSize: 20}}>Testing Screen</Text>
      </TouchableOpacity>
    </View>
    // <View
    //   style={{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // marginTop: 10,
    //     backgroundColor: '#000000',
    //     flex: 1,
    //   }}>
    //   <BookingTicket
    //     heading={'Taj Mahal'}
    //     place={'Agra, Uttar Pradesh, India'}
    //     date={'19.03.22'}
    //     time={'12:45 PM'}
    //     cost={'375'}
    //     orderId ={'ABC9192'}
    //     people={'3'}
    //     qrcode={require('../assets/Images/QR.png')}
    //   />
    // </View>
  );
}

export default HomeScreen;
