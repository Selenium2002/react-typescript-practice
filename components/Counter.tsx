"use client";
import { useState } from "react";

const Counter = ()=> {
    const [num, setNum] = useState<number>(0);

    const increament = ()=> {
        setNum(num + 1);
        console.log("Triggered rerender");
    }
    return (
        <main className="my-5">
          <h1 className="text-2xl text-gray-300">Counter Component</h1>
          <div>Num: {num}</div>
          <button className="btn cursor-pointer" onClick={increament}>Click to Increament</button>
        </main>
    )
}

export default Counter;