// All sorts of product and category listings will happen here, Homescreen, search screen, etc
import {
  UPDATE_PRODUCT_LIST,
  FILTERED_PRODUCT_LIST,
  SEARCH_FILTER,
  SAVE_TEMPLATE_ARRAY_DESIGN,
  EXPLORE_FEED_DATA_FROM_API,
  TOP_CATEGORIES_ID_FROM_API,
  RECOMMENDED_PRODUCTS_DATA_FROM_API,
  CATEGORIES_DATA_FROM_API,
  CUSTOM_SHEET_API,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
  app_version: '1.0',
  category_product_search: '',
  category_product_search_result: [],
  cost_sheet: [],
  category_product_list: [], // ADD DEFAULT DATA, the products data in this will contain all the product details upto product customization level as well
  search_result_category_filters: [],
  filtered_category_product_list: [],
  search_result_category_suggestions: [],
  categories: [], //ADD DEFAULT DATA
  top_categories: [],
  recommended_products: [], // For Home screen "Recommended for you" section, ADD DEFAULT DATA
  product_specific_recommendations: [], //ADD DEFAULT DATA, this is the "Recommended for you" list on the Product details page
  save_template_design_array: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_LIST:
      return {
        ...state,
        category_product_list: action.payload,
      };
    case FILTERED_PRODUCT_LIST:
      return {
        ...state,
        filtered_category_product_list: action.payload,
      };
    case SAVE_TEMPLATE_ARRAY_DESIGN:
      return {
        ...state,
        save_template_design_array: action.payload,
      };
    case EXPLORE_FEED_DATA_FROM_API:
      return {...state, explore_feed: action.payload};
    case RECOMMENDED_PRODUCTS_DATA_FROM_API:
      return {...state, recommended_products: action.payload};
    case TOP_CATEGORIES_ID_FROM_API:
      return {...state, top_categories: action.payload};
    case CATEGORIES_DATA_FROM_API:
      return {...state, categories: action.payload};
    case CUSTOM_SHEET_API:
      return {...state, cost_sheet: action.payload}
    default:
      return state;
  }
};
