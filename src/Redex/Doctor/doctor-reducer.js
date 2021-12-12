import moment from 'moment';
import { toast } from 'react-toastify';
import * as doctorTypes from './doctor-types';

const INITIAL_STATE = {
    slots: [],
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
        case doctorTypes.GET_DOCTOR_SLOT:
            let data = action.payload?.map(element => {
                let formatedData = {
                    date: moment(element.date).format('MM/DD/YYYY'),
                    morning_starttime: moment.unix(element.morning_starttime).format("H:mm"),
                    morning_endtime: moment.unix(element.morning_endtime).format("H:mm"),
                    evening_starttime: moment.unix(element.evening_starttime).format("H:mm"),
                    evening_endtime: moment.unix(element.evening_endtime).format("H:mm")
                };
                var temp = Object.assign({}, formatedData);
                return temp;
            });
            return {
                ...state,
                slots: data
            };
        default:
            return {...state};
    }
}

export default doctorReducer;