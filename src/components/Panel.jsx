import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import style from "./Panel.less";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Menu, MenuItem } from "@material-ui/core";
import ReactTooltip from 'react-tooltip'
import Button from 'react-bootstrap/Button';
import Redirectcard from "./Redirect";

import Sharecard from "./Share";

const popover = (
    <Popover >
        <MenuItem>Edit </MenuItem>
        <MenuItem>Delete </MenuItem>
        <MenuItem>Archive </MenuItem>
    </Popover>
);
class Panel extends Component {
    constructor() {
        super();
        this.state = {
            openRedirect: false,
            toolTip: false,
            share: false,
        }
        this.toggleRedirect = this.toggleRedirect.bind(this)
        this.closeRedirect = this.closeRedirect.bind(this)
        this.handleShare = this.handleShare.bind(this)
        this.closeShare = this.closeShare.bind(this)
    }
    toggleRedirect() {
        this.setState({
            openRedirect: !this.state.opeRedirect
        })
        console.log("in toggle redirect" + this.state.openRedirect)
    }
    closeRedirect() {
        console.log("in clos dialogee");

        this.setState({
            openRedirect: false,
        })
    }
    handleTooltip() {
        this.setState({
            toolTip: true
        })

    }
    handleShare() {
        console.log("in open share" + this.state.share)
        this.setState({
            share: true,
        })
    }
    closeShare() {
        this.setState({
            share: false
        })
    }
    render() {
        return (


            <Card className={style.cardPanel}>
                <img src={require("../assets/0 (1).png")} />

                <div className={style.toogleRedirect}>
                    <img onClick={() => this.toggleRedirect()} src={require("../assets/ON.svg")} />
                </div>
                <div className={style.iconDiv}>
                    <div className={style.paneliconDiv}>

                        <div className={style.openlinkDiv}>
                            <img src={require("../assets/ic_open_in_new_24px.png")} alt="open-link" />
                        </div>

                        <div className={style.copyiconDiv} data-tip="Link Copied">
                            <img src={require("../assets/copy.png")} alt="copy-icon" />
                            <ReactTooltip place="bottom" />
                        </div>
                        <div className={style.shareiconDiv}>
                            <img onClick={() => this.handleShare()} src={require("../assets/share.png")} alt="share-icon" />
                        </div>

                        <OverlayTrigger trigger="click" placement="bottom-start" overlay={popover}>



                            <div className={style.editiconDiv}>



                                <img src={require("../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />

                            </div>
                        </OverlayTrigger>
                    </div>
                </div>

                <div className={style.titleDiv}>
                    India is facing a massive skill gap problem with hundreds of engineers..
                </div>
                <div className={style.hashtagDiv}>#BridgeLabz #Skilling #Engineers #Jobs</div>
                <div className={style.cardextendDiv}>
                    <div className={style.cardExtend}>
                    </div>
                </div>
                <Redirectcard
                    open={this.state.openRedirect}
                    close={this.closeRedirect}
                />
                <Sharecard open={this.state.share}
                    close={this.closeShare}
                />
            </Card>

        )
    }
}
export default Panel;