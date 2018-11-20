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

    // const Marker = props => {
    //   return <div className="SuperAwesomePin"><img style={{width: '50px', height: '50px'}} src={Mark} /></div>
    // }

           // <Marker lat={this.props.lat} lng={this.props.lng} /> 
