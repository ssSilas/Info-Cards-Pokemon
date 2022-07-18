import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);

  let getPoke = [];
  let newData = [];

  useEffect(() => {
    async function fetchUrl() {
      await axios
      .get(url)
      .then((response) => response.data.results)
      .then(async (pokes) => {
        for (const pk of pokes) {
          const url = pk.url;
          await axios(url)
            .then((response) => response.data)
            .then((response) => {
              getPoke = {
                // pokes: {
                id: response.id,
                name: response.name,
                photo: response.sprites.other.home,
                type: response.types,
                // }
              };
              newData.push(getPoke);
            });
        }
      })
      .finally(() => {
        setData(newData);
        setIsFetching(false);
      });
    }
    fetchUrl()
  }, []);

  return { data, isFetching };
  
};
export default useFetch;
