import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon with brand colors
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="position: relative; width: 40px; height: 40px;">
      <div style="
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, hsl(189 85% 40%) 0%, hsl(189 75% 50%) 100%);
        border: 3px solid hsl(84 81% 44%);
        border-radius: 50% 50% 50% 0;
        transform: translateX(-50%) rotate(-45deg);
        box-shadow: 0 8px 16px rgba(0,0,0,0.3), 0 0 20px rgba(156,225,55,0.4);
        animation: bounce 2s ease-in-out infinite;
      "></div>
      <div style="
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        z-index: 1;
      "></div>
    </div>
    <style>
      @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0) rotate(-45deg); }
        50% { transform: translateX(-50%) translateY(-10px) rotate(-45deg); }
      }
    </style>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
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

        // Add tile layer with better styling
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
          className: 'map-tiles',
        }).addTo(map);

        // Add custom marker with popup
        const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
        marker.bindPopup(`
          <div style="
            text-align: center; 
            padding: 16px 20px;
            font-family: 'Outfit', sans-serif;
            min-width: 200px;
          ">
            <div style="
              background: linear-gradient(135deg, hsl(189 85% 40%) 0%, hsl(189 75% 50%) 100%);
              color: white;
              padding: 8px 12px;
              border-radius: 8px 8px 0 0;
              margin: -16px -20px 12px -20px;
              font-weight: bold;
              font-size: 16px;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            ">${title}</div>
            <p style="
              font-size: 13px; 
              color: #444; 
              margin-bottom: 12px;
              line-height: 1.4;
            ">${address}</p>
            ${googleMapsUrl ? `
              <a href="${googleMapsUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style="
                   display: inline-flex;
                   align-items: center;
                   gap: 6px;
                   background: linear-gradient(135deg, hsl(84 81% 44%) 0%, hsl(84 71% 54%) 100%);
                   color: #000;
                   padding: 10px 16px;
                   border-radius: 8px;
                   text-decoration: none;
                   font-weight: bold;
                   font-size: 13px;
                   box-shadow: 0 4px 12px rgba(156,225,55,0.3);
                   transition: all 0.3s ease;
                 "
                 onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 16px rgba(156,225,55,0.5)';"
                 onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(156,225,55,0.3)';"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Apri in Google Maps
              </a>
            ` : ''}
          </div>
        `, {
          maxWidth: 300,
          className: 'custom-popup'
        }).openPopup();

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
      style={{ 
        minHeight: '256px',
        filter: 'contrast(1.05) saturate(1.1)',
      }}
    />
  );
};

export default InteractiveMap;
