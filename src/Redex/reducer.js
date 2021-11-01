import { combineReducers } from 'redux';
import authReducer from './Auth/auth-reducer';
import doctorReducer from './Doctor/doctor-reducer';

const reducer = combineReducers({
    authData: authReducer,
    doctorData: doctorReducer
});

export default reducer;