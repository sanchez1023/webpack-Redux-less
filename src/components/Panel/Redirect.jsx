
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Panel.less'
import store from '../../store';
import { TOGGLE_REDIRECT, CHANGE_TOGGLE, CLOSE_TOGGLE_REDIRECT_DAILOG, APPLY_REDIRECT_OFF, APPLY_REDIRECT_ON } from '../../constants/actionTypes';
import { connect } from 'react-redux';


class Redirectcard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    closeDailog() {
        console.log("in close dialog")
        store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
    }
    redirectOff() {
        store.dispatch({ type: APPLY_REDIRECT_OFF })
        store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
    }
    redirectOn() {
        store.dispatch({ type: APPLY_REDIRECT_ON })
        store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
    }

    // changeDialog() {
    //      {
    //         store.dispatch({ type: TOGGLE_REDIRECT })
    //     }
    //     else {
    //         store.dispatch({ type: CHANGE_TOGGLE })
    //     }
    //     this.props.close();










    render() {
        console.log("in redirect ----" + this.props.redirect)
        return (
            <Dialog open={this.props.open}>
                <div>
                    <div className={style.redirectDiv}>
                        <div className={style.redirectHeader}>
                            {this.props.redirect ?
                                (
                                    <h>Do you want to deactivate redirect?</h>
                                ) :
                                (

                                    <h>Do you want to activate redirect?</h>
                                )

                            }
                        </div>
                        <div className={style.dialogButton}>
                            <Button onClick={() => this.closeDailog()}>
                                Cancel
                         </Button>
                            {
                                !this.props.redirect ?
                                    (
                                        <Button variant="contained" id={style.updateButton}


                                            onClick={() => this.redirectOn()} fullWidth={true}  ><h> Yes</h></Button>
                                    ) :
                                    (
                                        <Button variant="contained" id={style.updateButton}


                                            onClick={() => this.redirectOff()} fullWidth={true}  ><h> Yes</h></Button>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </Dialog>
        );
    }
}
function mapStateToProps(state) {
    // console.log("state in in redirect--" + state.toggleRedirect.state.Toggle.age)
    return {
        open: state.panelReducer.openRedirectdialog,
        redirect: state.addRedirect.applyRedirect
    }
}
export default connect(mapStateToProps)(Redirectcard);