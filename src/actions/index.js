import { TOGGLE_REDIRECT } from '../constants/actionTypes';
export const changeToggle = () => {
    return dispatch => {
        dispatch(toggleChanged());
    }
}
const toggleChanged = () => ({
    type: TOGGLE_REDIRECT
});