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
                    localStorage.setItem('token', response.data.token)
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
            'token': localStorage.getItem('token'),
        }

        return axios.get(databaseConfig.getcards, { headers: headers })
            .then(response => {
                console.log("response in ysdde--" + JSON.stringify(response.data))
                return response.data
            })


    },
    redirectAdd(data) {
        const token = localStorage.getItem('token')
        console.log("token in retrieve carf=--" + token)
        let body = JSON.stringify(data);
        alert(body);
        const payload = new FormData()


        payload.append("title", data.title)
        payload.append("image", data.image)
        payload.append("description", data.description)
        payload.append("redirect_link", data.redirect_link)
        payload.append("apply_redirect", data.apply_redirect)




        var headers = {
            'Content-Type': 'multipart/form-data',
            'token': localStorage.getItem('token'),
        }
        console.log("data in daddda---" + (payload));
        return axios.post(databaseConfig.addRedirect, payload, { headers: headers })
            .then(response => {
                alert(JSON.stringify(response.data));
                console.log("response in user ctr --" + JSON.stringify(response.data))
                return response.data
            })

    },
    updateRedirect(data) {
        var headers = {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
        const payload = new FormData()
        payload.append("title", data.title)
        payload.append("image", data.image)
        payload.append("description", data.description)
        payload.append("redirect_link", data.redirect_link)
        payload.append("apply_redirect", data.apply_redirect)
        payload.append("_id", data._id)


        return axios.put(databaseConfig.updateRedirect, payload, { headers: headers })
            .then(response => {
                console.log("response in ysdde--" + JSON.stringify(response))
                return response
            })
    }
}
export default auth;
