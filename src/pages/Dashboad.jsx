import React, { Component } from "react";
import Appheader from "../components/Appheader";
import Panel from "../components/Panel";
import style from "./Dashboard.less"
import Container from "react-bootstrap/Container";
class Dashboard extends Component {
    render() {
        return (
            <Container fluid={true} className={style.dashboardDiv}>
                <Appheader />
                <div className={style.cardView}>
                    <Panel />
                    <div className={style.addButton}>
                        <img src={require('../assets/add.png')} />
                    </div>
                </div>

            </Container>
        )
    }

}
export default Dashboard;