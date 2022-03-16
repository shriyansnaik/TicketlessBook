import { 
  CARD_BODY_TEXT_CHANGED, 
  CARD_CONTACT_TEXT_CHANGED, 
  CARD_HEADING_TEXT_CHANGED, 
  GET_DYNAMIC_FONT_FROM_API, 
  HEADING_SELECTED_FONT_VALUE_CHANGED,
  BODY_SELECTED_FONT_VALUE_CHANGED,
  CONTACT_SELECTED_FONT_VALUE_CHANGED,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
  heading: 'Heading',
  bodyText: 'Body Here',
  contact: 'Contact here',
  image: '',
  fonts: [],
  headingSelectedFont: 'Satoshi',
  bodySelectedFont: 'Satoshi',
  contactSelectedFont: 'Satoshi',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_HEADING_TEXT_CHANGED:
      return{...state, heading: action.payload};
    case CARD_BODY_TEXT_CHANGED:
      return{...state, bodyText: action.payload};
    case CARD_CONTACT_TEXT_CHANGED:
      return{...state, contact: action.payload};
    case GET_DYNAMIC_FONT_FROM_API:
      return{...state, fonts: action.payload};
    case HEADING_SELECTED_FONT_VALUE_CHANGED: 
      return {...state, headingSelectedFont: action.payload};
    case BODY_SELECTED_FONT_VALUE_CHANGED: 
      return {...state, bodySelectedFont: action.payload};
    case CONTACT_SELECTED_FONT_VALUE_CHANGED: 
      return {...state, contactSelectedFont: action.payload};
    default:
      return state;
  }
};
