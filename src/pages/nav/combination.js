// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import useSWR from "swr";

// export const getStaticProps = async () => {
//   const res = await axios.get("/products/1.json");
//   const data = res.data;

//   return {
//     props: {
//       firstProduct: data,
//     },
//   };
// };

// const Combination = ({ firstProduct }) => {
//   const [mounted, setMounted] = useState(false);

//   // const [data, setData] = useState([]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const res = await axios.get("/products.json");
//   //     const data = res.data;
//   //     setData(data);
//   //   };

//   //   fetchData();
//   // }, []);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const url = "/products.json";
//   const { data, error } = useSWR(mounted ? url : null);

//   if (!data) return <p>{firstProduct.title}</p>;

//   return (
//     <div>
//       {data.map((item, i) => (
//         <p key={i}>{item.title}</p>
//       ))}
//     </div>
//   );
// };

// export default Combination;
