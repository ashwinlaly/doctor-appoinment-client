import { toast } from 'react-toastify';
import * as actionTypes from './auth-types';

const INITIAL_STATE = {
    error: [],
    loading: false,
    token: loadFromLocalStorage('token') || null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case actionTypes.SIGNUP_SUCESS:
            return {
                ...state,
                error: []
            };
        case actionTypes.SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                error: [],
                token: null
            };
        case actionTypes.LOGIN:
            if(action.payload && action.payload.data) {
                toast(action.payload.data.message);
                localStorage.setItem("token", action.payload.data.data);
            }
            return {
                ...state,
                error: [],
                loading: true,
                token: action.payload.data
            };
        default:
            return state;
    }
}

function loadFromLocalStorage(cookieName) {
    try {
        const serializedState = localStorage.getItem(cookieName);
        if(typeof serializedState === "undefined") return undefined;
        return serializedState;
    } catch(error) {
        return undefined;
    }
}

export default authReducer;