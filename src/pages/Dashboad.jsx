import React, { Component } from "react";
import Appheader from "../components/Appheader";
import Panel from "../components/Panel";
import style from "./Dashboard.less"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Storypanel from "../components/Storypanel";


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            openAddredirect: false,
        }
        this.addRedirect = this.addRedirect.bind(this)
    }

    addRedirect() {
        this.setState({
            openAddredirect: true
        })
        console.log("in open redirect");

    }
    render() {
        return (
            <Container fluid={true} className={style.dashboardDiv}>
                <Appheader />
                <div className={style.cardView}>
                    <div className={style.toggleDiv}>
                        <div className={style.toogleButton}>
                            <Button variant="contained" id={style.articleButton} > ARTICLE</Button>
                            <Button variant="contained" id={style.storyButton} > STORY</Button>
                        </div>
                    </div>
                    <div className={style.displayCards}>
                        <Panel />
                        <Panel />
                        <Panel />
                        <Panel />
                        <Storypanel />
                    </div>

                    <div className={style.addButton}>
                        <img onClick={() => this.addRedirect()} src={require('../assets/add.png')} />
                    </div>
                </div>
                <Addredirectcard open={this.state.openAddredirect} />
            </Container>
        )
    }

}
export default Dashboard;