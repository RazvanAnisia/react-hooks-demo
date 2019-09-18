import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [factsData, setData] = useState({ data: null, loading: true });
  useEffect(() => {
    setData({ data: null, loading: true });
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setData({ factsData: y, loading: false });
      });
    //fn will be called when URL changes
  }, [setData, url]);

  return factsData;
};
