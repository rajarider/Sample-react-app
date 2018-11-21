import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Mark from './../images/marker.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class  extends Component{
    static defaultProps = {
        center: {
          lat: 9.934543,
          lng: 78.085311
        },
        zoom: 11
      };



     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div className="col-lg-6">
            <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyD5gyipWlgR1LCOiWp6eogCkuWZPeCRIiA' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
             
            </GoogleMapReact>
          </div>
          </div>
          
        );
      }
    }


//     user = [{"first_name"=> "raja",  "last_name"=> "rider", "age"=> "0"},
//   {"first_name"=> "raj",  "last_name"=> "rid", "age"=> "10"}]

// age = [0, 10]

// # a = "5"
// # a = a.to_i


// min_age = age.min

// min_age = min_age.to_s


// for i in 0..(user.length - 1)

//   if(user[i]["age"] == min_age)

//     puts user[i]["first_name"]


  
//   end 


// end

