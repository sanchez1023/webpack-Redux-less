
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Addredirect.less'
import { Card } from 'antd';
import Col from 'react-bootstrap/Col';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Input } from 'antd';
import { INPUT_DESCRIPTION } from '../constants/actionTypes';
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
const mapStateToProps = state => ({ ...state.addRedirect });
const mapDispatchToProps = dispatch => ({
    addDescription: value =>
        dispatch({ type: INPUT_DESCRIPTION, key: 'description', value }),
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
        this.state = {

        }
        this.closeDailog = this.closeDailog.bind(this)
    }


    closeDailog() {
        this.props.close();
    }

    changeDialog() {
        this.props.change();
    }
    addHashtag() {
        const description = this.props.description;
        console.log("descripyon in add" + description)
        var descriptionValue = description + "#"
        this.props.addDescription(descriptionValue);
    }







    render() {
        const description = this.props.description
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
                                    <div className={style.articleButton}>
                                        Article
                                    </div>
                                    <div className={style.storyButton}>
                                        Story
                                    </div>
                                </div>
                                <div>
                                    <img src={require('../assets/ON.svg')} />
                                    Apply Redirect
                                </div>
                            </div>
                            <div className={style.bottomButtonDiv}>

                                <div className={style.imageAndhash}>
                                    <img className={style.bottomImage} src={require("../assets/photo-camera.svg")} />
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