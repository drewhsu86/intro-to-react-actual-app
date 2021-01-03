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
    pingAPI = () => {
        // copied over directly from JS except for this.state
        // we can send AJAX request to a server with our login data 
        // fetch(url, options)
        fetch('http://localhost:3000/testpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            })
        })
        .then( response => response.json())
        .then( response => {
            console.log(response)
        })
    }

    // handler functions
    // given a state, 'username' or 'password', we set the state using the value of the event's target (input tag)
    handleStateChange = (e, stateName) => {
        this.setState({
            [stateName]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newMessage = `You have submitted the following: USERNAME: ${this.state.username}, PASSWORD: ${this.state.password}.`

        this.pingAPI()

        this.setState({
            username: '',
            password: '',
            submitted: newMessage
        })
    }

    render() {
        return (
            <div className="login">
                <ul id="loginRules">
                    {
                        // instead of the forEach from our JS app, we use array.map to return an array of JSX
                        loginRules.map((item, ind) => {
                            return <li key={ind}>{item}</li>
                        })
                    }
                </ul>

                <form id="loginForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="usernameInput">Username</label>
                    <input id="usernameInput" type="text" 
                    value={this.state.username}
                    onChange={e => this.handleStateChange(e, 'username')}/>

                    <label htmlFor="passwordInput">Password</label>
                    <input id="passwordInput" type="password" 
                    value={this.state.password}
                    onChange={e => this.handleStateChange(e, 'password')}/>

                    <input type="submit" />
                </form>

                <div id="submittedOutput"> {this.state.submitted} </div>

            </div>
        )
    }
}
