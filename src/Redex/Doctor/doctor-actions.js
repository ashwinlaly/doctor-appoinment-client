import * as doctorTypes from './doctor-types';
import {
    getDoctorsSlot,
    createAppoinmentByDate,
    updateAppoinmentStatus,
    getDoctorsAppoinmentByDate,
} from "../../Services/doctorService";

export const createAppoinment = (data) => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: doctorTypes.CREATE_DOCTOR_SLOT,
                payload: data
            });
        };

        function onError(error) {
            dispatch({
                type: doctorTypes.CREATE_DOCTOR_SLOT_ERROR,
                payload: error
            });
        };

        try {
            createAppoinmentByDate(data).then(data => {
                onSuccess(data);
            }).catch(error => {
                onError(error.response.data.error);
            });
        } catch(error) {
            onError(error);
        }
    }
};

export const getAppoinmentByDate = (date) => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: doctorTypes.GET_DOCTOR_APPOINMENTS,
                payload: {
                    data
                }
            });
        };

        try {
            getDoctorsAppoinmentByDate(date).then(data => {
                return onSuccess(data);
            }).catch(error => {
                return onSuccess(null);
            });
        } catch(error) {
            return onSuccess(null);
        }
    }
}

export const updateAppoinmentByID = (data) => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: doctorTypes.UPDATE_DOCTOR_APPOINMENTS,
                payload: {
                    data: data._id
                }
            });
        };

        function onError(error) {}
        try {
            updateAppoinmentStatus(data).then(response => {
                onSuccess(data);
            }).catch(error => {
                onError(error);
            });
        } catch(error) {}
    }
}

export const getDoctorSlot = () => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: doctorTypes.GET_DOCTOR_SLOT,
                payload: data
            });
        }
        function onError() {}
        getDoctorsSlot().then(response => {
            return onSuccess(response.data);
        }).catch(error => {
            return onError(error);
        });
    }
};