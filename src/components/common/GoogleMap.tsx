// AIzaSyBc00hd4ALZ6ALmK69va0Jtk98w6tB0FS8
import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '95vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBc00hd4ALZ6ALmK69va0Jtk98w6tB0FS8' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/*<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />*/}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
