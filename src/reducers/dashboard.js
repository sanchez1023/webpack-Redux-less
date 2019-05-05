import { OPEN_ADDREDIECT_DAILOG, CLOSE_ADDREDIRECT_DAILOG, GETCARD_RESPONSE,TOGGLE_DASHBOARD_ARTICLE, TOGGLE_DASHBOARD_ARTICLE_SELECTED, TOGGLE_DASHBOARD_STORY_SELECTED, GETCARD_ASYNC } from "../constants/actionTypes";


export default (state = {
    openDailog: false,
    article: false,
    cards:[],loading:false
}, action) => {

    switch (action.type) {

        case OPEN_ADDREDIECT_DAILOG:
            return {
                ...state,
                openDailog: true,
                note: action
            };
        case CLOSE_ADDREDIRECT_DAILOG:
            return {
                ...state,
                openDailog: false,
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
            return{
                ...state,
                cards: action.payload,
                loading:false,
            }
            case GETCARD_ASYNC:
            return {
               ...state,
               loading:true,
            }
        default:
            return state
    }
}