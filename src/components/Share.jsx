
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Share.less';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    overrides: {


        MuiDialog: {
            overflow: 'visible',
            paperWidthSm: {
                maxWidth: '900px !Important'
            },
            paperScrollPaper: {
                maxHeight: '619px !Important'
            },
            paper: {
                overflow: 'visible !Important'
            }
        }
    }
})


class Sharecard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }




    closeDailog() {
        console.log("in close dialog")
        this.props.close();
    }

    handleCancel() {
        this.props.close();
    }








    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Dialog

                    open={this.props.open}>
                    <div>
                        <div className={style.sharemainDiv}>
                            <img className={style.mainImage} src={require('../assets/0 (1).png')} />
                            <div>
                                <img onClick={() => this.handleCancel()} className={style.cancelButton} src={require('../assets/cancel.svg')} />
                            </div>
                            <div>
                                <div className={style.toogleRedirect}>
                                    <img src={require('../assets/ON.svg')} />
                                </div>
                            </div>
                            <div>

                                <div className={style.iconDiv}>
                                    <div className={style.paneliconDiv}>

                                        <div className={style.openlinkDiv}>
                                            <img src={require("../assets/ic_open_in_new_24px.png")} alt="open-link" />
                                        </div>

                                        <div className={style.copyiconDiv}>
                                            <img src={require("../assets/copy.png")} alt="copy-icon" />
                                        </div>
                                        <div className={style.shareiconDiv}>
                                            <img src={require("../assets/share.png")} alt="share-icon" />
                                        </div>
                                        <div className={style.editiconDiv}>
                                            <img src={require("../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.titleDiv}>
                                How to make 80% unemployed Engineers job ready?
                            </div>
                            <div
                                className={style.hashtagDiv}>#BridgeLabz #Skilling #Engineers #Jobs
                        </div>
                            <div className={style.descriptionDiv}>
                                <p>

                                    India is facing a massive skill gap problem with hundreds of engineers graduating every year but only a few possessing the skills required in the industry now. How can our engineers be trained for future jobs? Hi Poonam India is facing a massive skill gap problem with hundreds of engineers graduating every year but only a few possessing the skills required in the industry now.
                        </p>
                            </div>
                            <div className={style.bottomDiv}>
                                <p>Powered by fundooPush</p>
                            </div>
                        </div>

                    </div>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}
export default Sharecard