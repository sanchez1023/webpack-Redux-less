
import { TOGGLE_REDIRECT, CHANGE_TOGGLE } from "../constants/actionTypes";

const Toggle = {
    age: false,
}
export default (state = { Toggle }, action) => {



    if (action.type === TOGGLE_REDIRECT) {
        return {


            state: {
                Toggle: {
                    age: true,
                }
            }

        }
    }

    if (action.type === CHANGE_TOGGLE) {
        return {
            state: {
                Toggle: {
                    age: false,
                }
            }
        }
    }
    else {
        return {
            state
        }
    }




}