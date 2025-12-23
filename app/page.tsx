'use client'
import { useEffect  } from "react";


export default function Home() {
  useEffect(() => {
    console.log("this is how to use effec")
  }, [])
  return (
   <div>
    hello world
   </div>
  );
}
