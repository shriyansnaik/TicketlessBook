import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import MainAppRoutes from '../routes/MainAppRoutes';
import HomeScreen from './HomeScreen';


const App = () => {
    return (
      <MainAppRoutes/>
    );
}

export default App;
