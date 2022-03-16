/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name: Tejas Chaplot
 2. Developer Email ID: chaplottejas
 3. Component Description: Custom alert
 4. Props list: No props list direct enter from the screen it calls
 example - CustomAlert.show("Alert name",require("image"),"button1","button2")
 5. Date Created: 11/12/21
 6. Date Modified: DD/MM/YY
 7. Version number:1.0.0
 8. Previous version Developer Name:
 9. Previous version Developer Email ID:
 10. Previous version description:
 11. Current version Developer Name:
 12. Current version Developer Email ID:
 13. Current version description:
 ======COMPONENT COMMENT ENDS======*/
import React, {Component} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Label} from '../LoginCommon';

class CustomAlert extends Component {
  static alertInstance;
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: '',
      image: null,
      button1: '',
      button2: '',
    };
    CustomAlert.alertInstance = this;
  }
  static show(text, image, button1, button2) {
    CustomAlert.alertInstance._show(text, image, button1, button2);
  }
  _show(text, image, button1, button2) {
    this.setState({visible: true, text, image, button1, button2});
  }
  _cancelButton() {
    if (this.state.button2.toLocaleLowerCase() === 'cancel') {
      this.setState({visible: false});
    } else {
      console.log(this.state.button2);
    }
  }
  _ok() {
    this.setState({visible: false});
    console.log(this.state.button1);
  }
  render() {
    const {visible, text, image, button1, button2} = this.state;

    const {
      container,
      alertBox,
      androidAlertBox,
      iconStyle,
      androidTitle,
      ButtonGroup,
      androidButton2,
      alertView,
      buttonContainer
    } = styles;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          this.setState({visible: false});
        }}
        // rgba(16, 12, 12, 0.64)
        // #606070
      >
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('tab bar preess');
          }}>
          {/* <ImageBackground style={{flex:1, backgroundColor:"rgba(16, 12, 12, 0.64)"}} blurRadius={20}>  */}
          <View style={container}>
            <View style={[alertBox]}>
              <View style={[androidAlertBox]}>
                {image && (
                  <View style={alertView}>
                    <Image resizeMode='contain' source={image} style={iconStyle} />
                  </View>
                )}
                <Label
                  text={text}
                  style={androidTitle}
                  textSize={17}
                  textWeight={700}
                  textColor="#505050"
                />
                <View style={buttonContainer}>
                  <Button
                    buttonTitle={button1}
                    style={ButtonGroup}
                    mode="dark"
                    onPress={() => {
                      this._ok();
                    }}
                  />
                  {this.state.button2 && (
                    <Button
                      buttonTitle={button2}
                      style={[ButtonGroup, androidButton2]}
                      mode="light"
                      onPress={() => {
                        this._cancelButton();
                      }}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
          {/* </ImageBackground> */}
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(16, 12, 12, 0.64)',
    flex: 1,
  },
  androidBackdrop: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
  iconStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 20,
    height: 20,
    tintColor:'#FFFFFF'
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(200,200,200,.3)',
  },
  androidButton2: {
    backgroundColor: 'transparent',
    borderColor: '#1B5ADE',

    // padding:20
  },
  androidAlertBox: {
    width: '90%',
    // height:"25%",
    // justifyContent: 'space-evenly',
    paddingVertical:20,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  androidTitle: {
    width:"70%",
    // padding: 15,
    alignSelf:'center',
    textAlign:'center',
    marginTop: 22,
    marginBottom:28

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal:20,
    marginBottom:5,
    alignItems: 'center',
  },
  ButtonGroup: {
    // flex:1,
    width:"40%",
    // backgroundColor
    marginLeft: 10
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 10,
    // marginBottom: -10,
  },
  alertView: {
    width: 80,
    height: 80,
    // elevation: 5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#1B5ADE',
    borderRadius: 500,
    // bottom: 30,
    // left: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export {CustomAlert};
