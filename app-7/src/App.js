import React, {Component} from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      toDoList: [],
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({toDoList: [...this.state.toDoList, task]});
  }

  render(){
    return(
      <div>
        <h1> My to-do list: </h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.toDoList} />
      </div>
    )
  }
}
