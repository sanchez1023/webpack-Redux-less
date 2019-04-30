
import {
    OPEN_TOGGLE_REDIRECT_DAILOG,
    CLOSE_TOGGLE_REDIRECT_DAILOG,
    CLOSE_SHARE_DAILOG,
    OPEN_SHARE_DAILOG,
    OPEN_EXTEND_PANEL,
    CLOSE_EXTEND_PANEL
} from "../constants/actionTypes";


export default (state = {
    openRedirectdialog: false,
    extend: false,
    openSharedialog: false,
    extend: false,
}, action) => {


    switch (action.type) {
        case OPEN_TOGGLE_REDIRECT_DAILOG:
            return {
                ...state,
                openRedirectdialog: true,
            }





        case CLOSE_TOGGLE_REDIRECT_DAILOG:
            return {
                ...state,
                openRedirectdialog: false
            };

        case OPEN_SHARE_DAILOG:
            return {
                ...state,
                openSharedialog: true,
            }
        case CLOSE_SHARE_DAILOG:
            return {
                ...state,
                openSharedialog: false
            }
        case OPEN_EXTEND_PANEL:
            return {
                ...state,
                extend: true,

            };
        case CLOSE_EXTEND_PANEL:
            return {
                ...state,
                extend: false,

            }




        default:
            return state


    }




}