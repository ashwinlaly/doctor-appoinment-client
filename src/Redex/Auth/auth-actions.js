import * as authTypes from "./auth-types";
import {
    doctorLogin
} from "../../Services/doctorService";

export const authLogin = (values) => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: authTypes.LOGIN,
                payload: {
                    data
                }
            });
        };

        function onError(error) {
            dispatch({
                type: authTypes.SIGNIN_ERROR,
                payload: {
                    error
                }
            });
        };

        try {
            if(values.email && values.password) {
                doctorLogin(values).then(data => {
                    return onSuccess(data);
                }).catch(error => {
                    return onError(error.response.data.error);
                });
            }
        } catch(error) {
            return onError(error);
        }
    }
}

export const authLogout = () => {
  return (dispatch) => {
    function onSuccess() {
      dispatch({
        type: authTypes.LOGOUT,
      });
    }
    return onSuccess();
  };
};