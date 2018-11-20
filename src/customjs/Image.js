import React, { Component } from 'react';
import Cart from './../images/test.jpeg';
import Cart1 from './../images/test1.jpeg';
import ReactPlayer from 'react-player'

const $ = window.$;

const customVedio = {
    raja: require("../vedio/sampleVedio.mp4")
  };

function ImageTemplate(props) {
    const name = props.name;
    const position = props.position;

    return (
            <div className="col-md-2">
                <div className="thumbnail">
                    <img src={props.imageUrl} />
                    <div className="caption">
                        <h4 className="name">{name}</h4>
                        <p className="position">{position}</p>
                    </div>
                </div>
            </div>

    );
}

class Image extends Component {
    componentDidMount() {
        $('.carousel').carousel({
            interval: 1000 * 2
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Meet Our Team</h2>
                    
                <div  className="row">

                    <ImageTemplate imageUrl={Cart} name="Krishna" position="Chief Executive Officer (CEO)" />
                    <ImageTemplate imageUrl={Cart1} name="Raja" position="Co-Founder" />
                    <ImageTemplate imageUrl={Cart} name="Raja1" position="Manager" />
                    <ImageTemplate imageUrl={Cart} name="Raja2" position="Officer" />

               </div>
               <div className="row">

                <Carousel></Carousel>

                <Vedio></Vedio>

                </div>
            </div>
        );
    }
}

function Carousel() {

    return (

        <div className="col-lg-6">
            <div className="customCarousel">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                   <div className="carousel-inner">

                        <div className="item active">
                            <img src={Cart} />

                        </div>

                        <div className="item">
                            <img src={Cart1} />


                        </div>



                    </div>


                </div>
            </div>
        </div>

    );
}

function Vedio(){

   return (
    <div className="col-lg-6">

        <ReactPlayer
          url= {customVedio.raja}
          className='react-player'
          playing
        />
    </div>
   )
   

}

export default Image;