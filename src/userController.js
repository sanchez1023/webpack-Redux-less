import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from "./store";
import { DATABASE_ERROR, LOGIN_SUCCESS } from './constants/actionTypes';
import { databaseConfig } from './config.js'


export default function login(email, password) {
    var data = {
        email: email,
        password: password
    }
    console.log("email in usctr" + email);
    console.log("pass in userctr" + password);



    var headers = {
        'Content-Type': 'application/json'
    }

    return axios.post(databaseConfig.API, data,
        { headers: headers })
        .then(response => {
            console.log("before response--" + response.data.message)
            if (response.status === databaseConfig.success) {
                console.log('response====' + response.data.status)
                console.log("response in userctrl  " + response.data.code)
                console.log("response in userctrl  " + response.config.cancelToken)
                var success = response.data.message
                console.log('succes messga ectr--' + success)
                // localStorage.setItem('token', response.data.token);
                // localStorage.setItem('username', response.data.userdetails.firstName + ' ' + response.data.userdetails.lastName);
                // callback(response)
                store.dispatch({ type: LOGIN_SUCCESS, success })
            }

        }).catch((error) => {
            const a = error.toJSON();
            console.log("response in userctrl  " + error);
            console.log("error in userctr" + a);
            store.dispatch({ type: DATABASE_ERROR, a })

        });



}