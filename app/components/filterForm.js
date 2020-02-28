import React, { Component } from 'react'
type Props = {};

export default class filterForm extends Component <Props>{
    props: Props;

    this.state = {
      programFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      programFilter: e.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by program: </label>
        <input type="text" id="filter" 
          value={this.state.programFilter}