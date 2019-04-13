
import React, { Component } from 'react';
import { Dialog, InputBase, IconButton, Toolbar, Chip, Button, TextField } from '@material-ui/core';
import style from './Share.less';


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

    changeDialog() {
        this.props.change();
    }








    render() {
        return (
            <Dialog open={this.props.open}>
                <div>
                    <div className={style.sharemainDiv}>
                        <img className={style.mainImage} src={require('../assets/0 (1).png')} />
                        <div className={style.titleDiv}>
                            <p>How to make 80% unemployed Engineers job ready?</p>
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
        );
    }
}
export default Sharecard;