import React, { Component } from "react";


class Home extends Component {

  constructor() {
    super()
    this.state = { inputValue: 'waiting....' }
  }


  redirectFunction = () => {

    this.props.history.push(`/`)

  }

  updateInputValue = (e) => {

    this.setState({ inputValue: e.target.value })
  }


  render() {



    return (
      <div>

        <div className="col-lg-6">

          <h4>HOME PAGE</h4>
          <button onClick={this.redirectFunction}>redirect to Landing page</button>

        </div>

        <div className="col-lg-6">

          <div className="sampleFormWrap">

            <h4>PLEASE TYPE SOMETHING ON INPUT BOX</h4>
            <input onChange={this.updateInputValue.bind(this)} />

            <h4>{this.state.inputValue}</h4>

          </div>

        </div>

      </div>
    );
  }
}


export default Home;