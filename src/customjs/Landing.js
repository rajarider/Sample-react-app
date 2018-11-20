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

                <WaterRipple />

            </div>

        )
    }

}

function WaterRipple() {

    return (
        <div>

            <div className="waterRippleWrap">

                <img src={WaterImage} id="waterImage" />
                <canvas  id="waterCanvas"></canvas>

            </div>
        </div>
    );


}
export default Landing;