import {View, Text} from 'react-native';
import React from 'react';

function DoubleLineText({title, subtitle, style}) {
  return (
    <View style={style}>
      <Text style={{color: '#00000050', fontWeight: 'bold', fontSize: 14}}>
        {title}
      </Text>
      <Text style={{fontSize: 15, color: '#000000', fontWeight: 'bold'}}>
        {subtitle}
      </Text>
    </View>
  );
}

export default DoubleLineText
