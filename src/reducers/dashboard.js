import {
    OPEN_ADDREDIECT_DAILOG,
    CLOSE_ADDREDIRECT_DAILOG,
    GETCARD_RESPONSE,
    TOGGLE_DASHBOARD_ARTICLE,
    TOGGLE_DASHBOARD_ARTICLE_SELECTED,
    TOGGLE_DASHBOARD_STORY_SELECTED,
    GETCARD_ASYNC,
    EDIT_REDIRECT,
    LINK_COPIED,
    LINK_COPIED_OFF,
    EDIT_TOOGLE,
    RETRIVE_CARD_RESPONSE,
    RETRIVE_CARD_ASYNC,
    UPDATEREDIRECT_RESPONSE,
    CLOSE_LOADING
} from "../constants/actionTypes";


export default (state = {
    openDailog: false,
    article: true,
    cards: null,
    loading: false,
    note: [],
    fromEdit: false,
    linkCopied: false,
    retrive: false,
    udpateRespone: []
}, action) => {

    switch (action.type) {

        case OPEN_ADDREDIECT_DAILOG:
            return {
                ...state,
                openDailog: true,


            };
        case CLOSE_ADDREDIRECT_DAILOG:
            return {
                ...state,
                openDailog: false,
                fromEdit: false,
                note: [],

            }
        case TOGGLE_DASHBOARD_ARTICLE_SELECTED:
            return {
                ...state,
                article: true
            };
        case TOGGLE_DASHBOARD_STORY_SELECTED:
            return {
                ...state,
                article: false
            }
        case GETCARD_RESPONSE:
            return {
                ...state,
                cards: action.payload,

            }
        case GETCARD_ASYNC:
            return {
                ...state,
                loading: true,
            }
        case EDIT_REDIRECT:
            return {
                ...state,
                openDailog: true,
                fromEdit: true,
                note: action.payload
            }
        case LINK_COPIED:
            return {
                ...state,
                linkCopied: true
            }
        case LINK_COPIED_OFF:
            return {
                ...state,
                linkCopied: false
            }
        case RETRIVE_CARD_RESPONSE:
            return {
                ...state,
                cards: action.payload,
                retrive: true



            }
        case RETRIVE_CARD_ASYNC:
            return {
                ...state,

            }
        case UPDATEREDIRECT_RESPONSE:
            return {
                ...state,
                updateResponse: action.payload
            }
        case CLOSE_LOADING:
            return {
                ...state,
                loading: false,

            }

        default:
            return state

    }
}