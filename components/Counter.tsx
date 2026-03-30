"use client";
import { useState, useEffect } from "react";

const Counter = ()=> {
    const [num, setNum] = useState<number>(0);
    const [success, setSuccess] = useState<boolean>(false);

    const increment = ()=> {
        setNum(num + 1);

        if(num === 10){
            setSuccess(true);
        }
    }
    useEffect(()=> {
        console.log("# Event is success");
        
    }, [success])
    
    useEffect(()=> {
        console.log("## Num is triggered");
        
    }, [num])

    return (
        <main className="my-5">
          <h1 className="text-2xl text-gray-300">Counter Component</h1>
          <div>Num: {num}</div>
          <button className="btn cursor-pointer" onClick={increment}>Click to Increment</button>
        </main>
    )
}

export default Counter;