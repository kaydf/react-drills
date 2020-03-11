import React, {Component} from 'react';

class Image extends Component {
   render() {
       return (
           <div>
               <img width="700px" height="700px" alt="img" src={this.props.url} />
               <h1>{this.props.name}</h1>
           </div>
       )
   }
}

export default Image;