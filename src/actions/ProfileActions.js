import {
  USERNAME_CHANGED,
  MOBILE_NUM_CHANGED,
  EMAIL_ID_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  CONTACT_USERNAME_CHANGED,
  CONTACT_EMAIL_ID_CHANGED,
  CONTACT_MOBILE_NUM_CHANGED,
  CONTACT_SUBJECT_NAME_CHANGED,
  CONTACT_SUBJECT_KEY_CHANGED,
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
  EXPLORE_FEED_DATA_FROM_API,
  RECOMMENDED_PRODUCTS_DATA_FROM_API,
  TOP_CATEGORIES_ID_FROM_API,
  USER_DETAILS_FROM_SPLASH_API,
  ONLINE_CART_DATA_FROM_API,
  CATEGORIES_DATA_FROM_API,
  SAVE_EXPLORE_ARRAY_DESIGN,
  SET_USER_DETAILS_ON_SPLASH,
  GENERAL_FAQS_DATA_FROM_API,
  HIDE_UNHIDE_LOADER,  /////////////////////////Done by Jeet
} from './ActionTypes';

// import { HOME_SCREEN_DATA_API, GENERAL_FAQS_DATA_API } from '../extras/APIS';

import { CustomAlert } from '../components/common/LoginCommon';
import axios from 'axios';

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text,
  };
};

export const mobilenumChanged = number => {
  return {
    type: MOBILE_NUM_CHANGED,
    payload: number,
  };
};

export const emailIdChanged = emailId => {
  return {
    type: EMAIL_ID_CHANGED,
    payload: emailId,
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password,
  };
};

export const confirmPasswordChanged=confirmPassword=>{
  return{
    type:CONFIRM_PASSWORD_CHANGED,
    payload:confirmPassword
  }
}

export const contactUsernameChanged = contactUsername => {
  return {
    type: CONTACT_USERNAME_CHANGED,
    payload: contactUsername,
  };
};

export const contactEmailIdChanged = contactEmail => {
  return {
    type: CONTACT_EMAIL_ID_CHANGED,
    payload: contactEmail,
  };
};

export const contactMobileNumChanged = contactNumber => {
  return {
    type: CONTACT_MOBILE_NUM_CHANGED,
    payload: contactNumber,
  };
};

export const contactSubjectNameChanged = contactSubjectName => {
  return {
    type: CONTACT_SUBJECT_NAME_CHANGED,
    payload: contactSubjectName,
  };
};

export const contactSubjectKeyChanged = contactSubjectKey => {
  return {
    type: CONTACT_SUBJECT_KEY_CHANGED,
    payload: contactSubjectKey,
  };
};

export const contactMessageChanged = contactMessage => {
  return {
    type: CONTACT_MESSAGE_CHANGED,
    payload: contactMessage,
  };
};

// NewAddressScreen Shipping Address functions

export const newAddressFullNameChanged = newAddressFullName => {
  return {
    type: NEW_ADDRESS_FULL_NAME_CHANGED,
    payload: newAddressFullName,
  }
}

export const newAddressMobileNumChanged = newAddressMobileNum => {
  return {
    type: NEW_ADDRESS_MOBILE_NUM_CHANGED,
    payload: newAddressMobileNum,
  }
}

export const newAddressEmailIdChanged = newAddressEmailId => {
  return {
    type: NEW_ADDRESS_EMAIL_ID_CHANGED,
    payload: newAddressEmailId,
  }
}

export const newShippingAddressLine1Changed = newShippingAddressLine1 => {
  return {
    type: NEW_SHIPPING_ADDRESS_LINE_1_CHANGED,
    payload: newShippingAddressLine1,
  }
}

export const newShippingAddressLine2Changed = newShippingAddressLine2 => {
  return {
    type: NEW_SHIPPING_ADDRESS_LINE_2_CHANGED,
    payload: newShippingAddressLine2,
  }
}

export const newShippingAddressCityChanged = newShippingAddressCity => {
  return {
    type: NEW_SHIPPING_ADDRESS_CITY_CHANGED,
    payload: newShippingAddressCity,
  }
}

export const newShippingAddressPincodeChanged = newShippingAddressPincode => {
  return {
    type: NEW_SHIPPING_ADDRESS_PINCODE_CHANGED,
    payload: newShippingAddressPincode,
  }
}

export const newShippingAddressStateChanged = newShippingAddressState => {
  return {
    type: NEW_SHIPPING_ADDRESS_STATE_CHANGED,
    payload: newShippingAddressState,
  }
}

export const newShippingAddressCountryChanged = newShippingAddressCountry => {
  return {
    type: NEW_SHIPPING_ADDRESS_COUNTRY_CHANGED,
    payload: newShippingAddressCountry,
  }
}

// NewAddressScreen Billing Address functions

export const newBillingAddressLine1Changed = newBillingAddressLine1 => {
  return {
    type: NEW_BILLING_ADDRESS_LINE_1_CHANGED,
    payload: newBillingAddressLine1,
  }
}

export const newBillingAddressLine2Changed = newBillingAddressLine2 => {
  return {
    type: NEW_BILLING_ADDRESS_LINE_2_CHANGED,
    payload: newBillingAddressLine2,
  }
}

export const newBillingAddressCityChanged = newBillingAddressCity => {
  return {
    type: NEW_BILLING_ADDRESS_CITY_CHANGED,
    payload: newBillingAddressCity,
  }
}

export const newBillingAddressPincodeChanged = newBillingAddressPincode => {
  return {
    type: NEW_BILLING_ADDRESS_PINCODE_CHANGED,
    payload: newBillingAddressPincode,
  }
}

export const newBillingAddressStateChanged = newBillingAddressState => {
  return {
    type: NEW_BILLING_ADDRESS_STATE_CHANGED,
    payload: newBillingAddressState,
  }
}

export const newBillingAddressCountryChanged = newBillingAddressCountry => {
  return {
    type: NEW_BILLING_ADDRESS_COUNTRY_CHANGED,
    payload: newBillingAddressCountry,
  }
}

export const hideUnhideSplashLoader = value =>{
  return {
    type: HIDE_UNHIDE_LOADER,
    payload: value,
  }
}

 //Done by Jeet
export const getGeneralFaqsDataAPI = (user_id, user_token,app_version) => {
  return dispatch =>{
    var data = {
      user_id: user_id,
      user_token: user_token,
      app_version: app_version,
    };

    axios({
      method: 'post',
      url: GENERAL_FAQS_DATA_API,
      data,
    })
      .then(response => {
        var responseData = response.data;
        if (responseData.success) {
          dispatch({
            type:GENERAL_FAQS_DATA_FROM_API,
            payload:responseData.result
          })
        } else {
          CustomAlert.show(
            responseData.message,
            require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
            'Ok',
          );
        }
      })
      .catch(err => {
        if (err.response.status !== 514){
          CustomAlert.show(
            err.response.data.message,
            require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
            'Ok',
          );
        }
      });
  }
} //Done by Jeet

export const getHomeScreenDataAPI = (app_version, user_id, user_token, props) => {
  return dispatch => {
    var data = {
      app_version: app_version,
      user_id: user_id,
      user_token: user_token,
      categories_updated_date: '01-01-2022',
      no_of_posts_explore_page_1: 10,
    };

    axios({
      method: 'post',
      url: HOME_SCREEN_DATA_API,
      data: data,
    }).then(response => {
        var responseData = response.data;
        if (responseData.success) {
          console.log('Success');
          hideUnhideSplashLoader(false);
          getHomeScreenDataAPIThen(dispatch, responseData);
        } else {
          CustomAlert.show(
            responseData.message,
            require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
            'Ok',
          );
          // console.log('Unsuccessful, show custom alert', responseData.message);
        }
      })
      .catch(err => {
        if (err.response.status !== 514) {
          hideUnhideSplashLoader(false);
          CustomAlert.show(
            err.response.data.message,
            require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
            'Ok',
          );
        }
      });
  };
};

export const getHomeScreenDataAPIThen = (dispatch, responseData) => {
  console.log('inside profile action in common function');
  if (responseData.result["user_details"] !== undefined) {
    dispatch ({
      type: USER_DETAILS_FROM_SPLASH_API,
      payload: responseData.result['user_details'],
    });
  }

  if (responseData.result["explore_feed"] !== undefined) {
    dispatch ({
      type: EXPLORE_FEED_DATA_FROM_API,
      payload: responseData.result['explore_feed'],
    });
  }

  if (responseData.result["online_cart"] !== undefined) {
    dispatch ({
      type: ONLINE_CART_DATA_FROM_API,
      payload: responseData.result['online_cart'],
    });
  }

  if (responseData.result["categories"] !== undefined) {
    dispatch ({
      type: CATEGORIES_DATA_FROM_API,
      payload: responseData.result['categories'],
    });
  }

  if (responseData.result["recently_saved_items"] !== undefined) {
    dispatch ({
      type: SAVE_EXPLORE_ARRAY_DESIGN,
      payload: responseData.result['recently_saved_items'],
    });
  }

  dispatch({
    type: RECOMMENDED_PRODUCTS_DATA_FROM_API,
    payload: responseData.result["recommended_products"],
  });

  dispatch({
    type: TOP_CATEGORIES_ID_FROM_API,
    payload: responseData.result['top_categories_id'],
  });
};

export const setUserDetails = (auth) =>{
  return {
    type:SET_USER_DETAILS_ON_SPLASH,
    payload:auth,
  }
};
