import {
  USERNAME_CHANGED,
  MOBILE_NUM_CHANGED,
  EMAIL_ID_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  CONTACT_USERNAME_CHANGED,
  CONTACT_EMAIL_ID_CHANGED,
  CONTACT_MOBILE_NUM_CHANGED,
  CONTACT_SUBJECT_KEY_CHANGED,
  CONTACT_SUBJECT_NAME_CHANGED,
  CONTACT_MESSAGE_CHANGED,
  NEW_ADDRESS_FULL_NAME_CHANGED,
  NEW_ADDRESS_MOBILE_NUM_CHANGED,
  NEW_ADDRESS_EMAIL_ID_CHANGED,
  NEW_SHIPPING_ADDRESS_LINE_1_CHANGED,
  NEW_SHIPPING_ADDRESS_LINE_2_CHANGED,
  NEW_SHIPPING_ADDRESS_CITY_CHANGED,
  NEW_SHIPPING_ADDRESS_PINCODE_CHANGED,
  NEW_SHIPPING_ADDRESS_STATE_CHANGED,
  NEW_SHIPPING_ADDRESS_COUNTRY_CHANGED,
  NEW_BILLING_ADDRESS_LINE_1_CHANGED,
  NEW_BILLING_ADDRESS_LINE_2_CHANGED,
  NEW_BILLING_ADDRESS_CITY_CHANGED,
  NEW_BILLING_ADDRESS_PINCODE_CHANGED,
  NEW_BILLING_ADDRESS_STATE_CHANGED,
  NEW_BILLING_ADDRESS_COUNTRY_CHANGED,
  LOGIN_DATA_FROM_API,
  REGISTER_DATA_FROM_API,
  SET_USER_DETAILS_ON_SPLASH,
  GENERAL_FAQS_DATA_FROM_API,
  HIDE_UNHIDE_LOADER,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
  // Login Register related data
  username: '',
  mobile_no: '',
  email_id: '',
  password: '',
  confirm_password: '',
  login_register_type: '', //fb, google, email, mobile no.
  user_id: 0, // Shows if you are logged in or not
  device_id: '',
  user_token: '',
  user_saved_addresses: [], // ADD DEFAULT DATA, main storage would be in async storage
  user_saved_card: [], // ADD DEFAULT DATA, main storage would be in async storage

  // Contact us form data
  contact_username: '',
  contact_email_id: '',
  contact_mobile_no: '',
  contact_subject_name: 'Subject',
  contact_subject_key: '',
  contact_message: '',

  // FAQ section
  faq_list: [], // ADD DEFAULT DATA

  // Add New Address form data
  new_address_full_name: '',
  new_address_mobile_no: '',
  new_address_email_id: '',

  new_shipping_address_line_1: '',
  new_shipping_address_line_2: '',
  new_shipping_address_city: '',
  new_shipping_address_pincode: '',
  new_shipping_address_state: '',
  new_shipping_address_country: '',

  new_billing_address_line_1: '',
  new_billing_address_line_2: '',
  new_billing_address_city: '',
  new_billing_address_pincode: '',
  new_billing_address_state: '',
  new_billing_address_country: '',

  showLoader: true,

  // On Boarding Data
  onboard_screens: {}, //ADD DEFAULT DATA
};

export default (state = INITIAL_STATE, action) => {
  // console.log('payload', action.payload);
  switch (action.type) {
    case USERNAME_CHANGED:
      return {...state, username: action.payload};
    case MOBILE_NUM_CHANGED:
      return {...state, mobile_no: action.payload};
    case EMAIL_ID_CHANGED:
      return {...state, email_id: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case CONFIRM_PASSWORD_CHANGED:
      return {...state, confirm_password: action.payload};
    case CONTACT_USERNAME_CHANGED:
      return {...state, contact_username: action.payload};
    case CONTACT_EMAIL_ID_CHANGED:
      return {...state, contact_email_id: action.payload};
    case CONTACT_MOBILE_NUM_CHANGED:
      return {...state, contact_mobile_no: action.payload};
    case CONTACT_SUBJECT_NAME_CHANGED:
      return {...state, contact_subject_name: action.payload};
    case CONTACT_SUBJECT_KEY_CHANGED:
      return {...state, contact_subject_key: action.payload};
    case CONTACT_MESSAGE_CHANGED:
      return {...state, contact_message: action.payload};
    case NEW_ADDRESS_FULL_NAME_CHANGED:
      return {...state, new_address_full_name: action.payload};
    case NEW_ADDRESS_EMAIL_ID_CHANGED:
      return {...state, new_address_email_id: action.payload};
    case NEW_ADDRESS_MOBILE_NUM_CHANGED:
      return {...state, new_address_mobile_no: action.payload};
    case NEW_SHIPPING_ADDRESS_LINE_1_CHANGED:
      return {...state, new_shipping_address_line_1: action.payload};
    case NEW_SHIPPING_ADDRESS_LINE_2_CHANGED:
      return {...state, new_shipping_address_line_2: action.payload};
    case NEW_SHIPPING_ADDRESS_CITY_CHANGED:
      return {...state, new_shipping_address_city: action.payload};
    case NEW_SHIPPING_ADDRESS_PINCODE_CHANGED:
      return {...state, new_shipping_address_pincode: action.payload};
    case NEW_SHIPPING_ADDRESS_STATE_CHANGED:
      return {...state, new_shipping_address_state: action.payload};
    case NEW_SHIPPING_ADDRESS_COUNTRY_CHANGED:
      return {...state, new_shipping_address_country: action.payload};
    case NEW_BILLING_ADDRESS_LINE_1_CHANGED:
      return {...state, new_billing_address_line_1: action.payload};
    case NEW_BILLING_ADDRESS_LINE_2_CHANGED:
      return {...state, new_billing_address_line_2: action.payload};
    case NEW_BILLING_ADDRESS_CITY_CHANGED:
      return {...state, new_billing_address_city: action.payload};
    case NEW_BILLING_ADDRESS_PINCODE_CHANGED:
      return {...state, new_billing_address_pincode: action.payload};
    case NEW_BILLING_ADDRESS_STATE_CHANGED:
      return {...state, new_billing_address_state: action.payload};
    case NEW_BILLING_ADDRESS_COUNTRY_CHANGED:
      return {...state, new_billing_address_country: action.payload};
    case LOGIN_DATA_FROM_API:
      return {
        ...state,
        user_id: action.payload.user_id,
        user_token: action.payload.user_token,
        username: action.payload.user_name,
      };
    case REGISTER_DATA_FROM_API:
      return {
        ...state,
        user_id: action.payload.user_id,
        user_token: action.payload.user_token,
        username: action.payload.result.user_name,
        mobile_no: action.payload.result.user_phone_number,
        email_id: action.payload.result.user_email_id,
      };
    case SET_USER_DETAILS_ON_SPLASH:
      return {
        ...state,
        user_id: action.payload.user_id,
        user_token: action.payload.user_token,
        username:action.payload.user_name
      };
      case GENERAL_FAQS_DATA_FROM_API:           //////////////////////Done by Jeet
        return {
          ...state,
          faq_list: action.payload
        }
      case HIDE_UNHIDE_LOADER:
        console.log(action.payload);
        return{
          ...state,
          showLoader: action.payload
        }
    default:
      return state;
  }
};
