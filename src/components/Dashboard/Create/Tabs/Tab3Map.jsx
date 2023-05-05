import React ,{useState} from 'react'
import { useMapEvents, Marker , Popup } from 'react-leaflet'
export const Tab3Map = ({changeMarker}) => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(event) {
        map.locate()
        setPosition(event.latlng);
        console.log(event.latlng);
        changeMarker(event.latlng);
        
      },
      locationfound(e) {
       
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}
