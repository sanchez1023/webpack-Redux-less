import React, { Component } from "react";
import style from "./login.less";
import Card from '@material-ui/core/Card';
import { TextField, InputAdornment, IconButton, } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import Button from 'react-bootstrap/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from 'classes'
import { INPUT_EMAIL, INPUT_PASSWORD, LOGIN_USER, CLOSE_TOAST } from "../../constants/actionTypes";
import { connect } from 'react-redux';
import { compose } from "recompose";
import { message } from 'antd';
import { Spin, Alert } from 'antd';
import rootSaga from "../../reduxSaga/loginSaga";
import 'antd/dist/antd.less';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import SnackBar from 'react-material-snackbar';




import Usercontroller from "../../Usercontroller";



const mapStateToProps = state => ({ ...state.loginPage });
const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
        dispatch({ type: INPUT_EMAIL, key: 'email', value }),
    onChangePassword: value =>
        dispatch({ type: INPUT_PASSWORD, key: 'password', value }),
    onSubmit: data =>
        dispatch({ type: LOGIN_USER, payload: data = data }),
    closeError: () =>
        dispatch({ type: CLOSE_TOAST })
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
        this.handleClose = () => this.props.closeError();


        this.onLogin = (email, password) => ev => {
            ev.preventDefault();
            console.log("email ------" + email);
            console.log("paswword ------" + password);
            var data = {
                email: email,
                password: password
            }
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 3 && (email.length - lastDotPos) > 3)) {
                console.log('in email check')
                this.setState({
                    emailError: "Email is badly formated"
                });
            }

            if (this.state.emailError === "" && this.state.passwordError === "") {

                {
                    this.setState({
                        loading: true,
                    })
                    console.log("loading --" + this.state.loading);
                    message.config({
                        top: 100,
                        left: 300,
                        duration: 6,
                        maxCount: 3,
                    })
                    message.loading('processing ', 5)
                        .then(() => message.success(this.props.success, 2.5))
                    this.props.onSubmit(data)


                }
                if (this.props.success.status === true) {
                    s // localStorage.setItem('token', this.props.token);
                    this.props.history.push('/home')
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
        if (this.props.success.message) {
            toast.success("Success Notification !", {
                position: toast.POSITION.BOTTOM_LEFT, autoClose: 6000
            });
        }
        if (this.props.error.message) {
            toast.error(this.props.error.message, {
                position: toast.POSITION.BOTTOM_RIGHT, autoClose: 6000
            });
        }

        console.log('erroe in login ' + JSON.stringify(error))
        console.log('succes in login ' + JSON.stringify(success))
        console.log("is loading in ---" + this.props.isLoading)


        return (
            this.props.success.data ?
                (<Redirect
                    to={{
                        pathname: "/home",
                        // state: { from: props.location }
                    }}
                />
                ) : (
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
                                            <Button type="submit" variant="contained" disabled={this.props.isLoading} id={style.loginButton} > Login</Button>

                                        </div>
                                    </div>

                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        open={this.props.success.message}
                                        autoHideDuration={600}
                                        message={this.props.success.message}

                                    />
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        open={this.props.errorToast}
                                        autoHideDuration={6000}
                                        onClose={this.handleClose}
                                        message={this.props.error.message}

                                    />


                                </form>
                            </Card>
                        </div>

                        <ToastContainer />
                    </div>
                )
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