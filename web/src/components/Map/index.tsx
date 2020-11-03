import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: -20.7906553, lng: -49.3388447 } }
                defaultZoom = { 14 }
            >
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                containerElement={ <div style={{ height: `100vh`, width: `100vw` }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
};

export default Map;

