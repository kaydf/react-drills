import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      friends: ['Rachel', 'Monica', 'Pheobe', 'Joey', 'Chandler', 'Ross']
    }; 
  }
  

updateInput(filter) {
  this.setState({ userInput: filter });
}


  render() {
    let friendsList = this.state.friends.filter((element, index) => {
    return element.includes(this.state.userInput);
    })
    .map((element, index) => {
      return <h2>{element}</h2>
    });
    return (
      <div className="App">
        <input placeholder="Pick a friend" onChange={e => this.updateInput(e.target.value)}/>
        {friendsList}
      </div>
    );
  }
}



export default App;
