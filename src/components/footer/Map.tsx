"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useRef } from 'react';

// Convert StaticImageData to URL string
const iconUrl = icon.src;
const shadowUrl = iconShadow.src;
let DefaultIcon = L.icon({
    iconUrl: iconUrl,
    shadowUrl: shadowUrl
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map:React.FC<any> = () => {
    const mapRef = useRef(null);
    
    const latitude = 29.5591028661126;
    const longitude = 79.38037225150873;
    
    return (
        <MapContainer 
            ref={mapRef}
            style={{height: '400px', width: '100%'}} 
            center={[latitude, longitude]}
            zoom={12} 
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                key={"Ghanghreti, Betalghat, Nainital, Uttarakhand, 263134"}
                position={[latitude, longitude]}
            >
                <Tooltip>Software Services</Tooltip>
            </Marker>
        </MapContainer>
    )
}
// Disable server-side rendering for this component
// Map.ssr = false;
export default Map;