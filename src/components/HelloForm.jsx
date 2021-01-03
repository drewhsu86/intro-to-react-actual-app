import React, { Component } from 'react'

export default class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addresser: ""
        }
    }

    // function to take the input's value and put it on the state 'addresser'
    // we are inside a class, don't need const or function keyword
    handleAddresser = e => {
        this.setState({
            addresser: e.target.value
        })
    }


    render() {
        console.log('== rendering ==')
        return (
            <div className="helloWorld">
                Hello {this.props.addressee}! <br/>
                { this.state.addresser ? `I am ${this.state.addresser}` : null }

                <br />
                <label>Enter your name</label>
                <input onChange={this.handleAddresser}></input>
            </div>
        )
    }
}
