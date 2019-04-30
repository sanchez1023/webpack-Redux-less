
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Addredirect.less'
import { Card } from 'antd';
import Col from 'react-bootstrap/Col';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Input } from 'antd';
import { INPUT_DESCRIPTION, APPLY_REDIRECT_ON, APPLY_REDIRECT_OFF, ARTICLE_SELECTED, STORY_SELECTED, OPEN_IMAGE_SELECT, CLOSE_ADDREDIRECT_DAILOG } from '../constants/actionTypes';
import { connect } from 'react-redux';

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
        open: state.dashboard.openDailog
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
        dispatch({ type: CLOSE_ADDREDIRECT_DAILOG })
    // onChangePassword: value =>
    //     dispatch({ type: INPUT_PASSWORD, key: 'password', value }),
    // onSubmit: (email, password) =>
    //     dispatch({ type: LOGIN_USER, payload: login(email, password) }),
    // onUnload: () =>
    //     dispatch({ type: LOGIN_PAGE_UNLOADED })
});

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



    changeDialog() {
        this.props.change();
    }
    addHashtag() {
        const description = this.props.data.description;
        console.log("description in add" + description)
        var descriptionValue = description + "#"
        this.props.addDescription(descriptionValue);
    }







    render() {
        const description = this.props.data.description
        const toggle = this.props.data.applyRedirect
        const Article = this.props.data.article
        const selectedArticlebutton = !Article ? style.articleButton : style.selectedButton
        const selectedStorybutton = Article ? style.storyButton : style.selectedButton
        console.log('in add redicret apply --' + toggle)
        console.log('in ad redicret article --' + this.props.open)
        return (

            <MuiThemeProvider theme={theme}>
                <Dialog open={this.props.open}>

                    <div className={style.mainAddredirectdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.addredirectHeader}>
                                <p>Add Redirect</p>
                            </div>
                        </div>
                        <div className={style.descriptionDiv}>
                            <TextArea id={style.textarea}
                                onChange={this.addDescription}
                                value={description}
                                placeHolder="What you want to say about ?"
                            >
                            </TextArea>

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
                                <div>
                                    {this.props.data.applyRedirect ? (
                                        <img onClick={() => { this.handleToggleOFF() }} src={require('../assets/ON.svg')} />)
                                        :
                                        (
                                            <img onClick={() => { this.handleToggleON() }} src={require('../assets/Off.svg')} />)


                                    }
                                    Apply Redirect
                                </div>
                            </div>
                            <div className={style.bottomButtonDiv}>

                                <div className={style.imageAndhash}>
                                    <img onClick={() => this.openImageselect()} className={style.bottomImage} src={require("../assets/photo-camera.svg")} />
                                    <img className={style.bottomImage} src={require("../assets/video-camera.svg")} />
                                    <img className={style.bottomImage} src={require("../assets/file.svg")} />
                                    <MuiThemeProvider theme={avatarTheme}>
                                        <Chip label="Add Hashtag" onClick={() => this.addHashtag()}
                                            avatar={<img className={style.addImage} src={require('../assets/add.svg')} />}
                                        >
                                            Add Hashtag
                                             </Chip>
                                    </MuiThemeProvider>

                                </div>


                                <div className={style.submitButtondiv}>
                                    <Button variant="contained" id={style.storyButton} onClick={() => this.closeDailog()}> Cancel</Button>
                                    <Button variant="contained" id={style.articleButton} > Submit</Button>

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