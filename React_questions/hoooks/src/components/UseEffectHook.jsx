import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [data,setData] = useState('') ;
  useEffect(
    () => {
      //side effect
      fetchUser() ;

      return () => {
        // clean up function
      };
    },
    []
    //optimizing the performance
  );

  //function to fetch the user
  const fetchUser = async () => {
    console.log("first")
    const resp = await fetch("https://dummyjson.com/products/1");
    console.log("second")
    const data = await resp.json() ;
    console.log(data) ;
    setData(data)
  };
  return (
    <div>
      <h1>What is useEffect Hook</h1>
      <p>
        useEffect hook is used in functional component to perform side effect
        after rendering , such as data fetching , subscription, or manual dom
        manipulation{" "}
      </p>
      <h2>Data we got</h2>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default UseEffectHook