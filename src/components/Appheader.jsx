import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Input, Select, Icon } from 'antd';
import Col from 'react-bootstrap/Col';
import style from "./login.less";
import { Avatar, FormHelperText, InputBase, IconButton } from "@material-ui/core";
const Option = Select.Option;
const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
);

class Appheader extends Component {
    render() {
        return (
            <div className={style.appHeader}>

                <Row>
                    <Col xs={2} className={style.firstColumn}>
                        <div>
                            <img style={{ padding: 10 }} src={require('../assets/Group 441.png')} />
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
                                    <img style={{ height: 20, width: 20 }} src={require("../assets/magnifying-glass-icon.png")}
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
                                <img className="imageOnheader" src={require('../assets/Group 2868.png')} />
                            </div>
                            <div>
                                <img className="imageOnheader" src={require("../assets/ic_notifications_24px.png")} />
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