import React from "react";
import { Link } from "react-router-dom";

export function Navigation(){
    return(
        <nav className='h-[50px] flex justify-between px-5 bg-cyan-500 items-center text-white'>
            <span className="font-bold"> Store App</span>
            <span>
                <Link to="/" className="mr-2">Store</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}