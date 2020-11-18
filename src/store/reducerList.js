// Imports: Dependencies
import { combineReducers } from 'redux';// Imports: Reducers
import userReducer from '../User/store/reducer';
// import counterReducer from './counterReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  userReducer,
});// Exports
export default rootReducer;
