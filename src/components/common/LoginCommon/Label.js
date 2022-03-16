/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name: Kashyap Kotak
 2. Developer Email ID: kotakkashyap2803@gmail.com
 3. Component Description: Text To Be used every where
 4. Props list:
    a. textColor - color for the text
    b.textSize - size for text
    c.fontWeight - number for font Weight that will decide font faily
    d.text - Text that has to be displayed
    e.style - custom style for Label
    d. numberOfLines - default prop of Text
    e. ellipsizeMode - default prop of Text
    f. children - default prop of text allows to pass children to Label
    g. textAlign - default style prop for Text
    i. characterSpacing - for character spacing
 5. Date Created: 16/11/2021
 6. Date Modified: 27/11/2021
 7. Version number: 1.0.5
 8. Previous version Developer Name:Kashyap Kotak
 9. Previous version Developer Email ID:kotakkashyap2803@gmail.com
 10. Previous version description:
 11. Current version Developer Name: Prince Karania
 12. Current version Developer Email ID: karania.prince@gmail.com
 13. Current version description: Added character spacing
 ======COMPONENT COMMENT ENDS======*/

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

class Label extends Component {
  /*=====FUNCTION COMMENT BEGINS=====\n
        1. Developer Name: Kashyap Kotak
        2. Developer Email ID: kotakkashyap2803@gmail.com
        3. Function Description: returns custom styles for text according to the user props
        4. Date Created: 16/11/2021
        5. Date Modified: DD/MM/YY \n
        6. Parameter List:
            a. textColor - color of the text
            b. fontFamily - family for the text that is calculated by weight number
            c. textSize - size for the text
        7. Return type: style object
      ======FUNCTION COMMENT ENDS======*/

  textStyle(textColor, textWeight, textSize, textAlign, characterSpacing) {
    var fontFamily = '';

    if (textWeight <= 200) {
      fontFamily = 'Satoshi-Light';
    } else if (textWeight >= 201 && textWeight <= 400) {
      fontFamily = 'Satoshi-Regular';
    } else if (textWeight >= 401 && textWeight <= 600) {
      fontFamily = 'Satoshi-Medium';
    } else if (textWeight >= 601 && textWeight <= 700) {
      fontFamily = 'Satoshi-Bold';
    } else if (textWeight > 700) {
      fontFamily = 'Satoshi-Black';
    } else {
      fontFamily = 'Satoshi-Regular';
    }
    if (characterSpacing === undefined) {
      characterSpacing = 0;
    }

    return {
      color: textColor,
      fontFamily: fontFamily,
      fontSize: textSize,
      textAlign: textAlign,
      letterSpacing: characterSpacing,
    };
  }

  render() {
    const {
      text,
      textColor,
      textSize,
      textWeight,
      characterSpacing,
      style,
      ellippsizeMode,
      numberOfLines,
      children,
      textAlign,
    } = this.props;
    const {defaultTextStyle} = styles;

    return (
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellippsizeMode}
        style={[
          defaultTextStyle,
          this.textStyle(
            textColor,
            textWeight,
            textSize,
            textAlign,
            characterSpacing,
          ),
          style,
        ]}>
        {text}
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'Satoshi-Black',
    color: 'black',
    fontSize: 10,
  },
});

export {Label};
