import { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill'; // fix regeneratorruntime is randomly not defined babel issue

const useFetch = (url, params) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      // const response = await fetch(url);
      const response = await axios.get(url, { params });
      console.log('params', params);
      // const json = await response.json();
      // console.log(window.location.pathname);
      console.log('response -->', response);
      console.log('data--->', response.data);
      setState(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loading, state };
};

export default useFetch;
