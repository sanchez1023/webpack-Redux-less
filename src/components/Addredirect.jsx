
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Addredirect.less'


class Addredirectcard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    closeDailog() {
        this.props.close();
    }

    changeDialog() {
        this.props.change();
    }








    render() {
        return (
            <Dialog open={this.props.open}>
                <div>

                </div>
            </Dialog>
        );
    }
}
export default Addredirectcard;