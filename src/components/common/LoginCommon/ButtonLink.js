/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name: Harshit Sonawala
 2. Developer Email ID: hssonawala@gmail.com
 3. Component Description: ButtonLink Component for Log In Page
 4. Props list:
    a. icon - Icon image path,
    b. buttonTitle - link text to display,
    c. buttonTitleStyle - to apply extra style to the text,
    c. linkColor - color of the link,
    d. onPress - function to execute onPress,
    e. style - pass any other style prop.
 5. Date Created: 18/11/21
 6. Date Modified: 2/12/21
 7. Version number: 1.2
 8. Previous version Developer Name: Harshit Sonawala
 9. Previous version Developer Email ID: hssonawala@gmail.com
 10. Previous version description: NA.
 11. Current version Developer Name: Harshit Sonawala
 12. Current version Developer Email ID: hssonawala@gmail.com
 13. Current version description: Added extra style prop for the text
 ======COMPONENT COMMENT ENDS======*/

import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Label } from '../LoginCommon';

class ButtonLink extends Component {
  render() {

    const {
      icon,
      buttonTitle,
      buttonTitleFontWeight,
      buttonTitleStyle,
      linkColor,
      onPress,
      style
    } = this.props;

    const {
      flexRow,
      buttonLinkStyle,
      buttonIconStyle
    } = styles;

    var finalButtonFontWeight = 500;
    if (buttonTitleFontWeight != undefined) {
      finalButtonFontWeight = buttonTitleFontWeight;
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[buttonLinkStyle, style]}
      >
        <View style={flexRow}>
          {icon && <Image
            source={icon}
            style={[{ tintColor: linkColor }, buttonIconStyle]}
            tintColor={linkColor}
          />}
          {buttonTitle && <Label
            text={buttonTitle}
            textColor={linkColor}
            textSize={16}
            textWeight={finalButtonFontWeight}
            style={buttonTitleStyle}
          />}
        </View>
      </TouchableOpacity>
    );
  };
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLinkStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});

export { ButtonLink };