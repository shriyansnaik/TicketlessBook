import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../components/App';
import HomeScreen from '../components/HomeScreen';
// import QrScan from '../components/QrScan';
// import BookingTicket from '../components/common/BookingTicket';
// import MonumentInformation from '../components/common/MonumentInformation';
const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';

function MainAppRoutes() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="BookingTicket" component={BookingTicket} />
      <Stack.Screen
        name="MonumentInformation"
        component={MonumentInformation}
      /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;
