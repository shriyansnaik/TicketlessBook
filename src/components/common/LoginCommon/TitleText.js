/*=====COMPONENT COMMENT BEGINS=====
 1. Developer Name: Kashyap Kotak
 2. Developer Email ID: kotakkashyap2803@gmail.com
 3. Component Description: Title Text with different text color for particular word To Be used every where
 4. Props list:
    a. text - text to be displayed
    b. textInHighlightedColor - text to be displayed in blue
    c. highlightTextColor - color of the text you want highlighted in
    d. style - style of the text if user want to give any
    e. basicTextColor - color of without highlighted text
    f. fontWeight - Weight of font
    g. textSize - size of text
    h. highlightedTextWeight (compulsary) - allows to give different text weight to text that has to be highlighted
    i. textAlign - default prop for Text
    j. highlightedTextOnPress - onPress for the highlighted text specified
 5. Date Created: 17/11/2021
 6. Date Modified: 27/11/2021
 7. Version number: 1.0.4
 8. Previous version Developer Name:
 9. Previous version Developer Email ID:
 10. Previous version description:
 11. Current version Developer Name: Kashyap Kotak
 12. Current version Developer Email ID: kotakkashyap2803@gmail.com
 13. Current version description:
 ======COMPONENT COMMENT ENDS======*/


import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { Label } from ".";


class TitleText extends Component {

    render() {
        const {
            text,
            textInHighlightedColor,
            highlightTextColor,
            highlightedTextWeight,
            textWeight,
            style,
            titleStyle,
            basicTextColor,
            textSize,
            textAlign,
            highlightedTextOnPress,
        } = this.props;

        const { defaultTextViewStyle } = styles;

        var coloredTextArray = textInHighlightedColor.trim().split(' ');
        var textArray = text.split(' ');
        var startText = '';
        var differentColorText = '';
        var endText = '';
        var count = 0;

        for (var i = 0; i < textArray.length; i++) {
            // console.log("in for");
            // console.log(count);
            if (coloredTextArray[0] == textArray[i]) {
                differentColorText = textInHighlightedColor + ' ';
                count += 1;
                continue;
            }
            if (count > 0) {
                if (count < coloredTextArray.length) {
                    count += 1;
                    continue;
                }
                endText = endText + textArray[i] + ' ';
            } else {
                // console.log("in else");
                startText = startText + textArray[i] + ' ';
            }
        }

        if (textInHighlightedColor) {
            if (highlightedTextOnPress) {
                return (
                    <View style={[defaultTextViewStyle, style]}>
                        <Label textAlign={textAlign} text={startText} textSize={textSize} textWeight={textWeight} textColor={basicTextColor} style={titleStyle} />
                        <TouchableOpacity onPress={highlightedTextOnPress} activeOpacity={1}>
                            <Label textAlign={textAlign} text={differentColorText} textSize={textSize} textWeight={[highlightedTextWeight]} textColor={highlightTextColor} style={titleStyle} />
                        </TouchableOpacity>
                        <Label textAlign={textAlign} text={endText} textSize={textSize} textWeight={textWeight} textColor={basicTextColor} style={titleStyle} />
                    </View>
                );
            }
            return (
                <View style={[defaultTextViewStyle, style]}>
                    <Label textAlign={textAlign} text={startText} textSize={textSize} textWeight={textWeight} textColor={basicTextColor} style={titleStyle} ><Label textAlign={textAlign} text={differentColorText} textSize={textSize} textWeight={[highlightedTextWeight]} textColor={highlightTextColor} style={titleStyle} /><Label textAlign={textAlign} text={endText} textSize={textSize} textWeight={textWeight} textColor={basicTextColor} style={titleStyle} /></Label>
                </View>
            );
        } else {
            return (
                <View style={[defaultTextViewStyle, style]}>
                    <Label textAlign={textAlign} text={startText} textSize={textSize} textWeight={textWeight} textColor={basicTextColor} style={titleStyle} ><Label textAlign={textAlign} text={differentColorText} textSize={textSize} textWeight={[highlightedTextWeight]} textColor={highlightTextColor} style={titleStyle} /><Label textAlign={textAlign} text={endText} textSize={textSize} textWeight={textWeight} textColor={basicTextColor} style={titleStyle} /></Label>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    defaultTextViewStyle: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export { TitleText };
