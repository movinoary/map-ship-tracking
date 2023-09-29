// Module
import { useRef, useState } from "react";
import MapGL, { Image, Popup } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// Components
import Ship from "./components/ship";
import Harbor from "./components/harbor";
import Menu from "./components/menu";
// Icon
import icon_harbor1 from "./assets/harbor-1.png";
import icon_harbor2 from "./assets/harbor-2.png";
import icon_ship from "./assets/ship.png";
import icon_ship1 from "./assets/ship-1.png";
import icon_ship2 from "./assets/ship-2.png";
import icon_ship3 from "./assets/ship-3.png";
import icon_ship4 from "./assets/ship-4.png";
import icon_ship5 from "./assets/ship-5.png";
import icon_ship6 from "./assets/ship-6.png";
import icon_ship7 from "./assets/ship-7.png";
import icon_ship8 from "./assets/ship-8.png";
import icon_ship9 from "./assets/ship-9.png";

function App() {
  const mapRef = useRef();
  // Data Popup
  const [dataPopup, setDataPopup] = useState([]);
  const [typePopup, setTypePopup] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Mensetting untuk tampilan awal map lokasi mana yang akan menjadi awal tampilan
  const [viewport, setViewport] = useState({
    longitude: 119.44775991988962,
    latitude: -2.585964150398297,
    zoom: 4,
  });

  // Membuka Popup
  const handleOpenPopUp = (data, type) => {
    setDataPopup(data);
    setTypePopup(type);
    setShowPopup(!showPopup);
  };

  // Menutup Popup
  const handleClosePopup = () => {
    setDataPopup([]);
    setTypePopup("");
    setShowPopup(!showPopup);
  };

  // Tampilan untuk Popup
  const DisplayPopup = () => {
    const data = dataPopup.features[0].properties;

    if (typePopup === "harbor") {
      // Menampilkan data poup untuk pelabuhan
      let detailData = data.description.split(",");

      return (
        <>
          <h1 className="title">HARBOR</h1>
          <p>Name : {data.name} </p>
          <p>Category : {data.category} </p>
          {detailData.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </>
      );
    } else if (typePopup === "ship") {
      // Menampilkan data poup untuk Kapal
      return (
        <>
          <h1 className="title">SHIP</h1>
          <p>Name : {data.SHIPNAME} </p>
          <p>Type : {data.TYPE_NAME} </p>
          <p>Flag : {data?.FLAG ? data?.FLAG : "-"} </p>
          <p>Status : {data.STATUS_NAME} </p>
          <p>Speed : {data.SPEED} Knot</p>
          <p>Destination : {data?.DESTINATION ? data?.DESTINATION : "-"} </p>
        </>
      );
    }
  };

  return (
    <MapGL
      accessToken="pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRtNzYxMG1xbDNrbGo1N3k4a3NuciJ9.VHdXy-kV3UZLqcFF601K6A"
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={setViewport}
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      ref={mapRef}
    >
      <Menu setViewport={setViewport} />
      {showPopup && (
        <Popup
          anchor="bottom"
          longitude={dataPopup?.lngLat?.lng ? dataPopup?.lngLat?.lng : null}
          latitude={dataPopup?.lngLat?.lat ? dataPopup?.lngLat?.lat : null}
          closeButton={false}
          closeOnClick={false}
        >
          <button className="btn-close" onClick={handleClosePopup}>
            X
          </button>
          <DisplayPopup />
        </Popup>
      )}
      <Image id="harbor1" image={icon_harbor1} />
      <Image id="harbor2" image={icon_harbor2} />
      <Image id="ship" image={icon_ship} />
      <Image id="ship1" image={icon_ship1} />
      <Image id="ship2" image={icon_ship2} />
      <Image id="ship3" image={icon_ship3} />
      <Image id="ship4" image={icon_ship4} />
      <Image id="ship5" image={icon_ship5} />
      <Image id="ship6" image={icon_ship6} />
      <Image id="ship7" image={icon_ship7} />
      <Image id="ship8" image={icon_ship8} />
      <Image id="ship9" image={icon_ship9} />
      <Ship Popup={handleOpenPopUp} />
      <Harbor Popup={handleOpenPopUp} />
    </MapGL>
  );
}

export default App;
