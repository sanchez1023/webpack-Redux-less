import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Input, Select, Icon } from 'antd';
import Col from 'react-bootstrap/Col';
import style from "./login.less";
import { Avatar, FormHelperText, InputBase, IconButton } from "@material-ui/core";


class Appheader extends Component {
    render() {
        return (
            <div className={style.appHeader}>

                <Row className={style.row}>
                    <Col xs={2} className={style.firstColumn}>
                        <div>
                            <img className={style.mainLogo} src={require('../../assets/Group 441.png')} />
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div className={style.searchBardiv}>
                            <div className={style.sea} >
                                <IconButton
                                    size='large'
                                    id='searchButton'
                                    color='white'
                                >
                                    <img className={style.searchLogo} src={require("../../assets/magnifying-glass-icon.png")}
                                        alt="" />
                                </IconButton>

                                <InputBase
                                    placeholder="Search"
                                />


                            </div>
                        </div>





                    </Col>
                    <Col xs={3}>
                        <div className={style.row}>

                            <div>
                                <img className="imageOnheader" src={require('../../assets/ic_archive_24px.png')} />
                            </div>
                            <div>
                                <img className="imageOnheader" src={require("../../assets/ic_notifications_24px.png")} />
                            </div>

                            <Avatar />

                        </div>

                    </Col>
                </Row>

            </div>

        )
    }


}
export default Appheader;