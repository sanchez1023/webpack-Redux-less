import {

    INPUT_DESCRIPTION, APPLY_REDIRECT, ARTICLE_OR_STORY
} from '../constants/actionTypes';

const userCredential = {
    error: "",

}
export default (state = {
    applyRedirect: false,
    article: false,
}, action) => {
    switch (action.type) {

        case INPUT_DESCRIPTION:
            return {
                ...state, [action.key]: action.value,
            };
        case APPLY_REDIRECT:
            return {
                state: {
                    applyRedirect: true
                }
            }
        case ARTICLE_OR_STORY:
            return {
                state: {
                    article: true,
                }
            }


        default:
            return state;
    }
}