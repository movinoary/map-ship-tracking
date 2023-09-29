// Module
import React, { useState } from "react";
// Data
import { information_type_ship } from "../data/information";
import dataHarbor from "../data/harbor-indonesia.json";
import dataShip1 from "../data/ship-1.json";
import dataShip2 from "../data/ship-2.json";
// Icon
import icon_harbor from "../assets/harbor.png";
import icon_harbor1 from "../assets/harbor-1.png";
import icon_harbor2 from "../assets/harbor-2.png";
import icon_ship from "../assets/ship.png";

// Menu Informasi pada bagian kanan atas
const Menu = ({ setViewport }) => {
  // Menampilkan detail informasi
  const [isMenu, setIsMenu] = useState("");
  // Mengubah tampilan menu informasi
  const [showInfo, setShowInfo] = useState("ship");

  // Data list Docking
  const DataHarbor = dataHarbor.features.map((d) => {
    return {
      coordinates: d.geometry.coordinates,
      name: d.properties.name,
      category: d.properties.category,
    };
  });

  // Data List Ship
  const DataShip1 = dataShip1.data.rows.map((d) => {
    return {
      coordinates: [d.LON, d.LAT],
      name: d.SHIPNAME,
      category: d.SHIPTYPE,
      destination: d?.DESTINATION ? d?.DESTINATION : "-",
    };
  });
  const DataShip2 = dataShip2.data.rows.map((d) => {
    return {
      coordinates: [d.LON, d.LAT],
      name: d.SHIPNAME,
      category: d.SHIPTYPE,
      destination: d?.DESTINATION ? d?.DESTINATION : "-",
    };
  });
  const DataShip = [...DataShip1, ...DataShip2];

  // Alternatif fitur flyto
  const onFlyFunction = (item) => {
    setViewport({
      zoom: 11,
      longitude: item.coordinates[0],
      latitude: item.coordinates[1],
    });
  };

  return (
    <>
      {isMenu !== "" && (
        <section className="modal">
          <button className="btn-close" onClick={() => setIsMenu("")}>
            X
          </button>
          {isMenu === "ship" ? (
            <>
              <h1 className="title">Ship</h1>
              {DataShip.map((item, index) => {
                const infoItem = information_type_ship.find(
                  (d) => d.type === Number(item.category)
                );

                return (
                  <div
                    className="row list-data"
                    key={index}
                    onClick={() => onFlyFunction(item)}
                  >
                    <img
                      src={infoItem?.icon}
                      alt="harbor-2"
                      width={25}
                      height={25}
                    />
                    <div className="column">
                      <p className="title-medium">{item.name}</p>
                      <p className="title-small">
                        {infoItem?.name} | {item.destination}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          ) : isMenu === "harbor" ? (
            <>
              <h1 className="title">Docking</h1>
              {DataHarbor.map((item, index) => (
                <div
                  className="row list-data"
                  key={index}
                  onClick={() => onFlyFunction(item)}
                >
                  <img
                    src={
                      item.category === "Pelabuhan Utama Diusahakan"
                        ? icon_harbor1
                        : icon_harbor2
                    }
                    alt="harbor-2"
                    width={25}
                    height={25}
                  />
                  <div className="column">
                    <p className="title-medium">{item.name}</p>
                    <p className="title-small">{item.category}</p>
                  </div>
                </div>
              ))}
            </>
          ) : isMenu === "info" ? (
            <>
              <h1 className="title">Information</h1>
              <div className="row">
                <button
                  className={
                    showInfo === "ship" ? "btn-primary" : "btn-secondary"
                  }
                  onClick={() => setShowInfo("ship")}
                >
                  Ship
                </button>
                <button
                  className={
                    showInfo === "docking" ? "btn-primary" : "btn-secondary"
                  }
                  onClick={() => setShowInfo("docking")}
                >
                  Docking
                </button>
              </div>
              {showInfo === "ship" ? (
                information_type_ship.map((item, index) => {
                  return (
                    <div key={index} className="row">
                      <div
                        className="circle"
                        style={{ backgroundColor: item.color }}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="row">
                    <img
                      src={icon_harbor1}
                      alt="harbor-1"
                      width={25}
                      height={25}
                    />
                    <p>Pelabuhan Utama Diusahakan</p>
                  </div>
                  <div className="row">
                    <img
                      src={icon_harbor2}
                      alt="harbor-2"
                      width={25}
                      height={25}
                    />
                    <p>Pelabuhan Umum Tidak Diusahakan</p>
                  </div>
                </>
              )}
            </>
          ) : null}
        </section>
      )}
      <section className="menu">
        <button className="menu-ship" onClick={() => setIsMenu("ship")}>
          <img src={icon_ship} alt="ship" />
        </button>
        <button className="menu-harbor" onClick={() => setIsMenu("harbor")}>
          <img src={icon_harbor} alt="harbor" />
        </button>
        <button className="menu-info" onClick={() => setIsMenu("info")}>
          i
        </button>
      </section>
    </>
  );
};

export default Menu;
