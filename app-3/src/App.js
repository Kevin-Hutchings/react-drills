import React, {Component} from 'react';

export default class FilterList extends Component{
  constructor(){
    super();

    this.state = {
      userInput: '',
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    };
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  render(){
    let listDisplay =
      this.state.list.filter((el) => {
        return el.includes(this.state.userInput);
      })
        .map((el, index) => {
        return <h2 key={index}>{el}</h2>
      });

    return(
      <>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {listDisplay}
      </>
    )
  }
}

