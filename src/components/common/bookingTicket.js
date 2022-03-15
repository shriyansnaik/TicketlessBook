import {View, Text, Image} from 'react-native';
import React from 'react';
import DoubleLineText from './DoubleLineText';

function BookingTicket({qrcode, heading, place, time,date, cost, orderId, people}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '90%',
        padding: 20,
        elevation: 5,
        borderRadius: 20,
      }}>
      <Text style={{fontSize: 25, color: '#000000', fontWeight: 'bold'}}>
        {heading}
      </Text>
      <Text style={{color: '#00000050', fontWeight: 'bold', fontSize: 15}}>
        Show this ticket at the entrance
      </Text>
      <View
        style={{
          width: '100%',
          backgroundColor: '#00000040',
          height: 1,
          marginTop: 10,
          marginBottom: 10,
          alignSelf: 'center',
          marginTop: 15,
          marginBottom: 15,
        }}></View>
      <View style={{width: '70%'}}>
        <DoubleLineText
          title={'Place'}
          subtitle={place}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <DoubleLineText title={'Date'} subtitle={date} />
          <DoubleLineText title={'Time'} subtitle={time} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <DoubleLineText title={'Cost'} subtitle={cost} />
          <DoubleLineText title={'Order ID'} subtitle={orderId} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <DoubleLineText title={'People'} subtitle={people} />
          {/* <DoubleLineText title={'Time'} subtitle={'22:22 PM'} /> */}
        </View>
      </View>
      <Text ellipsizeMode="clip" numberOfLines={1} style={{fontSize: 40}}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - -
      </Text>
      <Image
        style={{height: 150, aspectRatio: 1}}
        source={qrcode}
      />
    </View>
  );
}

export default BookingTicket;
