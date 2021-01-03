import React, { Component } from 'react'
import './styles.css'
import loginRules from './loginRules.json'

export default class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            submitted: " === No submission yet ==="
        }
    }

    // helper functions

    // handler functions

    render() {
        console.log(loginRules)
        return (
            <div>
                <ul id="loginRules"></ul>

                <form id="loginForm">
                    <label htmlFor="usernameInput">Username</label>
                    <input id="usernameInput" type="text"/>

                    <label htmlFor="passwordInput">Password</label>
                    <input id="passwordInput" type="password"/>

                    <input type="submit" />
                </form>

                <div id="submittedOutput"> {this.state.submitted} </div>

            </div>
        )
    }
}
