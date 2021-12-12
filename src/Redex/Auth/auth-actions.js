import { toast } from 'react-toastify';
import * as authTypes from "./auth-types";
import { history } from '../../Routes/history';
import {
    doctorLogin,
    doctorSignup
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

export const authSignup = (data) => {
    return (dispatch) => {
        function onSuccess() {
            dispatch({
                type: authTypes.SIGNUP_SUCESS
            });
            history.push("/");
        };
        function onError(error) {
            dispatch({
                type: authTypes.SIGNUP_ERROR,
                payload: {
                    error
                }
            });
        }
        try {
            doctorSignup(data).then(response => {
                toast(response.message);
                onSuccess();
            }).catch(error => {
                return onError(error.response.data.error);
            });
        } catch(error) {
            return onError(error);
        }
    }
};

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