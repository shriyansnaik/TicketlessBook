
/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name:Amodh Pandey
 2. Developer Email ID:amodh.pandey64@gmail.com
 3. Component Description:Modal Loader shows up when called
 4. Props list:
 5. Date Created: 8/12/21
 6. Date Modified: DD/MM/YY
 7. Version number:1.0.0
 8. Previous version Developer Name:
 9. Previous version Developer Email ID:
 10. Previous version description:
 11. Current version Developer Name:Amodh Pandey
 12. Current version Developer Email ID:amodh.pandey64@gmail.com
 13. Current version description:Loader shows up when called
 ======COMPONENT COMMENT ENDS======*/
import React, {Component} from 'react';
import {View, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import {Label} from '.';

class ModalLoader extends Component {
  render() {
    const {modalBackground, activityIndicatorContainer} = styles;
    return (
      <Modal transparent={true} visible={true} animationType="slide">
        <View style={modalBackground}>
          <View style={activityIndicatorContainer}>
            <ActivityIndicator size="large" color='#1B5ADE'/>
            <Label
              textColor="#1B5ADE"
              textWeight={600}
              text="Loading..."
              textSize={16}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  activityIndicatorContainer: {
    backgroundColor: 'white',
    height: 120,
    width: 120,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:15,
  },
});
export {ModalLoader};
