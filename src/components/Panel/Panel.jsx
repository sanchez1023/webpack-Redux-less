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
import {
    OPEN_TOGGLE_REDIRECT_DAILOG,
    CLOSE_EXTEND_PANEL,
    CLOSE_SHARE_DAILOG, OPEN_SHARE_DAILOG,
    OPEN_ADDREDIECT_DAILOG, OPEN_EXTEND_PANEL,
    EDIT_REDIRECT, LINK_COPIED,
    EDIT_REDIRECT_DIALOG
} from '../../constants/actionTypes';
import Sharecard from "./Share";
import * as ActionCreators from 'redux'
import store from '../../store'
import { runInNewContext } from "vm";
import copy from 'copy-to-clipboard';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { databaseConfig } from '../../config'
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
    toggleRedirect: (note) =>
        dispatch({ type: OPEN_TOGGLE_REDIRECT_DAILOG, payload: note }),

    handleRedirectOFF: () =>
        dispatch({ type: APPLY_REDIRECT_OFF }),
    selectArticle: () =>
        dispatch({ type: ARTICLE_SELECTED }),
    selectStory: () =>
        dispatch({ type: STORY_SELECTED }),
    openShare: (note) =>
        dispatch({ type: OPEN_SHARE_DAILOG, payload: note }),
    openRedirectedit: (note) =>
        dispatch({ type: EDIT_REDIRECT, payload: note }),
    openreirectDailog: (note) =>
        dispatch({ type: EDIT_REDIRECT_DIALOG, payload: note }),
    openExtend: (note) =>
        dispatch({ type: OPEN_EXTEND_PANEL, payload: note }),
    closeExtend: (note) =>
        dispatch({ type: CLOSE_EXTEND_PANEL, payload: note }),
    linkCopied: () =>
        dispatch({ type: LINK_COPIED })
})
class Panel extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            anchorEl: null
        }
        this.toggleRedirect = (note) => this.props.toggleRedirect(note)

        // this.handleShare = (note) => this.props.openShare(note)
        // this.closeExtend = (note) => this.props.closeExtend(note)
        // this.openExtend = (note) => this.props.openExtend(note)
    }
    editRedirect(note) {
        this.props.openRedirectedit(note),
            this.props.openreirectDailog(note)
    }

    openExtend(note) {
        console.log('in open extends' + JSON.stringify(note))
        note['isOpen'] = true

        this.props.openExtend(note)
    }

    closeExtend(note) {
        console.log('in close  extends-------' + JSON.stringify(note))
        note['isOpen'] = false

        this.props.closeExtend(note)
    }
    handleTooltip() {
        this.setState({
            toolTip: true
        })

    }
    handleClickAway() {
        this.refs.overlay.hide()
    };
    async openPoper(event) {
        console.log("in open poper" + event)
        const { currentTarget } = event;
        await this.setState({
            anchorEl: currentTarget,
            open: true,
        });
        console.log("open in ----" + this.state.open)
    }

    handleShare(note) {
        console.log('notein share handle' + JSON.stringify(note))
        this.props.openShare(note)
    }

    openLink() {
        window.open(this.props.note.redirect_link)
    }

    copyLink(link) {
        console.log(" link in copy" + link)
        copy(link)
        this.props.linkCopied();

    }
    handleVisibleChange(visible) {

        this.setState({ open: true });
        console.log(" in visible" + this.state.open)
    }
    render() {
        // console.log("undeinded title " + JSON.stringify(this.props.note))
        var date = this.props.note.update_stamp.slice(0, 10)
        const imageUrl = databaseConfig.backendUrl + this.props.note.image;
        const redirectLink = this.props.note.redirect_link;
        console.log('redriect link in ------' + redirectLink)
        console.log('redriect link in  title------' + this.props.note.title)
        return (
            <div className={style.panelDiv}>

                <Card className={style.cardPanel}>
                    <img className={style.imageStyle} src={imageUrl} onClick={() => this.handleShare(this.props.note)} />

                    <div className={style.toogleRedirect}>
                        {
                            !this.props.note.apply_redirect ?
                                (
                                    <img onClick={() => this.toggleRedirect(this.props.note)} src={require("../../assets/Off.svg")} />)
                                :
                                (
                                    <img onClick={() => this.toggleRedirect(this.props.note)} src={require("../../assets/ON.svg")} />
                                )
                        }
                    </div>
                    <div className={style.iconDiv}>
                        <div className={style.paneliconDiv}>

                            <div className={style.openlinkDiv}>
                                <img onClick={() => this.openLink()} src={require("../../assets/ic_open_in_new_24px.png")} alt="open-link" />
                            </div>

                            <div className={style.copyiconDiv} data-tip="click to copy link">
                                <img onClick={(event) => this.copyLink(redirectLink)} src={require("../../assets/copy.png")} alt="copy-icon" />
                                <ReactTooltip place="bottom" />
                            </div>
                            <ClickAwayListener onClickAway={() => this.handleClickAway()}>
                                <OverlayTrigger trigger="click" placement="bottom-start" ref='overlay' overlay={
                                    <Popover >
                                        <MenuItem onClick={() => this.editRedirect(this.props.note)}>Edit </MenuItem>
                                        <MenuItem>Archive </MenuItem>
                                        <MenuItem>Delete </MenuItem>
                                    </Popover>}>
                                    <div className={style.editiconDiv}>



                                        <img className={style.editIcon} src={require("../../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />
                                    </div>

                                </OverlayTrigger>
                            </ClickAwayListener>






                        </div>
                    </div>
                    <Card className={style.expansionCard}>
                        {
                            !this.props.note.isOpen ?
                                (
                                    <div className={style.nonExpanddiv}>
                                        <div className={style.titleDiv}>
                                            {this.props.note.title}
                                        </div>
                                        <div className={style.dateDiv}>
                                            {date}
                                        </div>
                                        <div className={style.hashtagDiv}>
                                            #bridgelabz#old #fellowship
                                        </div>
                                        <div className={style.cardextendDiv}>
                                            <div onClick={() => this.openExtend(this.props.note)} className={style.cardExtend}>
                                            </div>
                                        </div>


                                    </div>
                                ) :
                                (
                                    <div>
                                        <div className={style.titleDiv}>
                                            {this.props.note.title}
                                            <div className={style.dateDiv}>


                                                {date}
                                            </div>
                                        </div>

                                        <div className={style.hashtagDiv}>
                                            #bridgelabz#old #fellowship
                                        </div>
                                        <div className={style.descriptionDiv}>
                                            {this.props.note.description}
                                        </div>

                                        <div className={style.cardextendDiv}>
                                            <div onClick={() => this.closeExtend(this.props.note)} className={style.cardExtend}>
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