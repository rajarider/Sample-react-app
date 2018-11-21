import React, { Component } from "react";
import WaterImage from './../images/image.jpg'

function FormValue(props) {
    console.log(props)
    if (props.name) {
        return <h4>Hi {props.name.detail} </h4>;

    }
    return <h4>Hi</h4>;
}

class Landing extends Component {



    render() {
        return (
            <div>

                <FormValue name={this.props.location.state}></FormValue>


            </div>

        )
    }

}

export default Landing;