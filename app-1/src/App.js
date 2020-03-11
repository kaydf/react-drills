import React from 'react';


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      userInput: ""
    }
  }

  updateInput = e => {
    this.setState({userInput: e.target.value })
  }

render() {
  return (
    <div>
      <input onChange={this.updateInput}/>
      <p>{this.state.userInput}</p>
    </div>
    )
  }
}

export default App;
