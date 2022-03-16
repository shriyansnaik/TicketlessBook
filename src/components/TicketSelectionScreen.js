import {View, Text} from 'react-native';
import React from 'react';
import {Calendar, CalendarList} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';

export default function TicketSelectionScreen() {
  return (
    <View>
      <CalendarStrip
      style={{height:120, paddingTop: 20, paddingBottom: 10}}
      calendarColor={'#7748d3'}
      calendarHeaderStyle={{color: 'white'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1}}
      minDate={'2022-03-16'}
      maxDate={'2022-03-20'}
    />
    </View>
  );
}
