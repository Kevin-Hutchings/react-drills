import React, {Component} from 'react';
import ToDo from './ToDo';

export default class List extends Component{
   render(){
      let list = this.props.tasks.map((el, index) => {
         return <ToDo key={index} task={el} />;
      });

      return <div className="list">{list}</div>
   }
}
