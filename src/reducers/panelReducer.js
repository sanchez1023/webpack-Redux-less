
import {
    OPEN_TOGGLE_REDIRECT_DAILOG,
    CLOSE_TOGGLE_REDIRECT_DAILOG,
    CLOSE_SHARE_DAILOG,
    OPEN_SHARE_DAILOG,
    OPEN_EXTEND_PANEL,
    CLOSE_EXTEND_PANEL,
    EDIT_TOOGLE,
    EDIT_REDIRECT_DIALOG,
    ON_UPDATE_NOTE
} from "../constants/actionTypes";


export default (state = {
    openRedirectdialog: false,
    extend: false,
    openSharedialog: false,
    extend: false,
    note: []
}, action) => {


    switch (action.type) {
        case OPEN_TOGGLE_REDIRECT_DAILOG:
            return {
                ...state,
                openRedirectdialog: true,
                note: action.payload
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
                note: action.payload
            }
        case CLOSE_SHARE_DAILOG:
            return {
                ...state,
                openSharedialog: false
            }
        case OPEN_EXTEND_PANEL:
            return {
                ...state,
                note: action.payload,


            };
        case CLOSE_EXTEND_PANEL:
            return {
                ...state,
                note: action.payload,
                isOpen: false




            }
        case EDIT_REDIRECT_DIALOG:
            return {
                ...state,
                note: action.payload
            }
        case EDIT_TOOGLE:
            return {
                ...state,
                note: action.payload

            }
        case ON_UPDATE_NOTE:
            return {
                ...state,
                note: action.payload
            }





        default:
            return state


    }




}