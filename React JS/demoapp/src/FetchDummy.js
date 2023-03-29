import useFetch from "./UseFetch";

const FetchDummy = () => {
    const [data] = useFetch("https://dummyjson.com/products")
    console.log(data)
    return (
    <>

        {data &&
        data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
        })}
    </>
    );
};

export default FetchDummy;

// import useFetch from "./useFetch";

// const FetchDummy = () => {
//     const data = useFetch("https://dummyjson.com/products/",'products')
//     return (
//     <>
//         {data &&
//         data.map((item) => (
//             <div key={item.id}>{item.title}</div>
//         ))}
//     </>
//     );
// };

// export default FetchDummy;