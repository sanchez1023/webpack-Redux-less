
import {
    OPEN_TOGGLE_REDIRECT_DAILOG,
    CLOSE_TOGGLE_REDIRECT_DAILOG
} from "../constants/actionTypes";

const DailogRedirect = {
    open: false,
}
export default (state = { DailogRedirect }, action) => {



    if (action.type === OPEN_TOGGLE_REDIRECT_DAILOG) {
        return {
            ...state,

            state: {
                DailogRedirect: {
                    open: true
                }
            }

        }
    }

    if (action.type === CLOSE_TOGGLE_REDIRECT_DAILOG) {
        return {
            state: {
                DailogRedirect: {
                    open: false
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