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
import { OPEN_TOGGLE_REDIRECT_DAILOG, CLOSE_EXTEND_PANEL, CLOSE_SHARE_DAILOG, OPEN_SHARE_DAILOG, OPEN_ADDREDIECT_DAILOG, OPEN_EXTEND_PANEL } from '../../constants/actionTypes';
import Sharecard from "./Share";
import * as ActionCreators from 'redux'
import store from '../../store'
import { runInNewContext } from "vm";
const bindActionCreators = ActionCreators;
// const popover = (
//     <Popover >
//         <MenuItem onClick={() => this.editRedirect()}>Edit </MenuItem>
//         <MenuItem>Archive </MenuItem>
//         <MenuItem>Delete </MenuItem>
//     </Popover>
// );
// function mapStateToProps(state) {

//     return {
//         data: state.addRedirect
//     }

// }
const mapDispatchToProps = dispatch => ({
    addDescription: value =>
        dispatch({ type: INPUT_DESCRIPTION, value }),
    toggleRedirect: () =>
        dispatch({ type: OPEN_TOGGLE_REDIRECT_DAILOG }),
    handleRedirectOFF: () =>
        dispatch({ type: APPLY_REDIRECT_OFF }),
    selectArticle: () =>
        dispatch({ type: ARTICLE_SELECTED }),
    selectStory: () =>
        dispatch({ type: STORY_SELECTED }),
    openShare: () =>
        dispatch({ type: OPEN_SHARE_DAILOG }),
    openRedirectedit: () =>
        dispatch({ type: OPEN_ADDREDIECT_DAILOG }),
    openExtend: () =>
        dispatch({ type: OPEN_EXTEND_PANEL }),
    closeExtend: () =>
        dispatch({ type: CLOSE_EXTEND_PANEL })
})
class Panel extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.toggleRedirect = () => this.props.toggleRedirect()
        this.editRedirect = () => this.props.openRedirectedit()
        this.handleShare = () => this.props.openShare()
        this.closeExtend = () => this.props.closeExtend()
        this.openExtend = () => this.props.openExtend()
    }



    handleTooltip() {
        this.setState({
            toolTip: true
        })

    }


    openLink() {
        window.open('http://bridgelabz.com/')
    }

    copyLink(link) {
        console.log('in  copy ' + link)

        // link.select("www.google.com")


        document.execCommand("copy")

    }
    render() {
        console.log('in redirect  panel----' + this.props.redirect)

        return (
            <div className={style.panelDiv}>

                <Card className={style.cardPanel}>
                    <img src={require("../../assets/0 (1).png")} />

                    <div className={style.toogleRedirect}>
                        {
                            !this.props.redirect ?
                                (
                                    <img onClick={() => this.toggleRedirect()} src={require("../../assets/Off.svg")} />)
                                :
                                (
                                    <img onClick={() => this.toggleRedirect()} src={require("../../assets/ON.svg")} />
                                )
                        }
                    </div>
                    <div className={style.iconDiv}>
                        <div className={style.paneliconDiv}>

                            <div className={style.openlinkDiv}>
                                <img onClick={() => this.openLink()} src={require("../../assets/ic_open_in_new_24px.png")} alt="open-link" />
                            </div>

                            <div className={style.copyiconDiv} data-tip="Link Copied">
                                <img onClick={() => this.copyLink('http://google.com')} src={require("../../assets/copy.png")} alt="copy-icon" />
                                <ReactTooltip place="bottom" />
                            </div>
                            <div className={style.shareiconDiv}>
                                <img onClick={() => this.handleShare()} src={require("../../assets/share.png")} alt="share-icon" />
                            </div>

                            <OverlayTrigger trigger="click" placement="bottom-start" overlay={
                                <Popover >
                                    <MenuItem onClick={() => this.editRedirect()}>Edit </MenuItem>
                                    <MenuItem>Archive </MenuItem>
                                    <MenuItem>Delete </MenuItem>
                                </Popover>}>



                                <div className={style.editiconDiv}>



                                    <img className={style.editIcon} src={require("../../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />

                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <Card className={style.expansionCard}>
                        {
                            !this.props.extend ?
                                (
                                    <div className={style.nonExpanddiv}>
                                        <div className={style.titleDiv}>
                                            India is facing a massive skill gap problem with hundreds of engineers..
                           </div>
                                        <div className={style.hashtagDiv}>#BridgeLabz #Skilling #Engineers #Jobs</div>
                                        <div className={style.cardextendDiv}>
                                            <div onClick={() => this.openExtend()} className={style.cardExtend}>
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
                                            <div onClick={() => this.closeExtend()} className={style.cardExtend}>
                                            </div>
                                        </div>

                                    </div>


                                )

                        }
                    </Card>



                    <Redirectcard

                    />
                    <Sharecard
                    />
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        toggle: state.panelReducer,
        extend: state.panelReducer.extend,
        redirect: state.addRedirect.applyRedirect,


    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Panel);