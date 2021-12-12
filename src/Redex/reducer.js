import { combineReducers } from 'redux';
import authReducer from './Auth/auth-reducer';
import doctorReducer from './Doctor/doctor-reducer';
import doctorTypeReducer from './DoctorType/doctorType-reducer';

const reducer = combineReducers({
    authData: authReducer,
    doctorData: doctorReducer,
    doctorTypeData: doctorTypeReducer
});

export default reducer;