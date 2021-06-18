import React, {Component} from 'react';

export default class Login extends Component{
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginAlert = this.loginAlert.bind(this);
  }

  handleUsernameChange(val){
    this.setState({username: val});
  }

  handlePasswordChange(val){
    this.setState({password: val});
  }

  loginAlert(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render(){
    return(
      <div>
        <input onChange={(e) => this.handleUsernameChange(e.target.value)}/>
        <input onChange={(e) => this.handlePasswordChange(e.target.value)}/>
        <button onClick={this.loginAlert}>Login</button>
      </div>
    )
  }
}