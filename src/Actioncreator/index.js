import { UPDATE_REDIRECT, CLOSE_TOGGLE_REDIRECT_DAILOG, EDIT_TOOGLE } from "../constants/actionTypes";
import store from '../store'

export function toggleOn(note) {
    console.log("note in selected note--" + JSON.stringify(note));

    note["apply_redirect"] = true
    console.log("note in selected note- 2222-" + JSON.stringify(note));
    var data = {
        is_published: true,
        _id: note._id,
        title: note.title,
        description: note.description,
        redirect_link: note.redirect_link,
        youtube_url: note.youtube_url,
        image: note.image,
    }
    console.log("in data jsoan-----") + JSON.stringify(data)


    store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
    store.dispatch({ type: UPDATE_REDIRECT, payload: data })

}
export function toggleOff(note) {
    console.log("note in selected note--" + JSON.stringify(note));

    note["apply_redirect"] = false
    console.log("note in selected note- 2222-" + JSON.stringify(note));
    var data = {
        is_published: true,
        _id: note._id,
        title: note.title,
        description: note.description,
        redirect_link: note.redirect_link,
        youtube_url: note.youtube_url,
        image: note.image,
    }

    store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
    store.dispatch({ type: UPDATE_REDIRECT, payload: data })

}

export function updateRedirect(note) {
    console.log("in update rediretc---" + JSON.stringify(note))
    return {
        type: UPDATE_REDIRECT,
        payload: note

    }
}
export function editToggle(note) {
    console.log("noote in edit toogle" + JSON.stringify(note))
    console.log("note in apply redirect bedree--" + note.apply_redirect)
    note["apply_redirect"] = false
    return {
        type: EDIT_TOOGLE, payload: note
    }

}
export function retriveCard(note) {
    return {
        type: RETRIVE_CARD, payload: note
    }
}