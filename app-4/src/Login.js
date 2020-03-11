import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
          username: '',
          password: ''
        }
      
  this.updateInput = this.updateInput.bind(this);

}
usernameFunction(user){
    this.setState({ username: user });
}

passwordFunction(pass){
    this.setState({ password: pass });
}

alertFunction() {
    alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
   }
   
   render(){
       return (
         <div>
           <input onChange={e => this.passwordFunction(e.target.value)}/>
           <input onChange={e => this.usernameFunction(e.target.value)}/>
           <button onClick={this.alertFunction}>Login</button>
         </div>
       );
     }
    
    }
   export default Login;
