import {

    INPUT_EMAIL, INPUT_PASSWORD, LOGIN_USER, DATABASE_ERROR, LOGIN_SUCCESS
} from '../constants/actionTypes';

const userCredential = {
    error: "",

}
export default (state = { userCredential }, action) => {
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
                ...state, userCredential: {
                    error: action.value
                }


            }

        }
        case LOGIN_SUCCESS: {
            return {
                ...state, [action.key]: action.value
            }
        }
        default:
            return state;
    }


};
