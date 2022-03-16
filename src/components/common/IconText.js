import {View, Text, Image} from 'react-native';
import React from 'react';

export default function IconText({icon, text}) {
  return (
    <View
      style={{
        height: 75,
        width: 65,
        backgroundColor: '#87ceeb40',
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Image
        source={icon}
        style={{
          width: 35,
          height: 35,
        }}
      />
      <Text
        style={{
          fontFamily: 'times-new-roman',
          fontSize: 15,
          color: '#000000',
          marginTop: 7,
        }}>
        {text}
      </Text>
    </View>
  );
}
