import React from "react";
import "../../styles/Categories/Welcome.css";

export default function Welcome(data) {
  return (
    <div className="welcome">
      <h1 className="hello">
        Bonjour <span className="name">{data.data?.userInfos?.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}
