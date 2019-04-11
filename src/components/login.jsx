import React, { Component } from "react";
import style from "./login.less";
import Card from '@material-ui/core/Card';
import { TextField, InputAdornment, IconButton, } from "@material-ui/core";
import logo from ".././assets/Logo.svg"
import Button from 'react-bootstrap/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom'


const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            adornedEnd: {

                paddingRight: 0
            }
        }
    }
});
const styles = textjust => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    // cssFocusedLabel: {
    //   color : '#EFA500' 
    // },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#EFA500 !important',
        }
    },

    cssFocused: {
        borderColor: '#EFA500 !important',
        color: '#EFA500 !important'

    },

    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#EFA500 !important'
    },

});

const texttheme = createMuiTheme({
    overrides: {
        MuiFormLabel: {
            root: {
                MuiFormLabel: {
                    focused: {
                        color: '#EFA500'
                    }
                }
            }
        }






    }
});
class Login extends Component {

    constructor() {
        super();
        this.state = {
            passwordIsMasked: false
        }
    }
    render() {
        return (
            <div>
                <div className={style.loginCard}>
                    <Card style={{
                        borderRadius: 120, height: 126,
                        width: 126, position: 'relative',
                        marginBottom: -100
                    }}>
                        <div className={style.iconDiv}>
                            <img src={require("../assets/Logo.png")} />
                        </div>
                    </Card>
                    <Card className={style.cardComponents}>





                        <div className={style.textfieldAndbuttondiv}>
                            <div className={style.textfeildDiv}>
                                <TextField
                                    variant="outlined"
                                    id={style.textField}
                                    label="Email"
                                    placeholder=" E-mail"
                                />
                            </div>
                            <MuiThemeProvider theme={texttheme}>
                                <div className={style.textfeildDiv}>
                                    <TextField
                                        variant="outlined"
                                        id={style.textField}
                                        label="Password"
                                        placeholder="password"
                                    // InputProps={{
                                    //     endAdornment: (
                                    //         <InputAdornment position="end">
                                    //             <IconButton aria-label="Toggle password visibility"
                                    //                 onClick={() => { this.setState({ passwordIsMasked: !this.state.passwordIsMasked }) }} >
                                    //                 {this.state.passwordIsMasked ? <Visibility /> : <VisibilityOff />}
                                    //             </IconButton> </InputAdornment>),
                                    // }}
                                    />

                                </div>
                            </MuiThemeProvider>
                            <div className={style.forgetpasswordDiv}>
                                <div className={style.forgetPassword}>
                                    <p>Forget Password ?</p>
                                </div>

                            </div>
                            <div className={style.loginbuttonDiv} >
                                <Button variant="contained" id={style.loginButton} > Login</Button>

                            </div>
                        </div>


                        <div>

                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Login;