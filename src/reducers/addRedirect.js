import {

    INPUT_DESCRIPTION, APPLY_REDIRECT_ON, APPLY_REDIRECT_OFF, STORY_SELECTED, ARTICLE_SELECTED, OPEN_IMAGE_SELECT, CLOSE_IMAGE_SELECT
} from '../constants/actionTypes';


const cardData = {
    description: "",
    applyRedirect: false,
    article: false,
    imageSelectdialog: false

}
export default (state = {
    description: "",
    applyRedirect: false,
    article: false,
    imageSelectdialog: false


}, action) => {
    switch (action.type) {

        case INPUT_DESCRIPTION:
            return {
                ...state,

                description: action.value

            };
        case APPLY_REDIRECT_ON:
            return {
                ...state,


                applyRedirect: true

            }

        case APPLY_REDIRECT_OFF:
            return {
                ...state,


                applyRedirect: false

            }


        case ARTICLE_SELECTED:
            return {
                ...state,

                article: true


            }
        case STORY_SELECTED:
            return {
                ...state,

                article: false

            }
        case OPEN_IMAGE_SELECT:
            return {
                ...state,
                imageSelectdialog: true
            }
        case CLOSE_IMAGE_SELECT:
            return {
                ...state,
                imageSelectdialog: false
            }


        default:
            return state;
    }
}