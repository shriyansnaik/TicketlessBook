/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name: Kashyap Kotak
 2. Developer Email ID: kotakkashyap2803@gmail.com
 3. Component Description: TextField To Be used every where
 4. Props list:
    a. onChangeText - default prop of textfield
    b. placeholder - default prop of textfield
    c. placeholderTextColor - default prop of textfield
    d. onFocus - default prop of textfield
    e. autoFocus - default prop of textfield
    f. keyboardType - default prop of textfield
    g. maxLength - default prop of textfield
    h. children - default prop of textfield
    i. value - default prop of textfield
    j. style - Provide style to the view of textField
    k. editable - default prop of textfield
    l. hasBorder - if this is true then the TextField will have border
    m. textFieldIcon - you can pass any icon that you need in this field eg. require('icon path with name')
    n. tintColor - change the bordercolor, placeholder color, icon color and texcolor of the textField
    o. secureTextEntry - default TextInput prop for password input
    p. textAlignVertical - styling prop for multiline textInput
    q. onPressIn - default action prop of TextInput
    r. onPressOut - default action prop of TextInput
    s. multiline - default prop of TextInput to enable/disable multiline TextInput
    t. numberOfLines - default prop of TextInput for multiline TextInput
    u. highlightColor - border color of the text field when it is focused
    v. validationErrorTextField - TextField turns red
 5. Date Created: 17/11/2021
 6. Date Modified: 23/12/2021
 7. Version number: 1.0.5
 8. Previous version Developer Name: Harshit Sonawala
 9. Previous version Developer Email ID: hssonawala@gmail.com
 10. Previous version description:
 11. Current version Developer Name: Kashyap Kotak
 12. Current version Developer Email ID: kotakkashyap2803@gmail.com
 13. Current version description: added validationerrorTextField where TextField turns red if validation error
 ======COMPONENT COMMENT ENDS======*/

import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

class TextField extends Component {
  state = {
    isFocused: false,
  };
  /*=====FUNCTION COMMENT BEGINS=====\n
        1. Developer Name: Kashyap Kotak
        2. Developer Email ID: kotakkashyap2803@gmail.com
        3. Function Description: returns custom styles for TextInput according to the user props
        4. Date Created: 17/11/2021
        5. Date Modified: DD/MM/YY \n
        6. Parameter List:
            a. hasIcon - accepts true/false according to which provides flex to TextInput
            b. textAlignVertical - accepts top, center, bottom for text in TextInput
        7. Return type: style object
      ======FUNCTION COMMENT ENDS======*/

  customTextInputStyle(hasIcon, textAlignVertical, fontColor, letterSpacing) {
    if (hasIcon) {
      if (textAlignVertical) {
        return {
          flex: 9,
          textAlignVertical: textAlignVertical,
          color: fontColor,
          fontFamily: 'Satoshi-Regular',
          letterSpacing: letterSpacing,
        };
      }
      return {
        flex: 9,
        color: fontColor,
        fontFamily: 'Satoshi-Regular',
        letterSpacing: letterSpacing,
        // textAlignVertical: 'center',
      };
    } else {
      if (textAlignVertical) {
        return {
          flex: 9,
          textAlignVertical: textAlignVertical,
          letterSpacing: letterSpacing,
          color: fontColor,
          fontFamily: 'Satoshi-Regular',
        };
      }
      return {
        flex: 1,
        color: fontColor,
        fontFamily: 'Satoshi-Regular',
        letterSpacing: letterSpacing,
        // textAlignVertical: 'center',
      };
    }
  }

  /*=====FUNCTION COMMENT BEGINS=====\n
        1. Developer Name: Kashyap Kotak
        2. Developer Email ID: kotakkashyap2803@gmail.com
        3. Function Description: returns custom styles for TextInputView according to the user props
        4. Date Created: 17/11/2021
        5. Date Modified: DD/MM/YY \n
        6. Parameter List:
            a. hasBorder - accepts true/false according to which provides border to TextInput
            b. customBorderColor - to set tintColor as border color
        7. Return type: style object
      ======FUNCTION COMMENT ENDS======*/

  highlightColor(customBorderColor, highlightColor, defaultHightlightColor, validationTextField) {
    if (highlightColor !== undefined && this.state.isFocused) {
      return '#1B5ADE';
    }
    if (highlightColor !== undefined) {
      return highlightColor;
    }
    if (validationTextField) {
      return customBorderColor;
    }
    if (highlightColor === undefined && this.state.isFocused && validationTextField !== undefined) {
      return '#1B5ADE';
    }
    if (highlightColor === undefined) {
      return customBorderColor;
    } else {
      return customBorderColor;
    }
  }

  customTextInputViewStyle(
    hasBorder,
    customBorderColor,
    highlightColor,
    defaultHightlightColor,
    validationTextField,
  ) {
    if (hasBorder) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: this.highlightColor(
          customBorderColor,
          highlightColor,
          defaultHightlightColor,
          validationTextField,
        ),
        paddingLeft: 15,
      };
    }
    // if (this.state.isFocused && hasBorder === true) {
    //   return {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '95%',
    //     height: 46,
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     paddingLeft: 15,
    //   };
    // }
    if (this.state.isFocused && highlightColor !== undefined) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        borderWidth: 1,
        borderColor: highlightColor,
        paddingLeft: 15,
        elevation: 10,
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      };
    }
    if (this.state.isFocused && highlightColor === undefined) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        borderWidth: 1,
        borderColor: '#1B5ADE',
        paddingLeft: 15,
        elevation: 10,
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      };
    } else {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        elevation: 10,
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      };
    }
  }

  render() {
    const {
      onChangeText,
      placeholder,
      placeholderTextColor,
      onFocus,
      autoFocus,
      keyboardType,
      maxLength,
      children,
      value,
      style,
      editable,
      hasBorder,
      textFieldIcon,
      tintColor,
      onPressIn,
      onPressOut,
      multiline,
      numberOfLines,
      secureTextEntry,
      textAlignVertical,
      highlightColor,
      letterSpacing,
      validationErrorTextField,
    } = this.props;

    const {imageStyle} = styles;

    var customPlaceholderColor = 'black';
    var customBorderColor = '#606060';
    var imageColor = '#606060';
    var fontColor = 'black';
    var defaultHightlightColor = '#1B5ADE';

    var finalLetterSpacing = 0;

    if (letterSpacing) {
      finalLetterSpacing = letterSpacing;
    }

    if (tintColor) {
      customPlaceholderColor = tintColor;
      customBorderColor = tintColor;
      imageColor = tintColor;
      fontColor = tintColor;
    } else if (placeholderTextColor) {
      customPlaceholderColor = placeholderTextColor;
      imageColor = placeholderTextColor;
    }

    var errorBorderColor = 'red';

    if (validationErrorTextField) {
      var errorHasBorder = true;
      return(
        <View
          style={[
            this.customTextInputViewStyle(
              errorHasBorder,
              errorBorderColor,
              undefined,
              customBorderColor,
              validationErrorTextField,
            ),
            style,
          ]}>
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={errorBorderColor}
            onFocus={onFocus}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            children={children}
            value={value}
            editable={editable}
            // style={this.customTextInputStyle(
            //   false,
            //   textAlignVertical,
            //   fontColor,
            // )}
            style={this.customTextInputStyle(
              false,
              textAlignVertical,
              customPlaceholderColor,
              finalLetterSpacing,
            )}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            // onFocus={() => {
            //   this.setState({isFocused: true});
            // }}
            onBlur={() => {
              this.setState({isFocused: false});
            }}
            selectionColor={errorBorderColor}
          />
        </View>
      )
    }

    if (textFieldIcon) {
      return (
        <View
          style={[
            this.customTextInputViewStyle(
              hasBorder,
              customBorderColor,
              defaultHightlightColor,
            ),
            style,
          ]}>
          <Image
            style={imageStyle}
            source={textFieldIcon}
            resizeMode="contain"
            tintColor={imageColor}
          />
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={customPlaceholderColor}
            onFocus={onFocus}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            children={children}
            value={value}
            editable={editable}
            style={this.customTextInputStyle(
              true,
              textAlignVertical,
              fontColor,
              finalLetterSpacing,
            )}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            // onFocus={() => {
            //   this.setState({isFocused: true});
            // }}
            onBlur={() => {
              this.setState({isFocused: false});
            }}
            selectionColor={'#1B5ADE'}
          />
        </View>
      );
    } else {
      return (
        <View
          style={[
            this.customTextInputViewStyle(
              hasBorder,
              customBorderColor,
              highlightColor,
            ),
            style,
          ]}>
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={customPlaceholderColor}
            onFocus={onFocus}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            children={children}
            value={value}
            editable={editable}
            // style={this.customTextInputStyle(
            //   false,
            //   textAlignVertical,
            //   fontColor,
            // )}
            style={this.customTextInputStyle(
              false,
              textAlignVertical,
              fontColor,
              finalLetterSpacing,
            )}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            // onFocus={() => {
            //   this.setState({isFocused: true});
            // }}
            onBlur={() => {
              this.setState({isFocused: false});
            }}
            selectionColor={'#1B5ADE'}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    marginLeft: -5,
  },
});

export {TextField};
