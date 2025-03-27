import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

const ThankYou = () => {

    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <FaCheck className='text-7xl border-2 rounded-full p-4'/>
            <span 
                className='mt-8 text-2xl tracking-wider font-semibold capitalize'
            >
                Order confirmed! Your items will be on their way soon.
            </span>
            <button
                className='mt-6 cursor-pointer bg-amber-600 p-4 rounded-full font-semibold'
                onClick={() => navigate(-3)}
            >
                Go Back To Produts
            </button>
        </div>
    )
}

export default ThankYou