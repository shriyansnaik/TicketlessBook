import { BODY_SELECTED_FONT_VALUE_CHANGED, CARD_BODY_TEXT_CHANGED, CARD_CONTACT_TEXT_CHANGED, CARD_HEADING_TEXT_CHANGED, CONTACT_SELECTED_FONT_VALUE_CHANGED, GET_DYNAMIC_FONT_FROM_API, HEADING_SELECTED_FONT_VALUE_CHANGED, SELECTED_FONT_VALUE_CHANGED } from './ActionTypes';
import axios from 'axios';
import {loadFonts} from 'react-native-dynamic-fonts';

export const cardHeadingTextChanged = value => {
    if (value === '') {
        value = 'Heading'
    }
    return dispatch => {
        dispatch({
            type: CARD_HEADING_TEXT_CHANGED,
            payload: value,
        });
    };
}

export const cardBodyTextChanged = value => {
    if (value === '') {
        value = 'Body Text'
    }
    return dispatch => {
        dispatch({
            type: CARD_BODY_TEXT_CHANGED,
            payload: value,
        });
    };
}

export const cardContactTextChanged = value => {
    if (value === '') {
        value = 'Contact Here'
    }
    return dispatch => {
        dispatch({
            type: CARD_CONTACT_TEXT_CHANGED,
            payload: value,
        });
    };
}

export const getFontsFromApi = () => {
    return dispatch => {
        axios.get("http://192.168.1.22:80/Projects/flexi-apis/GetFont/getFont.php")
        .then(response => {
            loadFonts(response.data).then(function(name) {
                dispatch({
                    type: GET_DYNAMIC_FONT_FROM_API,
                    payload: name,
                });
            });
        })
        .catch(error => {
            console.log(error);
        });
    };
}

export const selectedFontValueChanged = (value, number) => {
    var type = '';
    if (number === 1) {
        type = HEADING_SELECTED_FONT_VALUE_CHANGED;
    } else if (number === 2) {
        type = BODY_SELECTED_FONT_VALUE_CHANGED;
    } else if (number === 3) {
        type = CONTACT_SELECTED_FONT_VALUE_CHANGED;
    }
    return dispatch => {
        dispatch({
            type: type,
            payload: value,
        });
    };
}
