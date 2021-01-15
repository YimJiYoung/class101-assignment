import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

function useFetch<T>(url: string): [T[], Dispatch<SetStateAction<T[]>>] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return [data, setData];
}

export default useFetch;
