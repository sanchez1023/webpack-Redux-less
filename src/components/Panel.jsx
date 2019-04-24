import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import style from "./Panel.less";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Menu, MenuItem } from "@material-ui/core";
import ReactTooltip from 'react-tooltip'
import Button from 'react-bootstrap/Button';
import Redirectcard from "./Redirect";
import { connect } from 'react-redux';
import { TOGGLE_REDIRECT, CHANGE_TOGGLE, OPEN_TOGGLE_REDIRECT_DAILOG } from '../constants/actionTypes';
import Sharecard from "./Share";
import * as ActionCreators from 'redux'
import store from '../store'
const bindActionCreators = ActionCreators;
const popover = (
    <Popover >
        <MenuItem>Edit </MenuItem>
        <MenuItem>Archive </MenuItem>
        <MenuItem>Delete </MenuItem>
    </Popover>
);
class Panel extends Component {
    constructor() {
        super();
        this.state = {
            openRedirect: false,
            toolTip: false,
            share: false,
            extend: false,
        }
        this.toggleRedirect = this.toggleRedirect.bind(this)
        this.closeRedirect = this.closeRedirect.bind(this)
        this.handleShare = this.handleShare.bind(this)
        this.closeShare = this.closeShare.bind(this)
        this.toggleExtend = this.toggleExtend.bind(this)
    }
    toggleExtend() {
        this.setState({
            extend: !this.state.extend,
        })
        console.log("in tooglr extend" + this.state.extend);

    }
    toggleRedirect() {
        store.dispatch({ type: OPEN_TOGGLE_REDIRECT_DAILOG })

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
    openLink() {
        window.open('http://google.com')
    }

    copyLink(link) {
        console.log('in  copy ' + link)
        var a = link
        document.body.appendChild(a);
        document.execCommand("copy")
        document.body.removeChild(a);
    }
    render() {

        return (
            <div className={style.panelDiv}>

                <Card className={style.cardPanel}>
                    <img src={require("../assets/0 (1).png")} />

                    <div className={style.toogleRedirect}>

                        <img onClick={() => this.toggleRedirect()} src={require("../assets/ON.svg")} />
                    </div>
                    <div className={style.iconDiv}>
                        <div className={style.paneliconDiv}>

                            <div className={style.openlinkDiv}>
                                <img onClick={() => this.openLink()} src={require("../assets/ic_open_in_new_24px.png")} alt="open-link" />
                            </div>

                            <div className={style.copyiconDiv} data-tip="Link Copied">
                                <img onClick={() => this.copyLink('http://google.com')} src={require("../assets/copy.png")} alt="copy-icon" />
                                <ReactTooltip place="bottom" />
                            </div>
                            <div className={style.shareiconDiv}>
                                <img onClick={() => this.handleShare()} src={require("../assets/share.png")} alt="share-icon" />
                            </div>

                            <OverlayTrigger trigger="click" placement="bottom-start" overlay={popover}>



                                <div className={style.editiconDiv}>



                                    <img className={style.editIcon} src={require("../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />

                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <Card className={style.expansionCard}>
                        {
                            !this.state.extend ?
                                (
                                    <div className={style.nonExpanddiv}>
                                        <div className={style.titleDiv}>
                                            India is facing a massive skill gap problem with hundreds of engineers..
                           </div>
                                        <div className={style.hashtagDiv}>#BridgeLabz #Skilling #Engineers #Jobs</div>
                                        <div className={style.cardextendDiv}>
                                            <div onClick={() => this.toggleExtend()} className={style.cardExtend}>
                                            </div>
                                        </div>


                                    </div>
                                ) :
                                (
                                    <div>
                                        <div className={style.titleDiv}>
                                            India is facing a massive skill gap problem with hundreds of engineers..
                           </div>
                                        <div className={style.hashtagDiv}>#BridgeLabz #Skilling #Engineers #Jobs</div>
                                        <div className={style.descriptionDiv}>
                                            India is facing a massive skill gap problem with hundreds of engineers graduating every year but only a few possessing the skills required in the industry now. How can our engineers be trained for future jobs? India is facing a massive skill gap problem with hundreds of engineers graduating every year but only a few possessing .
                                </div>

                                        <div className={style.cardextendDiv}>
                                            <div onClick={() => this.toggleExtend()} className={style.cardExtend}>
                                            </div>
                                        </div>

                                    </div>


                                )

                        }
                    </Card>



                    <Redirectcard
                        open={this.state.openRedirect}
                        close={this.closeRedirect}
                    />
                    <Sharecard open={this.state.share}
                        close={this.closeShare}
                    />
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        toggle: state.toggleRedirect.state.Toggle,

    }
}
export const getUserDetailsRequest = () => ({
    type: "TOGGLE_REDIRECT",

});




export default connect(mapStateToProps)(Panel);