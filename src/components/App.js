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
import MonumentInformation from './common/MonumentInformation';

const App = () => {
    return (
      <View>
         <MonumentInformation/>
      </View>
    );
}

export default App;
