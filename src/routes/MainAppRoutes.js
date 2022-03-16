import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import BookingHistory from '../components/BookingHistory';
import QrScan from '../components/QrScan';
import TestingScreen from '../components/TestingScreen';
import SignIn from '../components/SignIn';
import TourDetails from '../components/TourDetails';
import AttractionListItem from '../components/common/AttractionListItem';
import TicketSelectionScreen from '../components/TicketSelectionScreen';
import MaterialTopTab from './MaterialTopTab';
const Stack = createNativeStackNavigator();

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MaterialTab"
          component={MaterialTopTab}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Testing" component={TestingScreen} /> */}
        <Stack.Screen
          name="TicketSelection"
          component={TicketSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TourDetails"
          component={TourDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;