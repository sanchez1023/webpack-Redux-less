
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Addredirect.less'
import { Card } from 'antd';
import Col from 'react-bootstrap/Col'

class Addredirectcard extends Component {
    constructor(props) {
        super(props);
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








    render() {
        return (
            <div>
                <Dialog open={this.props.open}>

                    <div className={style.mainAddredirectdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.addredirectHeader}>
                                <p>Add Redirect</p>
                            </div>
                        </div>
                        <div className={style.descriptionDiv}>
                            What do you want to talk about ?
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

                                    <Chip label="Add Hashtag"
                                        avatar={<img className={style.addImage}src={require('../assets/add.svg')} />}
                                    >
                                        Add Hashtag
                                             </Chip>


                                </div>


                                <div className={style.submitButtondiv}>
                                    <Button variant="contained" id={style.storyButton} onClick={() => this.closeDailog()}> Cancel</Button>
                                    <Button variant="contained" id={style.articleButton} > Submit</Button>

                                </div>


                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>

        );
    }
}
export default Addredirectcard;