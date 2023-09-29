// Module
import React, { useEffect, useState } from "react";
import { Layer, Source } from "@urbica/react-map-gl";
//Data
import dataHarbor from "../data/harbor-indonesia.geojson";
// Components
import { generate_icon } from "./function";

const Harbor = ({ Popup }) => {
  const [geoJson, setGeoJson] = useState([]);

  // Membaca data geojson dan Mengubah dari path menjadi format json
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(dataHarbor);
      response = await response.json();

      const filterData = response.features.filter(
        (d) => d.properties.category !== "Terminal Untuk Kepentingan Sendiri"
      );
      const data = {
        type: "FeatureCollection",
        features: filterData,
      };
      setGeoJson(data);
    };
    fetchData();
  }, []);

  // Meyimpan type pelabuhan
  const arr_category = [
    "Pelabuhan Utama Diusahakan",
    "Pelabuhan Umum Tidak Diusahakan",
  ];

  // Meyimpan icon pelabuhan
  const arr_icon = ["harbor1", "harbor2"];

  // Styling untuk layer pelabuhan
  const layerStyle = {
    id: "harbor",
    type: "symbol",
    source: "data-harbor",
    layout: {
      "icon-image": generate_icon(arr_category, arr_icon, "category"),
      "icon-size": 0.8,
    },
    onClick: (e) => Popup(e, "harbor"),
  };

  return (
    <section>
      <Source id="data-harbor" type="geojson" data={geoJson}>
        <Layer {...layerStyle} />
      </Source>
    </section>
  );
};

export default Harbor;
