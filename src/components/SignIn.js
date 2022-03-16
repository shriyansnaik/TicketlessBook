import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Dimensions} from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#F2AF88', flex: 1}}>
        <Image
          source={require('../assets/Images/login4.jpg')}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          blurRadius={3}
        />
        <Text
          style={{
            fontSize: 44,
            fontWeight: '600',
            position: 'absolute',
            color: '#ffffff',
          }}>
          Login
        </Text>
        <TextInput
          //   style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          //   onChangeText={email => setEmail(email)}
        />
      </View>
    );
  }
}
