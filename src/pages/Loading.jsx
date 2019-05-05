import React, { Component } from "react";
import store from '../store';
import { connect } from 'react-redux';
import { GET_CARDS } from "../constants/actionTypes";
import Dashboad from "./Dashboad";
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';

import { withRouter } from 'react-router-dom'
function mapStateToProps(state) {
    return {
        Loading: state.dashboard.loading
    }
}
class Loading extends Component {
    constructor() {
        super();
        this.state = {

        }

    }
    componentDidMount() {
        store.dispatch({ type: GET_CARDS })
    }
    render() {
        console.log("lading din d dnf---" + this.props.Loading)
        return (
            this.props.Loading ? (

                <div>
                    <LinearProgress></LinearProgress>
                    loading please wait

                </div>
            )
                : (
                    <Dashboad />
                )

        )
    }
}
export default withRouter(connect(mapStateToProps)(Loading))