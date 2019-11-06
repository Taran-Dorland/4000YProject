import React, { Component } from 'react';
//import logo from ""
export class login extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div className="base-container">
<div className="header">Login</div>
<div className="content">
    <div className="logo">
        <img src={login} />
    </div>
    <div className="form">
    <div className="form-group">
        <label htmlFor="username">username</label>
        <input type="text" name="username" placeholder="username"/>
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

