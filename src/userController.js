import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store, { browserHistory } from "./store";
import { DATABASE_ERROR, LOGIN_SUCCESS, GETCARD_ASYNC } from './constants/actionTypes';
import { databaseConfig } from './config.js'



const auth = {
    /**
    * Logs a user in, returning a promise with `true` when done
    * @param  {string} username The username of the user
    * @param  {string} password The password of the user
    */
    login(data) {

        var headers = {
            'Content-Type': 'application/json'
        }
        try {
            return axios.post(databaseConfig.API, data, { headers: headers })
                .then(response => {
                    // Save token to local storage
                    console.log('response in config---' + JSON.stringify(response))

                    return response
                })

        }
        catch (error) {
            console.log("error in usectr--" + error)
            return Promise.resolve(false)

        }
    },

    retriveCard() {
        var headers = {
            'Content-Type': 'application/json',
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVjODY1YTc0OWZkNTkxNWFjNjQwZDZhNyJ9LCJpYXQiOjE1NTcwNjY4MDgsImV4cCI6MTU1NzE1MzIwOH0.nTXAeZfpIv5UKD66--FIb7e0DLxq3UXD_2E4vSWLWzQ'
        }

        return axios.get(databaseConfig.getcards, { headers: headers })
            .then(response => {
                console.log("response in ysdde--"+JSON.stringify(response.data))
                return response.data
            })


    }
}
export default auth;
