import React, { Component } from 'react';
import { Dialog, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import ReactCrop from 'react-image-crop';
import style from './imageSelect.less'

import { CLOSE_IMAGE_SELECT } from '../constants/actionTypes';

function mapStateToProps(state) {
    console.log("im  iamge selct --" + state.addRedirect.imageSelectdialog)
    return {
        open: state.addRedirect.imageSelectdialog
    }

}
const mapDispatchToProps = dispatch => ({

    closeDailog: () =>
        dispatch({
            type: CLOSE_IMAGE_SELECT

        })
})
class Imageselect extends Component {
    constructor() {
        super();
        this.closeDailog = () => this.props.closeDailog()

    }
    render() {
        return (
            <Dialog open={this.props.open}>
                <div className={style.imageSelectdiv}>
                    <div className={style.topDiv}>
                        <TextField id={style.linkTextField}>
                        </TextField>
                        <Button id={style.chooseButton} variant='contained'> Choose Image
                </Button>
                    </div>
                    <div className={style.bottomDiv}>

                        <Button id={style.cancelButton} onClick={() => this.closeDailog()} variant='contained'> Cancel
                </Button>
                        <Button id={style.submitButton} onClick={() => this.closeDailog()} variant='contained'>Confirm</Button>
                    </div>
                </div>
            </Dialog>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Imageselect)

