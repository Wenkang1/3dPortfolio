import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEquidistant"
      projectionConfig={{
        rotate: [-180.0, -22.0, 0],
        center: [3, 4],
        scale: 290
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#3e597b"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[121.4737, 31.23]}
        dx={30}
        dy={40}
        connectorProps={{
          stroke: "#e4d1ce",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="148" textAnchor="end" alignmentBaseline="middle" fill="#e7e2e1">
          {"Shanghai"}
        </text>
      </Annotation>

      <Annotation
        subject={[55.2827, 129.1207]}
        dx={-10}
        dy={40}
        connectorProps={{
          stroke: "#e4d1ce",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#e7e2e1">
          {"Vancouver"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
