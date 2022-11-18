import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat:  0.39522977141941973,
      lng: 9.44117117301113 
    },
    zoom: 50, 
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBPcMw9CRMX462NaPXDkv3hfvggvlM1_cM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={0.39522977141941973}
          lng={9.44117117301113}
          text=""
        />
      </GoogleMapReact>
    </div>
  );
}