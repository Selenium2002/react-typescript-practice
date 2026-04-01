"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Buttons = ()=> {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] =useState([]);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        
    },[resourceType])

    useEffect(()=>{
        console.log("onMount");
        
    },[])
    return(
        <div className="w-max h-screen bg-gray-900">
            <div className="text-white m-3">
                <button onClick={()=> setResourceType('posts')}
                    className="cursor-pointer mx-3 p-3 border-solid border-2 rounded-xl border-cyan-300">Posts</button>
                <button onClick={()=> setResourceType('users')}
                    className="cursor-pointer mx-3 p-3 border-solid border-2 rounded-xl border-cyan-300">Users</button>
                <button onClick={()=> setResourceType('comments')}
                    className="cursor-pointer mx-3 p-3 border-solid border-2 rounded-xl border-cyan-300">Comments</button>
            </div>
            <h1 className="text-gray-300 text-2xl m-3">{resourceType}</h1>

            <div className="my-10">
                <Link href="/" className="text-blue-500 text-xl">Go to Home</Link>
            </div>

            <div className="bg-inherit">
                {items.map((item, index) => {
                    return <pre key={index} className="border-2 border-cyan-400 border-dashed my-2 text-gray-200 w-fit">{JSON.stringify(item)}</pre>
                })}
            </div>

        
        </div>

    )
}

export default Buttons;