import React, {Component} from 'react';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val){
    this.setState({userInput: val});
  }

  render(){
    return(
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <h1>{this.state.userInput}</h1>
      </div>
    )
  }
}