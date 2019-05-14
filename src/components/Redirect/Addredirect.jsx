
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Addredirect.less'
import { Card } from 'antd';
import Col from 'react-bootstrap/Col';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Input } from 'antd';
import {
    INPUT_DESCRIPTION,
    APPLY_REDIRECT_ON,
    APPLY_REDIRECT_OFF,
    ARTICLE_SELECTED,
    STORY_SELECTED,
    OPEN_IMAGE_SELECT,
    CLOSE_ADDREDIRECT_DAILOG,
    ADD_REDIRECT, UPDATE_REDIRECT,
    ON_UPDATE_NOTE,
    OPEN_EDIT_IMAGE
} from '../../constants/actionTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editToggle } from '../../Actioncreator';
const { TextArea } = Input;
const theme = createMuiTheme({
    overrides: {

        MuiDialog: {

            paperWidthSm: {
                maxWidth: '700px !Important'
            },
            paperScrollPaper: {
                maxHeight: '425px !Important'
            },
            paper: {
                overflow: 'visible !Important '
            }

        }
    }
})
const avatarTheme = createMuiTheme({
    overrides: {
        MuiChip: {

            avatar: {
                width: '18px',
                color: ' #616161',
                height: '37px',
                marginLeft: '9px'
            }

        }
    }

});
function mapStateToProps(state) {

    return {
        data: state.addRedirect,
        open: state.dashboard.openDailog,
        note: state.panelReducer.note,
        edit: state.dashboard.fromEdit,
        image: state.addRedirect.image

    }

}
const mapDispatchToProps = dispatch => ({
    addDescription: value =>
        dispatch({ type: INPUT_DESCRIPTION, value }),
    handleRedirectON: () =>
        dispatch({ type: APPLY_REDIRECT_ON }),
    handleRedirectOFF: () =>
        dispatch({ type: APPLY_REDIRECT_OFF }),
    selectArticle: () =>
        dispatch({ type: ARTICLE_SELECTED }),
    selectStory: () =>
        dispatch({ type: STORY_SELECTED }),
    openImageselect: () =>
        dispatch({ type: OPEN_IMAGE_SELECT }),
    closeAddredirectdailog: () =>
        dispatch({ type: CLOSE_ADDREDIRECT_DAILOG }),
    addRedirect: (data) =>
        dispatch({ type: ADD_REDIRECT, payload: data }),
    updateRedirect: (data) =>
        dispatch({ type: UPDATE_REDIRECT, payload: data }),
    changeToggle: (note) => dispatch(editToggle(note)),
    onUpdate: (note) =>
        dispatch({ type: ON_UPDATE_NOTE, payload: note }),
    editSelectimage: (note) =>
        dispatch({ type: OPEN_EDIT_IMAGE, payload: note })


});


// onChangePassword: value =>
//     dispatch({ type: INPUT_PASSWORD, key: 'password', value }),
// onSubmit: (email, password) =>
//     dispatch({ type: LOGIN_USER, payload: login(email, password) }),
// onUnload: () =>
//     dispatch({ type: LOGIN_PAGE_UNLOADED })


class Addredirectcard extends Component {
    constructor(props) {
        super(props);
        this.addDescription = event => this.props.addDescription(event.target.value)
        this.handleToggleON = () => this.props.handleRedirectON()
        this.handleToggleOFF = () => this.props.handleRedirectOFF()
        this.selectArticle = () => this.props.selectArticle()
        this.selectStory = () => this.props.selectStory()
        this.openImageselect = () => this.props.openImageselect()
        this.closeDailog = () => this.props.closeAddredirectdailog()
        this.state = {

        }

    }
    redirectOn(note) {
        note['apply_redirect'] = true
        console.log("value in togglr -" + note.apply_redirect)
        // store.dispatch({ type: REDIRECT_ON, payload: note })
        console.log("value in togglr -" + note.apply_redirect)
        this.props.onUpdate(note)
    }
    redirectOff(note) {
        note['apply_redirect'] = false
        console.log("value in togglr -" + note.apply_redirect)
        // store.dispatch({ type: REDIRECT_ON, payload: note })
        console.log("value in togglr -" + note.apply_redirect)
        this.props.onUpdate(note)
    }

    editImageselect(note) {
        this.props.editSelectimage(note)
    }

    changeDialog() {
        this.props.change();
    }
    addHashtag() {
        const description = this.props.data.description;
        console.log("description in add" + description)
        var descriptionValue = description + "#"
        this.props.addDescription(descriptionValue);
    }

    onSubmit(description, redirect, image) {

        var data = {
            title: "new post",
            image: image,
            description: description,
            redirect_link: "https://www.google.com",


            apply_redirect: redirect,
        }
        this.props.addRedirect(data)
        this.props.closeAddredirectdailog()
    }
    onUpdate(description, image, note) {
        console.log("in update ---" + JSON.stringify(note))
        note['description'] = description



        this.props.onUpdate(note)
        this.props.updateRedirect(note)
        this.props.closeAddredirectdailog()
    }
    changeRedirect(note) {
        console.log('n change redirect of ' + JSON.strigyify(note));
        this.props.changeToggle(note);
    }



    render() {
        const description = this.props.data.description
        const toggle = this.props.data.applyRedirect
        const Article = this.props.data.article
        const selectedArticlebutton = !Article ? style.articleButton : style.selectedButton
        const selectedStorybutton = Article ? style.storyButton : style.selectedButton
        console.log("edit in addredirect of description--" + this.props.data.edit);
        console.log("edit in addredirect of description--" + this.props.note.apply_redirect);


        var value = this.props.data.edit ? description : this.props.note.description

        console.log('in add redicret apply --' + value)
        console.log('in ad redicret article --' + this.props.open)
        console.log('note in edurriirr------' + JSON.stringify(this.props.note));
        return (

            <MuiThemeProvider theme={theme}>
                <Dialog open={this.props.open}>

                    <div className={style.mainAddredirectdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.addredirectHeader}>
                                {
                                    this.props.edit ? (
                                        <p>Edit Redirect</p>
                                    ) : (
                                            <p>Add Redirect</p>
                                        )

                                }

                            </div>
                        </div>

                        <div className={style.descriptionDiv}>
                            {this.props.edit ? (
                                <TextArea id={style.textarea}
                                    value={value}
                                    onChange={this.addDescription}

                                    placeHolder="What you want to say about ?"
                                >
                                </TextArea>

                            ) : (
                                    <TextArea id={style.textarea}
                                        value={description}
                                        onChange={this.addDescription}

                                        placeHolder="What you want to say about ?"
                                    >
                                    </TextArea>
                                )

                            }


                        </div>

                        <div className={style.bottomDiv}>
                            <div className={style.toogleAndredirectdiv}>
                                <div className={style.toogleButton}>
                                    <div className={selectedArticlebutton} onClick={() => this.selectArticle()}>
                                        Article
                                    </div>
                                    <div className={selectedStorybutton} onClick={() => this.selectStory()}>
                                        Story
                                    </div>
                                </div>
                                <div className={style.toggleDiv}>
                                    <div >
                                        {
                                            this.props.edit ?
                                                (
                                                    <div>
                                                        {this.props.note.apply_redirect ?
                                                            (
                                                                <img src={require('../../assets/ON.svg')} onClick={() => this.redirectOff(this.props.note)} />
                                                            ) :
                                                            (
                                                                <img src={require('../../assets/Off.svg')} onClick={() => this.redirectOn(this.props.note)} />
                                                            )

                                                        }

                                                    </div>
                                                )
                                                : (
                                                    <div>
                                                        {this.props.data.applyRedirect ? (
                                                            <img src={require('../../assets/ON.svg')} onClick={() => this.handleToggleOFF()} />

                                                        ) :
                                                            (
                                                                <img src={require('../../assets/Off.svg')} onClick={() => this.handleToggleON()} />

                                                            )

                                                        }
                                                    </div>

                                                )
                                        }
                                    </div>
                                    <div className={style.toggleText}>

                                        Apply Redirect
                                    </div>
                                </div>
                            </div>
                            <div className={style.bottomButtonDiv}>

                                <div className={style.imageAndhash}>
                                    {this.props.edit ?
                                        <img onClick={() => this.editImageselect(this.props.note)} className={style.bottomImage} src={require("../../assets/photo-camera.svg")} />
                                        :
                                        <img onClick={() => this.openImageselect()} className={style.bottomImage} src={require("../../assets/photo-camera.svg")} />
                                    }

                                    <img className={style.bottomImage} src={require("../../assets/video-camera.svg")} />
                                    <img className={style.bottomImage} src={require("../../assets/file.svg")} />
                                    <MuiThemeProvider theme={avatarTheme}>
                                        <Chip label="Add Hashtag" onClick={() => this.addHashtag()}
                                            avatar={<img className={style.addImage} src={require('../../assets/add.svg')} />}
                                        >
                                            Add Hashtag
                                             </Chip>
                                    </MuiThemeProvider>

                                </div>


                                <div className={style.submitButtondiv}>
                                    <Button variant="contained" id={style.storyButton} onClick={() => this.closeDailog()}> Cancel</Button>

                                    {
                                        this.props.edit ? (
                                            <Button variant="contained" id={style.articleButton} onClick={() => this.onUpdate(description, this.props.image, this.props.note)}> Update</Button>

                                        ) : (
                                                <Button variant="contained" id={style.articleButton} onClick={() => this.onSubmit(description, this.props.data.applyRedirect, this.props.image)}> Submit</Button>

                                            )
                                    }
                                </div>


                            </div>
                        </div>
                    </div>
                </Dialog>
            </MuiThemeProvider>

        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addredirectcard);           