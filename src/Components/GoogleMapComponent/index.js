import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// 40.15123176305087, 44.500573092268
// AIzaSyCQXeUGlrNWNpJ9lAZ1_lxdMvDfkVyaXp4

const GoogleMapComponent = () => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCQXeUGlrNWNpJ9lAZ1_lxdMvDfkVyaXp4"
        >
            <GoogleMap
                mapContainerStyle={{ width: '60%', height: '20vw', borderRadius: "2vw"}}
                center={{lat: 40.15123176305087, lng: 44.500573092268}}
                zoom={17}
            >
                <Marker
                    key="marker_1"
                    position={{lat: 40.15123176305087, lng: 44.500573092268}}
                />
                <></>
            </GoogleMap>
        </LoadScript>
    );
}


// eslint-disable-next-line import/no-anonymous-default-export
export default GoogleMapComponent;