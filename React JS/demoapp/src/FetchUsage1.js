import { useState, useEffect } from "react";


 const FetchUsage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
          console.log(res.status)
          console.log(res.ok)

          res.json()})
      .then((data) => setData(data));
      console.log(data)
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
};

export default FetchUsage;