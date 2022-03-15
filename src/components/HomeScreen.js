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
        onPress={() => navigation.navigate('TestingScreen')}>
        <Text style={{color: '#ffffff', fontSize: 20}}>Testing Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
