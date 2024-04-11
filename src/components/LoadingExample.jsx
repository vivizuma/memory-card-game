import Card from "./Card.jsx";
import Skeleton from "./Skeleton.jsx";
import { useState, useEffect } from "react";

function LoadingExample() {
  // create 9 skeleton cards
  // on page load, make api call to fetch 9 images
  //
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <>{loading ? <Skeleton /> : <Card />}</>;
}

export default LoadingExample;
