import React, {Component} from 'react';

export default class List extends Component{
  constructor(){
    super();

    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    };
  }

  render(){
    let listDisplay = this.state.list.map((el, index) => {
      return <h2 key={index}>{el}</h2>
    });

    return <div> {listDisplay} </div>;
  }
}
