import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Label} from './LoginCommon';

const AttractionListItem = () => {
  const {imageStyle, container, headingContainer, saveCircle} = styles;
  return (
    <View
      style={{backgroundColor:'#FFDDEE'}}
      onPress={() => console.log('Detail Screen')}>
      <View style={container}>
        <TouchableOpacity style={saveCircle}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor:'white'
            }}
            source={require('../../assets/Icons/saved.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={imageStyle}
            source={require('../../assets/Images/login3.jpg')}
          />
        </TouchableOpacity>
        <View style={headingContainer}>
          <Label
            text={'India Gate'}
            textSize={20}
            textWeight={700}
            style={{margin: 5}}
            // textColor='white'
          />
          <Image
            style={{width: 20, height: 20, marginLeft: 40, marginRight: 10}}
            source={require('../../assets/Icons/star.png')}
          />
          <Label text={4.8} textSize={16} textWeight={300} />
        </View>
        {/* <Label
        text={
          'The India Gate (formerly known as the All India War Memorial) is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway. It stands as a memorial to 90,000 soldiers of the British Indian Army who died in between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemens names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.'
        }
        textSize={16}
        textWeight={400}
        numberOfLines={2}
      /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContenti: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    width: 250,
    height: 200,
    borderRadius: 25,
  },
  saveCircle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 50,
    width: 50,
    backgroundColor: '#0E3EDA',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default AttractionListItem;
