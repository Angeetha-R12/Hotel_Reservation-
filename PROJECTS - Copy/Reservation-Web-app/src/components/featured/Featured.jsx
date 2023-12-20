import React from "react";
import useFetch from "../../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";

import "./featured.scss";

const Featured = () => {
  const { data, loading } = useFetch(/* Provide the appropriate API endpoint or data fetching logic */);
  const navigate = useNavigate();

  const destinations = ["Chennai", "Madurai", "Coimbatore", "Ooty", "New York", "Tokyo"];

  return (
    <div className="container">
      <div className="featured row gy-3 gx-md-3 gx-3 justify-content-center">
        {loading || !data || data.length === 0 ? (
          <div className="lds-roller"></div>
        ) : (
          destinations.map((destination, index) => {
            const imageUrl = data[index] && data[index].image ? data[index].image : "https://placeholder.com/300";
            const propertiesCount = data[index] && data[index].properties ? data[index].properties : 0;

            return (
              <div key={index} className="col-md-6 col-lg-3 col-6">
                <div
                  className="featuredItem"
                  onClick={() => {
                    navigate("/hotels", {
                      state: { destination: destinations[index].toLowerCase() },
                    });
                  }}
                >
                  <img
                    src={imageUrl}
                    alt=""
                    className="featuredImg img-fluid"
                  />
                  <div className="featuredTitles">
                    <h1>{destination}</h1>
                    <h2>{propertiesCount} properties</h2>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Featured;
