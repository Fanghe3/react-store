import React, {useEffect, useContext } from 'react'
import  { ProductContext } from "./Context.js"

export default function MyComponent() {
  const { state, setState } = useContext(ProductContext);
  console.log(state);

  useEffect(() => {
    setTimeout(() => {
      setState((state) => ({
        ...state,
        name: "dddd",
      }));
    }, 1000);
  }, []);

  return <h1> hello </h1>;
}
