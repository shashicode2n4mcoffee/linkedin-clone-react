import { combineReducers } from 'redux';

import profileReducer from './Profile';

const rootReducer = combineReducers({
  Profile: profileReducer,
});

export default rootReducer;
