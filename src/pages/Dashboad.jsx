import React, { Component } from "react";
import Appheader from "../components/Appheader";
import Panel from "../components/Panel";
import style from "./Dashboard.less"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Storypanel from "../components/Storypanel";
import Addredirectcard from "../components/Addredirect";
import { OPEN_ADDREDIECT_DAILOG, TOGGLE_DASHBOARD_STORY_SELECTED, TOGGLE_DASHBOARD_ARTICLE_SELECTED } from "../constants/actionTypes";
import { connect } from 'react-redux';
import Imageselect from "../components/Imageselect";


const mapDispatchToProps = dispatch => ({
    openRedirectdailog: () =>
        dispatch({ type: OPEN_ADDREDIECT_DAILOG }),
    storySelected: () =>
        dispatch({ type: TOGGLE_DASHBOARD_STORY_SELECTED }),
    artcileSelected: () =>
        dispatch({ type: TOGGLE_DASHBOARD_ARTICLE_SELECTED })



})
function mapStateToProps(state) {
    console.log('article in dash---' + state.dashboard.article)

    return {
        toggleDisplay: state.dashboard.article,

    }
}

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.addRedirect = () => this.props.openRedirectdailog();
        this.articleSelect = () => this.props.artcileSelected();
        this.storySelect = () => this.props.storySelected();
    }



    render() {
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
                                    <div className={style.artcileDiv}>
                                        <Panel />
                                        <Panel />
                                        <Panel />
                                        <Panel />
                                        <Panel />

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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)