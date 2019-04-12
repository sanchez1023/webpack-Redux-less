
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Panel.less'


class Redirectcard extends Component {
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
                            <Button variant="contained" id={style.updateButton}


                                onClick={(event) => this.changeDialog(event)} fullWidth={true}  ><h> Yes</h></Button>


                        </div>
                    </div>
                </div>
            </Dialog>
        );
    }
}
export default Redirectcard