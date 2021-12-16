/**
 * Custom Hook
 * Return object in json containing Data, Error, and Loading State
 * @function
 * @param {string} url -  Url of data fetched (can be local or API)
 */

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}
