import { useState, useEffect } from "react";

// this si what happens when you try to manipulate state during the render! madness, chaos, disorder
// const Clock = () => {
//   const [counter, setCounter] = useState(0);
//   setInterval(() => {
//     setCounter(counter + 1);
//   }, 1000);
//   return <div>clock{counter}</div>;
// };

//this is a clock with useEffect to save us:
// we can use useEffect to move it outside of the default react rendering calculations.
// side effecting it, isolating it(?)
const EffectClock = () => {
  //declare useState
  const [counter, setCounter] = useState(0);

  //outisde of the default react rendering updates
  useEffect(() => {
    // set count to variable so we can clear it
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
    //clear interval so it does not update on mount and unmount (calling twice)
    // calls twice because of strict mode - it runs again and does a cleanup?
    return () => {
      clearInterval(key);
    };
  }, []);
  return <p>{counter} seconds have passed.</p>;
};
export { EffectClock };
