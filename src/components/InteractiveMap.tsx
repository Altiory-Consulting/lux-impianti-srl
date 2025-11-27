import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface InteractiveMapProps {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  zoom?: number;
  googleMapsUrl?: string;
}

const InteractiveMap = ({ latitude, longitude, title, address, zoom = 15, googleMapsUrl }: InteractiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Clean up any existing map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize map with a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (!mapRef.current) return;

      try {
        // Initialize map
        const map = L.map(mapRef.current, {
          scrollWheelZoom: false,
          zoomControl: true,
        }).setView([latitude, longitude], zoom);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker with popup
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <p style="font-weight: bold; margin-bottom: 4px; font-size: 14px;">${title}</p>
            <p style="font-size: 12px; color: #666; margin-bottom: 8px;">${address}</p>
            ${googleMapsUrl ? `<a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #9CE137; color: #000; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 12px;">Apri in Google Maps</a>` : ''}
          </div>
        `).openPopup();

        // Make entire map clickable to open Google Maps
        if (googleMapsUrl) {
          map.on('click', () => {
            window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
          });
          
          // Also make marker clickable
          marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
          });
        }

        mapInstanceRef.current = map;

        // Fix map sizing after initialization
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        }, 100);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.error('Error removing map:', error);
        }
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, title, address, zoom, googleMapsUrl]);

  return (
    <div
      ref={mapRef}
      className="h-full w-full rounded-lg"
      style={{ minHeight: '256px' }}
    />
  );
};

export default InteractiveMap;
