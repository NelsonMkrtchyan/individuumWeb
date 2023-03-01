import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// 40.15123176305087, 44.500573092268
// AIzaSyCQXeUGlrNWNpJ9lAZ1_lxdMvDfkVyaXp4

const GoogleMapComponent = () => {
    return (
      <LoadScript googleMapsApiKey="AIzaSyCQXeUGlrNWNpJ9lAZ1_lxdMvDfkVyaXp4">
          <GoogleMap
            mapContainerStyle={{
                width: "60%",
                height: "20vw",
                borderRadius: "2vw"
            }}
            // center={{ lat: 40.15123176305087, lng: 44.500573092268 }}
            center={{ lat: 40.17932294727421, lng: 44.517237757670756 }}
            zoom={12}
          >
              <Marker
                key="marker_1"
                position={{ lat: 40.15140742273631, lng: 44.499909157443085 }}
              />
              <Marker
                key="marker_2"
                position={{ lat: 40.17932294727421, lng: 44.517237757670756 }}
              />
          </GoogleMap>
      </LoadScript>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default GoogleMapComponent;
