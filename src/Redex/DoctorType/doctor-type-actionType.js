import * as actionType from './doctor-type-actions';

const INITIAL_STATE = {
    doctorTypeData: []
};

const doctorTypeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_DOCTOR_TYPE:
            return {...state, doctorTypeData: action.payload};
        default:
            return state;
    }
};

export default doctorTypeReducer;