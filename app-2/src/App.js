import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       friends: ["Rachel", "Monica", "Pheobe", "Joey", "Chandler", "Ross", "Marcel"]
    };
  }


render() {
  let friendsList = this.state.friends.map((element, index, arr) => {
     return <li>{element}</li>
  })

  return (
    <ul>
       {friendsList}
    </ul>
  )


}

}

export default App;
