import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import QrScan from '../components/QrScan';
import HomeScreen from '../components/HomeScreen';
import BookingHistory from '../components/BookingHistory';

const MaterialTab = createMaterialTopTabNavigator();

export default function MaterialTopTab() {
  return (
    <MaterialTab.Navigator
      initialRouteName='Home'>
      <MaterialTab.Screen
        name="QR"
        component={QrScan}
        options={{
          headerShown: false,
        }}
      />
      <MaterialTab.Screen name="Home" component={HomeScreen} />
      <MaterialTab.Screen name="Your Bookings" component={BookingHistory} />
    </MaterialTab.Navigator>
  );
}
