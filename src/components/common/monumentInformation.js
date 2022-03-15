import { View, Text , StyleSheet } from 'react-native'
import React from 'react'


export default function MonumentInformation() {
    const {ViewStyle} = styles;
  return (
    <View>
      <Text style ={ViewStyle}>monumentInformation</Text>
    </View>
  )
}
const styles = StyleSheet.create ({
    ViewStyle:{
        backgroundColor:'pink',
    }
})