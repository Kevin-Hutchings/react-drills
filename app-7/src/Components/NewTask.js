import React, {Component} from 'react';

export default class NewTask extends Component{
   constructor(){
      super();

      this.state = {
         userInput: ''
      };

      this.handleAdd = this.handleAdd.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(val){
      this.setState({userInput: val});
   }

   handleAdd(){
      this.props.add(this.state.userInput);
      this.setState({userInput: ''});
   }

   render(){
      return(
         <div>
            <input 
               value={this.state.userInput} 
               placeholder='Enter new task'
               onChange={e => this.handleChange(e.target.value)} 
            />
            <button onClick={this.handleAdd}> Add </button>
         </div>
      )
   }
}