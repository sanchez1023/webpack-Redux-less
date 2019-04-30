import { OPEN_ADDREDIECT_DAILOG, CLOSE_ADDREDIRECT_DAILOG, TOGGLE_DASHBOARD_ARTICLE, TOGGLE_DASHBOARD_ARTICLE_SELECTED, TOGGLE_DASHBOARD_STORY_SELECTED } from "../constants/actionTypes";


export default (state = {
    openDailog: false,
    article: false,
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
        default:
            return state
    }
}