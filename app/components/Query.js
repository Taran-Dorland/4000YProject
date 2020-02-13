import React, { Component } from 'react';

export default class Query extends Component<Props>{ 

    props: Props;

 state = {
     on: false,

 }
toggle = () => {
    this.setState({
        on: !this.state.on
    })
    
}

render(){
    return (
<div>
    
    {this.state.on && <h1>Toggle me</h1>}
    
     <button onClick={this.toggle}>Show/Hide</button>
</div>
    );
}



}