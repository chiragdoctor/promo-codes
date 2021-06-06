import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import serviceReducer from './service/service.reducer';

const rootReducer = combineReducers({
  users: userReducer,
  services: serviceReducer,
});

export default rootReducer;
