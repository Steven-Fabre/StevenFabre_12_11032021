/**
 * Welcome message
 * Rendering component
 */

import React, { useState, useEffect } from "react";
import "../../styles/Categories/Welcome.css";
import Loader from "../Loader";
import Error from "../Error";
import PropTypes from "prop-types";

Welcome.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function Welcome({ data }) {
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setUserData(data.data);
  }, [data]);

  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;
  return (
    <div className="welcome">
      <h1 className="hello">
        Bonjour <span className="name">{UserData?.userInfos?.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}
