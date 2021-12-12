import * as actionType from './doctorType-types';

const INITIAL_STATE = {
    doctorTypes: []
};

const doctorTypeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_DOCTOR_TYPE:
            return {...state, doctorTypes: action.payload};
        default:
            return state;
    }
};

export default doctorTypeReducer;