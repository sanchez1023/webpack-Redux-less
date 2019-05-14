
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Panel.less'
import store from '../../store';
import { TOGGLE_REDIRECT, CHANGE_TOGGLE, CLOSE_TOGGLE_REDIRECT_DAILOG, APPLY_REDIRECT_OFF, APPLY_REDIRECT_ON, REDIRECT_OFF, REDIRECT_ON } from '../../constants/actionTypes';
import { connect } from 'react-redux';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { toggleOn, toggleOff, updateRedirect } from '../../Actioncreator/index'
const theme = createMuiTheme({
    overrides: {


        MuiBackdrop: {
            root: {

                backgroundColor: ' rgba(0, 0, 0, 0.1)'
            }
        }
    }


})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateRedirect: updateRedirect }, dispatch);



}

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
    redirectOff(note) {
        note['apply_redirect'] = false
        console.log("value in togglr -" + JSON.stringify(note))
        // store.dispatch({ type: REDIRECT_OFF, payload: note })
        store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
        this.props.updateRedirect(note)
    }
    redirectOn(note) {
        note['apply_redirect'] = true
        console.log("value in togglr -" + JSON.stringify(note))
        // store.dispatch({ type: REDIRECT_ON, payload: note })
        store.dispatch({ type: CLOSE_TOGGLE_REDIRECT_DAILOG })
        this.props.updateRedirect(note)
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
        console.log("in redirect ---- edit" + JSON.stringify(this.props.note))
        return (
            <MuiThemeProvider theme={theme}>
                <Dialog open={this.props.open}>
                    <div>
                        <div className={style.redirectDiv}>
                            <div className={style.redirectHeader}>
                                {this.props.note.apply_redirect ?
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
                                    this.props.note.apply_redirect ?
                                        (
                                            <Button variant="contained" id={style.updateButton}


                                                onClick={() => this.redirectOff(this.props.note)} fullWidth={true}  ><h> Yes</h></Button>
                                        ) :
                                        (
                                            <Button variant="contained" id={style.updateButton}


                                                onClick={() => this.redirectOn(this.props.note)} fullWidth={true}  ><h> Yes</h></Button>
                                        )
                                }


                            </div>
                        </div>
                    </div>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}
function mapStateToProps(state) {
    // console.log("state in in redirect--" + state.toggleRedirect.state.Toggle.age)
    return {
        open: state.panelReducer.openRedirectdialog,
        redirect: state.addRedirect.applyRedirect,
        note: state.panelReducer.note
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Redirectcard);