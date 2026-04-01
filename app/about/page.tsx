"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Description from "@/components/Description";
import React, { useState, useEffect } from "react";





const About = ()=> {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize = ()=> {
    setWindowWidth(window.innerWidth)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[])

    return (
        <div className="w-screen h-screen bg-gray-900">
            <h1 className="text-3xl text-teal-200">About Page</h1>
            <Header text="Header Component" />
            <Description />
            <div className="m-10 text-white">{windowWidth}</div>
            <br />
            <Link href="/" className="text-blue-500 text-xl">Go To Home</Link>
            

        </div>
    )
}

export default About;