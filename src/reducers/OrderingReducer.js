// Everything from order placement to payment to cart screen, every thing would fall under this reducer
import {
  ENTER_CVV_CHANGED,
  ENTER_YOUR_NAME_CHANGED,
  ENTER_CARD_NUMBER_CHANGED,
  ENTER_DATE_OF_EXPIRATION_CHANGED,
  ONLINE_CART_DATA_FROM_API,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
  current_orders: [], //ADD DEFAULT DATA, will hold data of the order summaries too
  previous_orders: [], //ADD DEFAULT DATA
  // Cart data
  cart_items: [],
  items_subtotal: 0,
  gst: 0,
  shipping: 0,
  additional_discounts: 0,
  grand_total: 0,
  cart_product_recommendations: [],
  your_name: '',
  card_no: '',
  date_of_expiration: '',
  cvv: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTER_CVV_CHANGED:
      return {...state, cvv: action.payload};
    case ENTER_YOUR_NAME_CHANGED:
      return {...state, your_name: action.payload};
    case ENTER_CARD_NUMBER_CHANGED:
      return {...state, card_no: action.payload};
    case ENTER_DATE_OF_EXPIRATION_CHANGED:
      return {...state, date_of_expiration: action.payload};
    case ONLINE_CART_DATA_FROM_API:
      return{...state, cart_items: action.payload};
    default:
      return state;
  }
};
