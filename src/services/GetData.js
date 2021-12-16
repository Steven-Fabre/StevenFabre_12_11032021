/**
 * Service dispatching the API Call
 * Able to switch between Local env or API
 * Return Custom Hook's useFetch
 * Represents a book.
 * @function - Dispatching data for components
 * @param {string} id - ID of the user.
 * @param {string} category - Category of data that you wan't to get.
 * @return {object} - using custom hook returning JSON formated Object
 */

import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types";

useFetch.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default function GetData(id, category) {
  const env = "local";
  const dataSrc = env === "local" ? `http://localhost:3001/user/${id}` : `http://localhost:3000/user/${id}`;
  const extension = env === "local" ? `.json` : `/`;

  const path = (category) => {
    switch (category) {
      case "user":
        return `${dataSrc + extension}`;

      case "activity":
        return `${dataSrc + `/activity` + extension}`;

      case "average":
        return `${dataSrc + "/average-sessions" + extension} `;

      case "performance":
        return `${dataSrc + "/performance" + extension}`;

      default:
        return null;
    }
  };

  return useFetch(path(category));
}
