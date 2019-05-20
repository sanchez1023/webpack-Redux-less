
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Share.less';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import panelReducer from '../../reducers/panelReducer';
import { CLOSE_SHARE_DAILOG } from '../../constants/actionTypes';
import { connect } from 'react-redux';
import { databaseConfig } from '../../config';



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
        }, MuiBackdrop: {
            root: {

                backgroundColor: ' rgba(0, 0, 0, 0.1)'
            }
        },
        MuiPaper: {
            elevation24: {
                boxShadow: "none"
            }
        }
    }
})
const mapDispatchToProps = dispatch => ({
    closeDailog: () => dispatch({ type: CLOSE_SHARE_DAILOG })
})
function mapStateToProps(state) {
    console.log("in sahe open----" + state.panelReducer.openSharedialog)
    return {
        open: state.panelReducer.openSharedialog,
        note: state.panelReducer.note
    }
}


class Sharecard extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = () => this.props.closeDailog()
        this.state = {

        }

    }















    render() {
        console.log("in share dailog====---" + this.props.open);
        const imageUrl = databaseConfig.backendUrl + this.props.note.image
        console.log("data in share---" + JSON.stringify(this.props.note))
        console.log("image in share--------" + this.props.note.image)
        return (
            <MuiThemeProvider theme={theme}>
                <Dialog

                    open={this.props.open}>
                    <div>
                        <div className={style.sharemainDiv}>
                            <div>
                                <img src={imageUrl} className={style.mainImage} />
                            </div>

                            <div>
                                <img onClick={() => this.handleCancel()} className={style.cancelButton} src={require('../../assets/cancel.svg')} />
                            </div>
                            <div>
                                <div className={style.toogleRedirect}>
                                    <img src={require('../../assets/ON.svg')} />
                                </div>
                            </div>
                            <div>

                                <div className={style.iconDiv}>
                                    <div className={style.paneliconDiv}>

                                        <div className={style.openlinkDiv}>
                                            <img src={require("../../assets/ic_open_in_new_24px.png")} alt="open-link" />
                                        </div>

                                        <div className={style.copyiconDiv}>
                                            <img src={require("../../assets/copy.png")} alt="copy-icon" />
                                        </div>
                                        <div className={style.shareiconDiv}>
                                            <img src={require("../../assets/share.png")} alt="share-icon" />
                                        </div>
                                        <div className={style.editiconDiv}>
                                            <img src={require("../../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.titleDiv}>
                                {this.props.note.title}
                            </div>
                            <div
                                className={style.hashtagDiv}>#BridgeLabz #Skilling #Engineers #Jobs
                        </div>
                            <div className={style.descriptionDiv}>
                                {this.props.note.description}
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
export default connect(mapStateToProps, mapDispatchToProps)(Sharecard)