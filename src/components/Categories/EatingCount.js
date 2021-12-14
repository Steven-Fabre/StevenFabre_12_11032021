import React from "react";
import calories from "../../assets/calories-icon.svg";
import proteins from "../../assets/protein-icon.svg";
import fat from "../../assets/fat-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import "../../styles/Categories/EatingCount.css";

export default function EatingCount(data) {
  const categories = ["Calories", "Protéines", "Glucides", "Lipides"];
  const icons = [calories, proteins, fat, carbs];
  const userData = data.data;
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
