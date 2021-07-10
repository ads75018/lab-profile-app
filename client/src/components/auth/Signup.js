// auth/Signup.js

import React, { Component } from 'react';
import {signup} from './auth-service';
import { Link } from 'react-router-dom'; 



class Signup extends Component {

  state = { username: '', password: '', campus: '', course: '' }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campus;
    const course = this.state.course;
 
    signup(username, password,campus, course)
      .then(response => {
        this.setState({username: "", password: "", campus: "", course: ""});
        // this.props.updateUser(response)
      })
      .catch(error => console.log(error))
  }
 
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
 




  render() {
    return (
      <div>
        {/* HERE */}
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <label>Campus:</label>
          <select name="campuses" value={this.state.campus} onChange={e => this.handleChange(e)} />

          <label>Course:</label>
          <select name="courses" value={this.state.course} onChange={e => this.handleChange(e)} />
          
          <button>I Signup</button>
        </form>
 
        <p>Already have account? 
          <Link to={"/"}>Login</Link>
        </p>
 
      </div>
    )
  }

export default Signup;


