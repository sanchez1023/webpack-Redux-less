import React, { Component } from 'react';
import { Dialog, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import ReactCrop from 'react-image-crop';
import style from '../Imageselect/imageSelect.less'

import { CLOSE_IMAGE_SELECT, SUBMIT_IMAGE, CHANGE_IMAGE } from '../../constants/actionTypes';

function mapStateToProps(state) {
    console.log("im  iamge selct --" + state.addRedirect.imageSelectdialog)
    return {
        open: state.addRedirect.imageSelectdialog,
        edit: state.dashboard.fromEdit,
        note: state.addRedirect.note
    }

}
const mapDispatchToProps = dispatch => ({

    closeDailog: () =>
        dispatch({
            type: CLOSE_IMAGE_SELECT

        }),
    submitImage: (file) =>
        dispatch({
            type: SUBMIT_IMAGE, payload: file
        }),
    editImage: (note) =>
        dispatch({
            type: CHANGE_IMAGE, payload: note
        })
})
class Imageselect extends Component {
    constructor() {
        super();
        this.state = {
            file: null, newFile: null,

            crop: {
                Aspect: 16 / 9
            }


        }
        this.closeDailog = () => this.props.closeDailog()


    }
    onImageLoaded(imagecrop) {
        console.log('onCropComplete', imagecrop)
    }
    onCropComplete(crop) {
        console.log('onCropComplete', crop)
    }

    onCropChange(crop) {
        this.setState({ crop })
    }
    editImage(note) {
        note["image"] = this.state.file
        console.log("after edit imagre ----" + note)
        this.props.editImage(note)

    }
    submitImage(image) {
        this.props.submitImage(image)
    }
    onChange(e) {
        var file = e.target.files[0];
        this.setState({
            file: event.target.files[0]
        })
        console.log("file ==-=--==" + this.state.file)
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            this.setState({
                newFile: [reader.result]
            })
        }.bind(this);

        console.log("url of data image" + url)
        console.log(" image after base 64" + this.state.file)

    }
    onCropChange(crop) {
        this.setState({ crop })
    }

    newBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    render() {
        return (
            <Dialog open={this.props.open}>
                <div className={style.imageSelectdiv}>
                    <div className={style.topDiv}>
                        <form onSubmit={this.onFormSubmit}>

                            <input type="file" name="myImage" onChange={(e) => { this.onChange(e) }} />



                        </form>
                    </div>
                    <div>
                        {this.state.file && (
                            <ReactCrop
                                src={this.state.newFile}
                                crop={this.state.crop}
                                onImageLoaded={this.onImageLoaded}
                                onComplete={this.onCropComplete}
                                onChange={() => this.onCropChange()}
                            />
                        )}>
                    </div>
                    <div className={style.bottomDiv}>

                        <Button id={style.cancelButton} onClick={() => this.closeDailog()} variant='contained'> Cancel
                </Button>
                        {this.props.edit ?
                            <Button id={style.submitButton} onClick={() => this.editImage(this.props.note)} variant='contained'>Confirm</Button>

                            :
                            <Button id={style.submitButton} onClick={() => this.submitImage(this.state.file)} variant='contained'>Confirm</Button>

                        }
                    </div>
                </div>
            </Dialog>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Imageselect)

