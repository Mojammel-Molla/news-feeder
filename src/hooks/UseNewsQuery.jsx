import { useState } from 'react';
import { useEffect } from 'react';

const UseNewsQuery = () => {
  const [allNews, setAllNews] = useState({});
  useEffect(() => {
    fetch('http://localhost:8000/v2/top-headlines?category=general')
      .then(res => res.json())
      .then(data => setAllNews(data.articles));
  }, []);
  console.log(allNews);
  return allNews;
};

export default UseNewsQuery;
