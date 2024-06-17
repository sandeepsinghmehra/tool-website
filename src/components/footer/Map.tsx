"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const iconUrl = icon.src;
const shadowUrl = iconShadow.src;

let DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: shadowUrl
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map: React.FC<any> = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  const latitude = 29.5591028661126;
  const longitude = 79.38037225150873;

  useEffect(() => {
    if (mapRef.current) {
      // If map is already initialized, return
      return;
    }

    if (mapContainerRef.current) {
      // Initialize the map
      mapRef.current = L.map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom: 12,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(mapRef.current);

      L.marker([latitude, longitude])
        .addTo(mapRef.current)
        .bindTooltip("Software Services")
        .openTooltip();
    }

    // Cleanup function to remove the map instance
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude]);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ height: '400px', width: '100%' }} 
    />
  );
};

export default Map;
