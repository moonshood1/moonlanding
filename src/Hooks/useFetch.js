import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abort.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Enable to fetch the data ... Try again later");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);
    return () => abort.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
