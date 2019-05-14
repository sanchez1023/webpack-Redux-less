import {

    INPUT_EMAIL, INPUT_PASSWORD, LOGIN_USER, DATABASE_ERROR, LOGIN_SUCCESS, LOGIN_ASYNC, LOGIN_RESPONSE, CLOSE_TOAST
} from '../constants/actionTypes';

const userCredential = {
    error: "",

}
export default (state = { isLoading: false, success: [], error: [], errorToast: false }, action) => {
    switch (action.type) {

        case INPUT_EMAIL:
            return {
                ...state, [action.key]: action.value,
            };

        case INPUT_PASSWORD:
            return { ...state, [action.key]: action.value };

        case LOGIN_USER:
        case DATABASE_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                errorToast: true




            }

        }
        case LOGIN_RESPONSE: {

            return {
                ...state, success: action.payload,
                isLoading: false
            }

        }
        case LOGIN_ASYNC:
            return {
                ...state,
                isLoading: true,

            }
        case CLOSE_TOAST:
            return {
                ...state,
                errorToast: false
            }
        default:
            return state;
    }


};
