import React, { Component } from "react";

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
     
    }

  }

  raja = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

 

  render() {
    return (
      <div>
       
        
        <h4>{this.state.count}</h4>
        <button onClick={this.raja}>Click Me</button>


      </div>



    );
  }
}


 
export default Contact;