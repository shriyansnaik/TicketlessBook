import {
  SAVE_EXPLORE_ARRAY_DESIGN,
  SHOW_SAVED_INSPIRATIONS_LIST,
  EXPLORE_POSTS_DATA_FROM_API_CHANGED,
  EXPLORE_LOADER_CHANGED,
} from '../actions/ActionTypes';

var INITIAL_STATE = {
  explore_top_products: [], // For Home screen "Explore Design" section, ADD DEFAULT DATA
  explore_top_categories: [], // ADD DEFAULT DATA
  explore_images: [], // ADD DEFAULT DATA
  top_explore_images: [], // ADD DEFAULT DATA
  saved_designs: [], // ADD DEFAULT DATA
  save_explore_design_array: [],
  show_saved_inspirations_list: [],

  explore_loader: false,
  explore_product_categories_from_api: [],
  explore_posts_from_api: [],
};

export default (state = INITIAL_STATE, action) => {
  // if (action.type == EXPLORE_POSTS_DATA_FROM_API_CHANGED) {
  //   console.log(`product_catgs: ${JSON.stringify(action.payload.products)}`);
  // }
  switch (action.type) {
    case SAVE_EXPLORE_ARRAY_DESIGN:
      return { ...state, save_explore_design_array: action.payload }
    case SHOW_SAVED_INSPIRATIONS_LIST:
      return { ...state, show_saved_inspirations_list: action.payload }
    case EXPLORE_LOADER_CHANGED:
      return { ...state, explore_loader: action.payload }
    case EXPLORE_POSTS_DATA_FROM_API_CHANGED:
      return {
        ...state,
        // temp_exp_data_from_api: action.payload,
        explore_product_categories_from_api: action.payload.products,
        explore_posts_from_api: action.payload.posts,
      }
    default:
      return state;
  }
};
