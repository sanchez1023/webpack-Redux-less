import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import style from "./Panel.less";
import storyStyle from './StoryPanel.less';
import Popper from '@material-ui/core/Popper';
import { MenuItem } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

class Storypanel extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null
        }
    }
    async  openMenu(event) {
        console.log("in ipewnne -1----" + this.state.open);

        const { currentTarget } = event;
        await this.setState({
            anchorEl: currentTarget,
            open: true,
        });
        console.log("in ipewnne -2----" + this.state.open);
        console.log("in ipewnne -2----" + this.state.anchorEl);

    };


    render() {
        return (


            <Card className={storyStyle.cardPanel}>
                <div>
                    <img className={storyStyle.storyImage} src={require("../../assets/Image 1.png")} />


                    <div className={style.iconDiv}>
                        <div className={style.paneliconDiv}>

                            <div className={style.openlinkDiv}>
                                <img src={require("../../assets/ic_open_in_new_24px.png")} alt="open-link" />
                            </div>

                            <div className={style.copyiconDiv}>
                                <img src={require("../../assets/copy.png")} alt="copy-icon" />
                            </div>

                            <div className={style.editiconDiv}>

                                <img src={require("../../assets/icons8-menu-vertical-24.png")} alt="edit-icon" onClick={(event) => this.openMenu(event)} />
                                <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                                    <Paper>
                                        <MenuItem>Edit</MenuItem>
                                        <MenuItem>Archive</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                    </Paper>

                                </Popper>
                            </div>
                        </div>
                    </div>

                    <div className={style.titleDiv}>
                        India is facing a massive skill gap problem with hundreds of engineers..
                </div>
                </div>

            </Card>

        )
    }
}
export default Storypanel;