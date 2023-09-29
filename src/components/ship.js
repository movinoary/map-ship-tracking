// Module
import React from "react";
import { Layer, Source } from "@urbica/react-map-gl";
// Components
import { generate_icon } from "./function";
// Icon
import dataShip1 from "../data/ship-1.json";
import dataShip2 from "../data/ship-2.json";

const Ship = ({ Popup }) => {
  // Mengambil data kapal untuk diubah menjadi format geojson
  const featuresShip1 = dataShip1?.data?.rows.map((d) => {
    return {
      type: "Feature",
      properties: {
        ...d,
      },
      geometry: {
        coordinates: [Number(d.LON), Number(d.LAT)],
        type: "Point",
      },
    };
  });
  const featuresShip2 = dataShip2?.data?.rows.map((d) => {
    return {
      type: "Feature",
      properties: {
        ...d,
      },
      geometry: {
        coordinates: [Number(d.LON), Number(d.LAT)],
        type: "Point",
      },
    };
  });

  // Menyatukan data kapal yang ada dan menjadikan format geojson
  const geojson = {
    type: "FeatureCollection",
    category: "harbor",
    features: [...featuresShip1, ...featuresShip2],
  };

  // Mengambil semua type kategori dan menyimpannya dalam array
  let arr_type = geojson.features
    .sort((a, b) => (a.properties.SHIPTYPE < b.properties.SHIPTYPE ? -1 : 1))
    .map((d) => d.properties.SHIPTYPE);
  arr_type = [...new Set(arr_type)];

  //  Menyimpannya dalam array icon
  const arr_icon = [
    "ship1",
    "ship2",
    "ship3",
    "ship4",
    "ship5",
    "ship6",
    "ship7",
    "ship8",
    "ship9",
  ];

  // Styling untuk kapal berdasarkan type
  const layerStyle = {
    id: "ship",
    type: "symbol",
    source: "data-ship",
    layout: {
      "icon-image": generate_icon(arr_type, arr_icon, "SHIPTYPE"),
      "icon-size": 1,
    },
    onClick: (e) => Popup(e, "ship"),
  };

  return (
    <section>
      <Source id="data-ship" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </section>
  );
};

export default Ship;
