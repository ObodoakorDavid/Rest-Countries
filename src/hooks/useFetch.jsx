import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const finalData = await res.json();
      console.log(finalData);

      setData(finalData);
      setIsLoading(false);
    };

    getData();
  }, []);

  return { data, isLoading };
};
