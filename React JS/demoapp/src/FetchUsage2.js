import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                console.log(res.status)
                return res.json()})
            .then((data) => {
                console.log(data.products)
                return setData(data.products)});
    }, [url]);
console.log(data)
return [data];
};

const FetchUsage = () => {
    // const [data] = useFetch("https://jsonplaceholder.typicode.com/users/")
    const [data] = useFetch("https://dummyjson.com/products")
    return (
    <>
        {data &&
        data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
        })}
    </>
    );
};

export default FetchUsage;