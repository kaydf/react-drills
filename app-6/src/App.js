import React from 'react';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
 handleChange(e) {
   this.setState({userInput: e.target.value})
 }
 handleClick = () => {
   let copy = this.state.todos.slice();
   copy.push(this.state.userInput);
   this.setState({todos: copy})
 }
render(){
  return (
    <div>
      <h1>My Todos!</h1>
      <input onChange={this.handleChange} />
      <button onClick={this.handleClick}>Add To List!</button>
      <ul>{this.state.todos}</ul>
    </div>
    )
  }
}


export default App;
