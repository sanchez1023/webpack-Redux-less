import React, { Component } from "react";
import style from "./login.less";
import Card from '@material-ui/core/Card';
import { TextField, InputAdornment, IconButton, } from "@material-ui/core";

import Button from 'react-bootstrap/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from 'classes'
import { INPUT_EMAIL, INPUT_PASSWORD, LOGIN_USER } from "../../constants/actionTypes";
import { connect } from 'react-redux';
import { compose } from "recompose";
import login from "../../userController";
import { message } from 'antd';
import { Spin, Alert } from 'antd';
import rootSaga from "../../reduxSaga/loginSaga";
import 'antd/dist/antd.less';


var a = require('../../userController');



const mapStateToProps = state => ({ ...state.loginPage });
const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
        dispatch({ type: INPUT_EMAIL, key: 'email', value }),
    onChangePassword: value =>
        dispatch({ type: INPUT_PASSWORD, key: 'password', value }),
    onSubmit: (data) =>
        dispatch({ type: LOGIN_USER, payload: rootSaga(data) }),
    // onUnload: () =>
    //     dispatch({ type: LOGIN_PAGE_UNLOADED })
});

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            adornedEnd: {

                paddingRight: 0
            }
        },
        MuiFormLabel: {
            focused: {
                color: '#EFA500 !important'
            }
        },
        cssOutlinedInput: {
            '&$cssFocused $notchedOutline': {
                borderColor: '#EFA500 !important',
                color: '#EFA500 !important'
            }
        },
    }
});

const styles = ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    cssFocusedLabel: {
        color: '#EFA500 !important'
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#EFA500 !important',
            color: '#EFA500 !important'
        }
    },

    cssFocused: {
        borderColor: '#EFA500 !important',
        color: '#EFA500 !important'

    },

    notchedOutline: {
        borderWidth: '3px',
        borderColor: '#EFA500 !important'
    },

});

const texttheme = createMuiTheme({
    overrides: {

        MuiFormLabel: {
            focused: {
                color: '#EFA500 !important'
            }
        }
    }

});






class Login extends Component {

    constructor() {
        super();
        this.changeEmail = event => this.validateEmail(event.target.value);
        this.changePassword = event => this.validatePassword(event.target.value);

        this.onLogin = (email, password) => ev => {
            ev.preventDefault();
            console.log("email ------" + email);
            message.config({
                top: 100,
                left: 300,
                duration: 6,
                maxCount: 3,
            })
            message.loading('Proccessing..', 5)
                .then(() => message.success('Loading finished', 2.5))
            const data = {
                email: email,
                password: password,
            }
            if (this.state.emailError === "" && this.state.passwordError === "") {

                {
                    this.setState({
                        loading: true,
                    })
                    console.log("loading --" + this.state.loading)
                    this.props.onSubmit(data);
                    // this.props.history.push('/home');
                }
                // this.props.onSubmit(email, password);
            }
        }
        this.state = {
            passwordIsMasked: false,
            emailError: "",
            passwordError: "",
            loading: false,

        }
    }
    validateEmail(email) {
        var flag = false;

        if (!email) {
            this.setState({
                emailError: "*Required"
            })
        }
        else if (email.length >= 1) {
            this.setState({
                emailError: ""
            })

        }
        else if (email.length >= 2) {
            console.log("email---" + email)
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 3 && (email.length - lastDotPos) > 3)) {
                flag = true;
                this.state.emailError = "Email is badly formated";
            }
        }

        this.props.onChangeEmail(email);


    }
    validatePassword(password) {
        if (password.length < 6) {
            this.setState({
                passwordError: "6 characters are required"
            })
        }
        else {
            this.setState({
                passwordError: ""
            })

        }
        this.props.onChangePassword(password)
    }

    render() {
        const email = this.props.email
        const password = this.props.password
        const classes = this.props;
        const success = this.props.success
        const error = this.props.error
        console.log('erroe in login ' + error)
        console.log('succes in login ' + success)
        console.log("is loading in ---" + this.props.isLoading)

        return (
            <div className={style.loginMaindiv}>
                <div className={style.loginCard}>
                    <Card id={style.headerlogoDiv}>


                        <div className={style.iconDiv}>
                            <img src={require('../../assets/Logo.png')} />
                        </div>
                    </Card>
                    <Card className={style.cardComponents}>

                        <Spin spinning={this.state.loading} delay={500}></Spin>
                        <div style={{ marginTop: 16 }} />
                        <form onSubmit={this.onLogin(this.props.email, this.props.password)}>

                            <div className={style.textfieldAndbuttondiv}>
                                <fieldset>
                                    <MuiThemeProvider theme={texttheme}>
                                        <div className={style.textfeildDiv}>
                                            <TextField
                                                variant="outlined"
                                                id={style.textField}
                                                label="Email"
                                                placeholder=" E-mail"
                                                value={email}

                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.cssFocusedLabel,
                                                        focused: classes.cssFocused,
                                                    },
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.cssFocused,

                                                        focused: classes.cssFocused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                }}
                                                onChange={this.changeEmail}
                                                error={this.state.emailError}
                                                helperText={this.state.emailError} />
                                        </div>
                                    </MuiThemeProvider>
                                </fieldset>
                                <fieldset>
                                    <MuiThemeProvider theme={theme}>
                                        <div className={style.textfeildDiv}>
                                            <TextField
                                                variant="outlined"
                                                id={style.passwordtextField}
                                                label="Password"
                                                placeholder="password"
                                                value={password}
                                                onChange={this.changePassword}
                                                error={this.state.passwordError}
                                                helperText={this.state.passwordError}
                                                type={!this.state.passwordIsMasked ? 'password' : 'text'}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <div className={style.maskedIcon} onClick={() => this.setState({ passwordIsMasked: !this.state.passwordIsMasked })}>
                                                                {this.state.passwordIsMasked ? <Visibility /> : <VisibilityOff />}
                                                            </div>
                                                        </InputAdornment>
                                                    ),
                                                    classes: {
                                                        root: classes.cssFocused,

                                                        focused: classes.cssFocused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.cssFocusedLabel,
                                                        focused: classes.cssFocused,
                                                    },
                                                }}



                                            />

                                        </div>
                                    </MuiThemeProvider>
                                </fieldset>
                                <div className={style.forgetpasswordDiv}>
                                    <div className={style.forgetPassword}>
                                        <p>Forget Password ?</p>
                                    </div>

                                </div>
                                <div className={style.loginbuttonDiv} >
                                    <Button type="submit" variant="contained" id={style.loginButton} > Login</Button>

                                </div>
                            </div>


                            <div>

                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Login);