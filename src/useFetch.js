import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const { results } = await res.json();
      setData(results);
    })();
  }, [url]);

  return data;
};

export default useFetch;
