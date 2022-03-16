import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Label} from './LoginCommon';

const AttractionListItem = props => {
  const {
    imageStyle,
    container,
    headingContainer,
    saveCircle,
    priceContainerAndRatingStyle,
  } = styles;
  const {cardContainer, image, heading, description, price,rating} = props;
  return (
    <View style={container}>
      <TouchableOpacity style={saveCircle}>
        <Image
          style={{
            height: 30,
            width: 30,
            tintColor: 'white',
          }}
          source={require('../../assets/Icons/saved.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={imageStyle} source={image} />
      </TouchableOpacity>
      <View style={headingContainer}>
        <Label
          text={heading}
          textSize={20}
          textWeight={700}
          style={{margin: 5}}
          textColor={'black'}
        />
      </View>
      <Label
        text={
          description
        }
        textSize={16}
        textWeight={400}
        numberOfLines={1}
      />

      <View style={priceContainerAndRatingStyle}>
        <View style={{flexDirection: 'row', marginLeft: -35}}>
          <Image
            style={{width: 40, height: 40, marginLeft: 40, marginRight: 10}}
            source={require('../../assets/Icons/rupee.png')}
          />
          <Label text={price} textSize={26} textWeight={500} textColor='black' />
        </View>
        <View style={{flexDirection: 'row', marginRight: 65}}>
          <Image
            style={{width: 25, height: 25, marginLeft: 40, marginRight: 10}}
            source={require('../../assets/Icons/star.png')}
          />
          <Label text={rating} textSize={18} textWeight={600} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    // alignItems: 'center',
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
    top: 5,
    bottom: 0,
    left: 5,
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
  priceContainerAndRatingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10
  },
});

export default AttractionListItem;
