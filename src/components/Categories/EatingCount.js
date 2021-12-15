/**
 * Eating Count chart
 * Rendering component
 */

import React, { useState, useEffect } from "react";
import calories from "../../assets/calories-icon.svg";
import proteins from "../../assets/protein-icon.svg";
import fat from "../../assets/fat-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import "../../styles/Categories/EatingCount.css";
import Loader from "../Loader";
import Error from "../Error";
import PropTypes from "prop-types";

EatingCount.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function EatingCount({ data }) {
  const categories = ["Calories", "Protéines", "Glucides", "Lipides"];
  const icons = [calories, proteins, fat, carbs];
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setUserData(data.data.keyData);
  }, [data]);

  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;
  return (
    <section className="keydata_container">
      {categories.map((element, index) => (
        <div className="card keydata" key={index}>
          <img src={icons[index]} alt={element}></img>
          <div>
            <p className="keydata_value">{Object.values(userData)[index] + (index === 0 ? "kCal" : "g")}</p>
            <p className="keydata_name">{element}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
