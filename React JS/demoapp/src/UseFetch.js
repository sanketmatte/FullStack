import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [url]);
  console.log(data)
  return [data];
};

export default useFetch;



// import { useState, useEffect } from "react";

// function useFetch (url,path)  {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     function fetchData() {
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => setData(path ? res[path]:res));
//     }
//     fetchData();
// }, [url,path]);

//   return data;
// };

// export default useFetch;