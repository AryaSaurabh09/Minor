import GoogleMapReact from 'google-map-react';
import {Component} from 'react'

class Map extends Component{
    
    static defaultProps = {
        center: {
            lat: 10.7589,
            lng: 78.8132,
        },
        zoom: 17,
        key: 'AIzaSyAVcA8AwyUkedvJlnEcXF5BFUaq7d5IbUo',
    };
    renderMarkers(map:any, maps:any) {
      new maps.Marker({
        position: {
          lat: 10.7589,
          lng: 78.8132,
        },
        map,
        title: "ProfNITT, NIT Trichy",
      });
    }

    render(){
    return (
        <div>
            <div
                style={{
                    width: '75vw',
                    height: '60vh',
                }}
            >
                <GoogleMapReact
                    defaultCenter={Map.defaultProps.center}
                    defaultZoom={Map.defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    bootstrapURLKeys={{ key: 'AIzaSyAVcA8AwyUkedvJlnEcXF5BFUaq7d5IbUo'  }}
                    onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
};
}
export default Map;