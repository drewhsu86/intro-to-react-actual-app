import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div className="helloWorld">
                Hello {this.props.addressee}!
            </div>
        )
    }
}
