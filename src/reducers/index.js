import {combineReducers} from 'redux';
import EditorReducer from './EditorReducer';
import ExploreReducer from './ExploreReducer';
import OrderingReducer from './OrderingReducer';
import ProductListReducer from './ProductListReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  products: ProductListReducer,
  orders: OrderingReducer,
  editor: EditorReducer,
  explore: ExploreReducer,
  profile: ProfileReducer,
});
