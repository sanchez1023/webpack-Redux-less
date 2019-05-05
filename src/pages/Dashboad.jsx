import React, { Component } from "react";
import Appheader from '../components/Loginpage/Appheader';
import Panel from "../components/Panel/Panel";
import style from "./Dashboard.less"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Storypanel from "../components/Panel/Storypanel";
import Addredirectcard from "../components/Redirect/Addredirect";
import { OPEN_ADDREDIECT_DAILOG, TOGGLE_DASHBOARD_STORY_SELECTED, GET_CARDS, TOGGLE_DASHBOARD_ARTICLE_SELECTED } from "../constants/actionTypes";
import { connect } from 'react-redux';
import Imageselect from "../components/Imageselect/Imageselect";
import Masonry from 'react-masonry-component';
import { panelData } from "../config";
import auth from "../Usercontroller";
import { withRouter } from 'react-router-dom'


const mapDispatchToProps = dispatch => ({
    openRedirectdailog: () =>
        dispatch({ type: OPEN_ADDREDIECT_DAILOG }),
    storySelected: () =>
        dispatch({ type: TOGGLE_DASHBOARD_STORY_SELECTED }),
    artcileSelected: () =>
        dispatch({ type: TOGGLE_DASHBOARD_ARTICLE_SELECTED }),
    onGetcard: () =>
        dispatch({ type: GET_CARDS })


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
    // console.log('article in dash---' + JSON.stringify(state.dashboard.cards))

    return {
        toggleDisplay: state.dashboard.article,
        data: state.dashboard.cards,
        loading: state.dashboard.loading

    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: [],
            two: [],
            three: [],
            data: this.props.data

        }

        this.addRedirect = () => this.props.openRedirectdailog();
        this.articleSelect = () => this.props.artcileSelected();
        this.storySelect = () => this.props.storySelected();
    }

    componentWillMount() {
        // this.props.onGetcard()
        // if (this.props.loading) { return (LoadingMessage()) }
        // else {
        console.log("arraray on dashboard***--" + JSON.stringify(this.props.cards))
        const one = []
        const two = []
        const three = []
        const array1 = this.props.data.length;
        var c = window.innerWidth;
        console.log("c---" + c);
        console.log("array length===" + array1)
        for (var i = 0; i < array1; i++) {
            if (i % 3 == 0) {
                one.push(this.props.data[i])
            }
            else if (i % 3 == 1) {
                two.push(this.props.data[i])
            }
            else if (i % 3 == 2) {
                three.push(this.props.data[i])
            }

            console.log("value of i last---" + i)
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
    LoadingMessage() {
        return (
            <div >
                Wait a moment while we load your app.
      <div></div>
            </div>
        );
    }

    render() {
        console.log("loadin in dagshhs----" + this.props.loading)
        if (this.props.Loading) {
            return this.LoadingMessage();


        }


        var arraydiv1 = this.state.one.map((note) => {
            if (note !== "undefined")
                return (
                    <Panel note={note} />
                )


        });
        var arraydiv2 = this.state.two.map((note) => {
            if (note !== "undefined")
                return (
                    <Panel note={note} />
                )


        });
        var arraydiv3 = this.state.three.map((note) => {

            return (
                <Panel note={note} />
            )


        });


        const display = this.props.toggleDisplay ? style.clickedToggle : style.articleButton
        const story = this.props.toggleDisplay ? style.articleButton : style.clickedToggle
        return (
            <Container fluid={true} className={style.dashboardDiv}>
                <Appheader />
                <div className={style.cardView}>
                    <div className={style.toggleDiv}>
                        <div className={style.toogleButton}>
                            <Button onClick={() => this.articleSelect()} variant="contained" id={display} > ARTICLE</Button>
                            <Button onClick={() => this.storySelect()} variant="contained" id={story} > STORY</Button>
                        </div>
                    </div>
                    <div className={style.displayCards}>
                        {
                            this.props.toggleDisplay ?
                                (
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
                                ) : (
                                    <div className={style.artcileDiv}>
                                        <Storypanel />
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

            </Container>
        )
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))