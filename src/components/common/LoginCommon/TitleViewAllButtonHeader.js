/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name: Devansh Thakker
 2. Developer Email ID: devanshthakker15@gmail.com
 3. Component Description: title header to be used
 4. Props list:
           a. title: heading to be given
           b. style: any styling to be done to the title
           c. viewAllOnPress: pass this if view all button needed
           d. viewBorderBottom: pass this with boolean value if bottom border required
           e. textSize: size of the textSize
           f. textWeight: weight of the text
           g. paddingBottom: padding between the text and the bottom border
 5. Date Created: 16/11/21
 6. Date Modified: DD/MM/YY
 7. Version number:1.0.2
 8. Previous version Developer Name:
 9. Previous version Developer Email ID:
 10. Previous version description:
 11. Current version Developer Name: Devansh Thakker
 12. Current version Developer Email ID: devanshthakker15@gmail.com
 13. Current version description: Title header with icon besides header added and a view all button
 ======COMPONENT COMMENT ENDS======*/

import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Label } from "./";

/*=====FUNCTION COMMENT BEGINS=====\n
        1. Developer Name: Devansh Thakker \n
        2. Developer Email ID: devanshthakker15@gmail.com \n
        3. Function Description: to add a customizable header with a view all touchable\n
        4. Date Created: 16/11/21 \n
        5. Date Modified: 06/12/21 \n
        6. Parameter List:
                   a. viewBorderBottom//used for showing and not showing border bottom
        7. Return type: \n
      ======FUNCTION COMMENT ENDS======*/
class TitleViewAllButtonHeader extends Component {
  returnBorderBottomStyle(condition, bottomPadding) {
    if (condition) {
      if (bottomPadding) {
        return {
          width: '90%',
          paddingBottom: bottomPadding,
          borderBottomWidth: 0.5,
          alignSelf: 'center',
          borderColor: '#CCCCCC',
          color: 'black',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        };
      }
      return {
        width: '90%',
        paddingBottom: 17,
        borderBottomWidth: 0.5,
        alignSelf: 'center',
        borderColor: '#CCCCCC',
        color: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      };
    } else {
      if (bottomPadding) {
        return {
          width: '90%',
          paddingBottom: bottomPadding,
          //borderBottomWidth: 0.5,
          alignSelf: 'center',
          //borderColor: '#CCCCCC',
          color: 'black',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        };
      }
      return {
        width: '90%',
        paddingBottom: 17,
        //borderBottomWidth: 0.5,
        alignSelf: 'center',
        //borderColor: '#CCCCCC',
        color: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      };
    }
  }

  /*=====FUNCTION COMMENT BEGINS=====
   1. Developer Name:  Devansh Thakker
   2. Developer Email ID: devanshthakker15@gmail.com
   3. Function Description: to show or hide the view all button
   4. Date Created: 16/11/21
   5. Date Modified: DD/MM/YY
   6. Parameter List: viewAllOnPress() //used for showing and not showing view all button
   7. Return type:
   ======FUNCTION COMMENT ENDS======*/

  renderviewAllOnPress() {
    if (this.props.viewAllOnPress) {
      return (
        <TouchableOpacity
          onPress={this.props.viewAllOnPress}
          style={styles.viewAllButtonStyle}>
          <Label
            textWeight={400}
            text="VIEW ALL"
            textColor="#606060"
            textSize={13.5}
            style={{ letterSpacing: 2.5, marginRight: 6, }}
          />
          <Image
            style={styles.imageStyle}
            source={require('../../../assets/Icons/Other/arrows/chevron-forward/chevron-forward.png')}
          />
        </TouchableOpacity>
      );
    }
  }

  /*=====FUNCTION COMMENT BEGINS=====
   1. Developer Name:  Harshit Sonawala
   2. Developer Email ID: hssonawala@gmail.com
   3. Function Description: to show or hide icon to the left of the header
   4. Date Created: 13/12/21
   5. Date Modified: DD/MM/YY
   6. Parameter List: headerLeftIcon() //used for showing an icon to the left of the header
   7. Return type: Render Component
   ======FUNCTION COMMENT ENDS======*/
  showHeaderLeftIcon() {
    if (this.props.headerLeftIcon) {
      return (
        <Image
          style={[styles.defaultLeftIconStyle, this.props.leftIconStyle]}
          source={this.props.headerLeftIcon}
        />
      );
    }
  }

  /*=====FUNCTION COMMENT BEGINS=====
   1. Developer Name:  Devansh Thakker
   2. Developer Email ID: devanshthakker15@gmail.com
   3. Function Description: to show or hide the header icon
   4. Date Created: 16/11/21
   5. Date Modified: DD/MM/YY
   6. Parameter List: headerIcon() //used for showing and not showing header icon
   7. Return type:
   ======FUNCTION COMMENT ENDS======*/
  showHeaderRightIcon() {
    if (this.props.headerRightIcon) {
      return (
        <Image
          style={[styles.defaultRightIconStyle, this.props.rightIconStyle]}
          source={this.props.headerRightIcon}
        />
      );
    }
  }

  /*=====FUNCTION COMMENT BEGINS=====
   1. Developer Name:  Devansh Thakker
   2. Developer Email ID: devanshthakker15@gmail.com
   3. Function Description: to show or hide the header icon
   4. Date Created: 02/12/21
   5. Date Modified: DD/MM/YY
   6. Parameter List: textWeight //to change the default textWeight
   7. Return type:
   ======FUNCTION COMMENT ENDS======*/

  renderTextWeight() {
    if (this.props.textWeight) {
      return this.props.textWeight;
    } else {
      return 700;
    }
  }
  /*=====FUNCTION COMMENT BEGINS=====
   1. Developer Name:  Devansh Thakker
   2. Developer Email ID: devanshthakker15@gmail.com
   3. Function Description: to show or hide the header icon
   4. Date Created: 02/12/21
   5. Date Modified: DD/MM/YY
   6. Parameter List: textSize //to change the default textSize
   7. Return type:
   ======FUNCTION COMMENT ENDS======*/
  renderTextSize() {
    if (this.props.textSize) {
      return this.props.textSize;
    } else {
      return 17;
    }
  }
  /*=====FUNCTION COMMENT BEGINS=====
   1. Developer Name:  Devansh Thakker
   2. Developer Email ID: devanshthakker15@gmail.com
   3. Function Description: to show or hide the header icon
   4. Date Created: 03/12/21
   5. Date Modified: DD/MM/YY
   6. Parameter List: textSize //to change the default textColor
   7. Return type:
   ======FUNCTION COMMENT ENDS======*/
  renderTextColor() {
    if (this.props.textColor) {
      return this.props.textColor;
    } else {
      return 'black';
    }
  }

  checkCharacterSpacing() {
    if (this.props.characterSpacing) {
      return this.props.characterSpacing;
    } else {
      return 0;
    }
  }

  // renderPaddingBottom(){
  //   if(this.props.paddingBottom){
  //     return this.props.paddingBottom;
  //
  //   }
  //   else
  //   {
  //     return 17;
  //   }
  // }

  render() {
    const {
      title,
      style,
      headerStyle,
      viewAllOnPress,
      viewBorderBottom,
      headerRightIcon,
      rightIconStyle,
      headerLeftIcon,
      leftIconStyle,
      textSize,
      textWeight,
      textColor,
      paddingBottom,
    } = this.props;
    const {
      viewStyle,
      imageStyle,
      viewAllButtonStyle,
      defaultRightIconStyle,
      styleMain,
      defaultTextStyle,
    } = styles;

    return (
      <View
        style={[
          this.returnBorderBottomStyle(viewBorderBottom, paddingBottom),
          style,
        ]}>
        <View style={viewStyle}>
          {this.showHeaderLeftIcon()}
          <Label
            text={title}
            textSize={this.renderTextSize()}
            textWeight={this.renderTextWeight()}
            textColor={this.renderTextColor()}
            style={headerStyle}
            characterSpacing={this.checkCharacterSpacing()}
          />
          {this.showHeaderRightIcon()}
        </View>
        {this.renderviewAllOnPress()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: "row",
    alignItems: 'center',
  },

  imageStyle: {
    width: 15,
    height: 15,

  },

  defaultLeftIconStyle: {
    width: 20,
    height: 20,
    marginRight: 15,
  },

  defaultRightIconStyle: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginLeft: 5,
  },

  viewAllButtonStyle: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  viewIconOnHeader: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    height: 22,
    flexWrap: "wrap",
  },

  styleMain: {
    width: '100%',
    backgroundColor: "green"
  },
  defaultTextStyle: {
    fontFamily: 'Satoshi-Bold',
    color: 'black',
    fontSize: 17,
  },
};

export { TitleViewAllButtonHeader };
