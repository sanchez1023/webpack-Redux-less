import React, { Component } from "react";
import Appheader from '../components/Loginpage/Appheader';
import Panel from "../components/Panel/Panel";
import style from "./Dashboard.less"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Storypanel from "../components/Panel/Storypanel";
import Addredirectcard from "../components/Redirect/Addredirect";
import {
    OPEN_ADDREDIECT_DAILOG,
    TOGGLE_DASHBOARD_STORY_SELECTED,
    GET_CARDS, TOGGLE_DASHBOARD_ARTICLE_SELECTED,
    LINK_COPIED_OFF
} from "../constants/actionTypes";
import { connect } from 'react-redux';
import Imageselect from "../components/Imageselect/Imageselect";
import Masonry from 'react-masonry-component';
import { panelData } from "../config";
import auth from "../Usercontroller";
import { withRouter } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import SnackBar from 'react-material-snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';

import { ToastContainer, toast } from 'react-toastify';


const mapDispatchToProps = dispatch => ({
    openRedirectdailog: () =>
        dispatch({ type: OPEN_ADDREDIECT_DAILOG }),
    storySelected: () =>
        dispatch({ type: TOGGLE_DASHBOARD_STORY_SELECTED }),
    artcileSelected: () =>
        dispatch({ type: TOGGLE_DASHBOARD_ARTICLE_SELECTED }),
    onGetcard: () =>
        dispatch({ type: GET_CARDS }),
    close: () =>
        dispatch({ type: LINK_COPIED_OFF })


})
const masonryOptions = {
    transitionDuration: 23
};
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};
function mapStateToProps(state) {
    console.log('article in dash--- update-==--=' + JSON.stringify(state.dashboard.updateResponse));

    return {
        toggleDisplay: state.dashboard.article,
        data: state.dashboard.cards,
        loading: state.dashboard.loading,
        linkCopied: state.dashboard.linkCopied,
        retrive: state.dashboard.retrive,
        updateResponse: state.dashboard.updateResponse


    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: [],
            two: [],
            three: [],
            data: this.props.data,
            snackbar: false,
            width: "",
            height: "",

        }

        this.addRedirect = () => this.props.openRedirectdailog();
        this.articleSelect = () => this.props.artcileSelected();
        this.storySelect = () => this.props.storySelected();
        this.handleClose = () => this.props.close();

    }

    componentDidMount() {
        //  this.props.onGetcard()
        // if (this.props.loading) { return (LoadingMessage()) }
        // else {
        console.log("ne height-----" + this.state.height)
        const arrayResult = []
        this.props.data.map((note) => {
            arrayResult.push(note.resultData)
        });

        console.log("new created array-----" + JSON.stringify(arrayResult));
        // console.log("arraray on dashboard***--" + JSON.stringify(this.props.cards))
        const one = []
        const two = []
        const three = []
        const array1 = arrayResult.length;
        var c = window.innerWidth;
        console.log("c---" + c);
        console.log("array length===" + array1)
        for (var i = 0; i < array1; i++) {
            if (i % 3 == 0) {
                one.push(arrayResult[i])
            }
            else if (i % 3 == 1) {
                two.push(arrayResult[i])
            }
            else if (i % 3 == 2) {
                three.push(arrayResult[i])
            }

            console.log("value of i last---" + i)
        }
        console.log(" in dashboard of thue ne s---" + this.props.retrive)
        if (this.props.retrive) {
            this.setState({
                one: one,
                two: two,
                three: three
            })


        }
        this.setState({
            one: one,
            two: two,
            three: three
        })

        console.log("length of 1" + one.length);
        console.log("length of 2" + two.length);
        console.log("length of 3" + three.length);

    }
    updateDimensions() {

        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState({ width: width, height: height });
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }

    showSnackbar() {
        this.setState({
            snackbar: true
        })
    }



    render() {



        var arraydiv1 = this.state.one.map((note) => {
            if (note !== "undefined")
                note.isOpen = false
            return (
                <Panel note={note}

                />
            )


        });
        var arraydiv2 = this.state.two.map((note) => {
            if (note !== "undefined")
                note.isOpen = false
            return (
                <Panel note={note} />
            )


        });
        var arraydiv3 = this.state.three.map((note) => {
            note.isOpen = false
            return (
                <Panel note={note} />
            )


        });

        console.log("nreew update ----" + this.props.updateResponse)
        const display = this.props.toggleDisplay ? style.clickedToggle : style.articleButton
        const story = this.props.toggleDisplay ? style.articleButton : style.clickedToggle
        return (
            <Container fluid={true} className={style.dashboardDiv}>
                <Appheader />
                {
                    this.props.loading ?
                        (
                            <LinearProgress></LinearProgress>
                        ) :
                        (
                            <div></div>
                        )
                }
                <div className={style.cardView}>
                    <div className={style.toggleDiv}>
                        <div className={style.toogleButton}>
                            <div onClick={() => this.articleSelect()} variant="contained" id={display} > ARTICLE</div>
                            <div onClick={() => this.storySelect()} variant="contained" id={story} > STORY</div>
                        </div>
                    </div>
                    <div className={style.displayCards}>
                        {
                            !this.props.toggleDisplay ?
                                (

                                    <div
                                        className={style.artcileDiv}>
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel />
                                        <Storypanel /> <Storypanel />
                                    </div>

                                ) : (

                                    <div className={style.cardsDiv}>
                                        <div>
                                            {arraydiv1}

                                        </div>

                                        <div>
                                            {arraydiv2}
                                        </div>
                                        <div>
                                            {arraydiv3}
                                        </div>


                                    </div>
                                )
                        }
                    </div>
                    <Addredirectcard />
                    <Imageselect />

                    <div className={style.addButton}>
                        <img onClick={() => this.props.openRedirectdailog()} src={require('../assets/add.png')} />
                    </div>

                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.props.linkCopied}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message="Copied to clipboard"

                />



            </Container>
        )
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))