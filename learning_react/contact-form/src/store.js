import {createStore} from 'redux';
import rooREducer from "../reducers/index";

const store = createStore(rootReducer);
export default store;