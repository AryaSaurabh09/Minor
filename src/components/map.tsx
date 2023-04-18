import GoogleMapReact from 'google-map-react';
import {Component} from 'react'

class Map extends Component{
    
    static defaultProps = {
        center: {
            lat: 31.39715612848645,
            lng: 75.53604841232301,
        },
        zoom: 17,
        key: 'AIzaSyAVcA8AwyUkedvJlnEcXF5BFUaq7d5IbUo',
    };
    renderMarkers(map:any, maps:any) {
      new maps.Marker({
        position: {
          lat: 31.39715612848645,
          lng: 75.53604841232301,
        },
        map,
        title: "Prayaas, NIT Jalandhar",
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