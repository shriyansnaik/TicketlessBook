/*=====COMPONENT COMMENT BEGINS=====
1. Developer Name: Devansh Thakker
2. Developer Email ID: devanshthaker15@gmail.com
3. Component Description: brush icons with text below
4. Props list: a. icon: specify the location of the image here
               b. title: pass the text to be given here
               c. onPress: default prop for touchable opacity
               d. style: styles to be given to the button
               e. margin: margin between the icon and the text (compulsory)
5. Date Created: 24/11/21
6. Date Modified: DD/MM/YY
7. Version number: 1.0.0
8. Previous version Developer Name:
9. Previous version Developer Email ID:
10. Previous version description:
11. Current version Developer Name:
12. Current version Developer Email ID:
13. Current version description:
======COMPONENT COMMENT ENDS======*/
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { Label } from './';

class BrushButtons extends Component {
  render() {
    const { title, onPress, icon, margin, style, size, weight } = this.props;
    const { imageStyle } = styles;
    return (
      <TouchableOpacity onPress={onPress} style={[imageStyle, style]} >
        <Image source={icon} style={imageStyle} resizeMode='contain' marginBottom={margin} />
        <Label text={title} textSize={size} textWeight={weight} textColor="black" style={{ alignItems: 'center', marginTop: 20, }} />
      </TouchableOpacity>
    );
  }
}
const styles = {
  imageStyle: {
    marginBottom: 15,
    alignItems: 'center',
    // backgroundColor: 'green',

    alignSelf: 'baseline',
  },
};
export { BrushButtons };
