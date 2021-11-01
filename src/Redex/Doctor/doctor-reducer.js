import { toast } from 'react-toastify';
import * as doctorTypes from './doctor-types';

const INITIAL_STATE = {
    error: [],
    sucess: false,
    loading: false,
    appoinments: [],
};

const doctorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case doctorTypes.CREATE_DOCTOR_SLOT:
            toast(action.payload.message);
            return {
                ...state,
                error: [],
            };
        case doctorTypes.GET_DOCTOR_APPOINMENTS:
            return {
                ...state,
                error: [],
                appoinments: action.payload.data
            };
        case doctorTypes.CREATE_DOCTOR_SLOT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return {...state};
    }
}

export default doctorReducer;