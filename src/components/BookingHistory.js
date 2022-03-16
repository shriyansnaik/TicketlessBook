import {View, Text} from 'react-native';
import React from 'react';
import BookingTicket from './common/BookingTicket';

function BookingHistory() {
  return (
    <View style={{backgroundColor: 'black', alignItems: 'center', flex: 1}}>
      <BookingTicket
        heading="Taj Mahal"
        place="Agra, Uttar Pradesh, India"
        date="19.03.22"
        time="11:45 AM"
        cost='1000.00'
        orderId={'ABC1083'}
        people={3}
        qrcode={require('../assets/Images/QR.png')}
      />
    </View>
  );
}

export default BookingHistory;
