import { combineReducers } from 'redux';
import user from './user';
import products from './product';

export default combineReducers({
    user,
    products
});