import React, {Component} from 'react';
import roses from './Rose.js';
import './../css/flower.css';

class Flower extends Component{
    constructor(props){
        super(props)
        this.state = {checkArray: { names: roses}, i: 0};

        // this.renderIcon = this.renderIcon.bind(this);

    }

    countdown = setInterval(() =>{
        console.log('raka')

        if(this.state.i == this.state.checkArray.names.length - 1){

            this.setState({i: 0})

        }
        else{
            this.setState({
                i: this.state.i + 1
              })
        }
       

    }, 1000);


    
   
    render()
    
    {

  console.log('---------------------->',this.state.i)

        return(
            <div className="flowerWrap">

                <h1>FLOWERS</h1>
               
                <ul>
                    {roses.map(rose => (
                    <li className="singleRoseWrap">
                        <img src={rose.image}/><span>{rose.name}</span>
                    </li>
                    ))}
                </ul>

                <center>

                    <div className="flowerChangeWrap">

                    <img src={this.state.checkArray.names[this.state.i].image}/>

                    <span>{this.state.checkArray.names[this.state.i].name}</span>

                    </div>
                    
                </center>
                
               

            </div>

        );
    }
}

export default Flower;