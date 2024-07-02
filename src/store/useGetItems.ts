import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetItems = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e: unknown) {
        const err = e as AxiosError<{
          message: string;
        }>;
        const errorMessage = err?.response?.data.message;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetItems;
