import React, {Component} from 'react';
import ToDo from './ToDo';

export default class App extends Component{
  constructor(){
    super();
    
    this.state = {
      toDoList: [],
      toDo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({toDo: e.target.value});
  }

  handleClick(){
    let toDoCopy = this.state.toDoList.slice();
    toDoCopy.push(this.state.toDo);
    this.setState({toDoList: toDoCopy, toDo: ''});
  }

  handleReset(){
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );

    this.setState({ 
      toDoList: [],
      toDo: ''
    });
  }

  render(){
    let listDisplay = this.state.toDoList.map((el, index) => {
      return <ToDo key={index} task={el}/>
    });

    return(
      <div>
        <h1>My to-do list:</h1>
        <input value={this.state.toDo} onChange={(e) => this.handleChange(e)}/>
        <button onClick={this.handleClick}> Add </button>
        <button className="confirmationButton" onClick={() => this.handleReset()}>clear</button>
        <ul>
          {listDisplay}
        </ul>
      </div>
    )
  }
}