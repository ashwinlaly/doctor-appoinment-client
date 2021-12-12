import * as types from './doctorType-types';
import {
    getAllDoctorCategory
} from '../../Services/doctorTypesService';

export const getAllDocTypeCategory = (data) => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: types.GET_DOCTOR_TYPE,
                payload: data
            });
        }

        function onError(error) {}

        try {
            getAllDoctorCategory().then(data => {
                onSuccess(data.data);
            }).catch((error) => {
                onError(error);    
            });
        } catch(error) {
            onError(error);
        }
    }
};