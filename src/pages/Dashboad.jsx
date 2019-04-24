import React, { Component } from "react";
import Appheader from "../components/Appheader";
import Panel from "../components/Panel";
import style from "./Dashboard.less"
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Storypanel from "../components/Storypanel";
import Addredirectcard from "../components/Addredirect";


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            openAddredirect: false,
            toggleDisplay: false,
        }
        this.addRedirect = this.addRedirect.bind(this)
        this.closeRedirect = this.closeRedirect.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    addRedirect() {
        this.setState({
            openAddredirect: true
        })
        console.log("in open redirect");

    }
    closeRedirect() {
        this.setState({
            openAddredirect: false,
        })
    }
    handleToggle() {
        this.setState({
            toggleDisplay: !this.state.toggleDisplay
        })
        console.log("handle toogle " + this.state.toggleDisplay);

    }
    render() {
        const display = this.state.toggleDisplay ? style.articleButton : style.clickedToggle
        const story = this.state.toggleDisplay ? style.clickedToggle : style.articleButton
        return (
            <Container fluid={true} className={style.dashboardDiv}>
                <Appheader />
                <div className={style.cardView}>
                    <div className={style.toggleDiv}>
                        <div className={style.toogleButton}>
                            <Button onClick={() => this.handleToggle()} variant="contained" id={display} > ARTICLE</Button>
                            <Button onClick={() => this.handleToggle()} variant="contained" id={story} > STORY</Button>
                        </div>
                    </div>
                    <div className={style.displayCards}>
                        {
                            !this.state.toggleDisplay ?
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

                    <div className={style.addButton}>
                        <img onClick={() => this.addRedirect()} src={require('../assets/add.png')} />
                    </div>
                    <Addredirectcard
                        open={this.state.openAddredirect}
                        close={this.closeRedirect}
                    />
                </div>

            </Container>
        )
    }

}
export default Dashboard;