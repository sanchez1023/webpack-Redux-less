import {

    INPUT_DESCRIPTION, APPLY_REDIRECT_ON, APPLY_REDIRECT_OFF, STORY_SELECTED, ADDREDIRECT_RESPONSE, ARTICLE_SELECTED, OPEN_IMAGE_SELECT, CLOSE_IMAGE_SELECT, UPDATEREDIRECT_ASYNC, EDIT_REDIRECT, REDIRECT_ON, REDIRECT_OFF, SUBMIT_IMAGE, ADDREDIRECT_ASYNC, CHANGE_IMAGE, OPEN_EDIT_IMAGE
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
    imageSelectdialog: false,
    note: [],
    edit: false,
    editRedirect: false,
    image: ""



}, action) => {
    switch (action.type) {

        case INPUT_DESCRIPTION:
            return {
                ...state,

                description: action.value,
                edit: true

            };
        case APPLY_REDIRECT_ON:
            return {
                ...state,


                applyRedirect: true,
                editRedirect: true,

            }

        case APPLY_REDIRECT_OFF:
            return {
                ...state,


                applyRedirect: false,
                editRedirect: true,

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
        case UPDATEREDIRECT_ASYNC:
            return {
                ...state,
                edit: false,
                description: "",
                note: []

            }
        case ADDREDIRECT_ASYNC: {
            return {
                ...state,
                edit: false,
                description: ""
            }
        }
        case REDIRECT_OFF:
            return {
                ...state,
                note: action.payload
            }
        case REDIRECT_ON:
            return {
                ...state,
                note: action.payload
            }
        case SUBMIT_IMAGE:
            return {
                ...state,
                image: action.payload,
                imageSelectdialog: false
            }
        case OPEN_EDIT_IMAGE:
            return {
                ...state,
                imageSelectdialog: true,
                note: action.payload
            }
        case CHANGE_IMAGE:
            return {
                ...state,
                note: action.payload,
                imageSelectdialog: false
            }
        default:
            return state;
    }
}  