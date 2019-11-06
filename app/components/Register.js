import React, { Component } from 'react';
//import logo from ""
export class Register extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div className="base-container">
<div className="header">Register</div>
<div className="content">
    <div className="logo">
        <img src={login} />
    </div>
    <div className="form">
    <div className="form-group">
        <label htmlFor="username">Register</label>
        <input type="text" name="username" placeholder="username"/>
    </div>
    <div className="form-group">
        <label htmlFor="email">Register</label>
        <input type="email" name="email" placeholder="email"/>
    </div>
    <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="text" name="password" placeholder="password"/>
    </div>
</div>
        </div>
        <div className="form"></div>
        <button type="button" className="btn">Login </button>
        </div>
        
    }
}

