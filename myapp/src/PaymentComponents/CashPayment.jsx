import React, { useState } from 'react'
import { useOrder } from '../Carts&Orders/orderContext'
import { useTheme } from '../ContextAPI/ThemeContext';
import { useNavigate } from 'react-router-dom';

const CashPayment = () => {

    const { orderItems } = useOrder();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { RemoveFromOrder } = useOrder();

    const [quantity, serQuantity] = useState(1);

    const handleRemoveFromOrder = (item) => {
        RemoveFromOrder(item);
        navigate(-1);
    }

    return (
        <>
            <div className='min-h-screen'>
                <h1 className='text-center mt-10 text-3xl tracking-wider font-semibold capitalize cursor-pointer'>Your Order</h1>
                <div className='flex flex-row mt-10 mx-10 space-x-4'>
                    {
                        orderItems.map((item, index) => (
                            <>
                                <div key={index} className={`py-10 border-2 ${theme === "Light" ? "border-white text-white" : "border-gray-900 text-black"} w-1/3 rounded-lg shadow-lg`}>
                                    <div className="flex flex-col space-y-4">
                                        <div className={`flex justify-between items-center border-b-2 mx-4 pb-2 px-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                            <span className='text-base'>
                                                Product Name:
                                            </span>
                                            <span className="text-xl font-semibold">{item.name}</span>
                                        </div>
                                        <div className={`flex justify-between items-center border-b-2 mx-4 pb-2 px-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                            <span className='text-base'>
                                                Price
                                            </span>
                                            <span className="text-xl font-semibold tracking-wide">₹ {Number(item.price).toLocaleString("hi-IN")} /-</span>
                                        </div>
                                        <div className={`flex justify-between items-center border-b-2 mx-4 pb-2 px-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                            <span className='text-base'>
                                                Quantity
                                            </span>
                                            <span className="text-xl font-semibold text-black">
                                                <select className={`rounded-md w-16 text-center outline-none cursor-pointer border-2 ${ theme === "Light" ? "border-white text-white" : "border-black"}`} value={quantity} onChange={(e) => serQuantity(e.target.value)}>
                                                    {
                                                        Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                                            <option className={`${ theme === "Light" ? "bg-black text-white font-semibold" : "text-black bg-white font-semibold"}`} key={num} value={num}>
                                                                {num}
                                                            </option>
                                                        ))}
                                                </select>
                                            </span>
                                        </div>
                                        <div className={`flex justify-between items-center mx-4 pb-2 px-2 `}>
                                            <span className='text-base'>
                                                Total Price
                                            </span>
                                            <span className="text-xl font-semibold tracking-wide">
                                                ₹ {
                                                    (item.price * quantity).toLocaleString("hi-IN")
                                                } /-
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-10 px-20 space-y-6'>
                                        <button
                                            className='bg-red-600 h-10 text-base rounded-lg font-semibold text-white cursor-pointer'
                                            onClick={() => handleRemoveFromOrder(item)}
                                        >Cancel Order</button>
                                        <button
                                            onClick={() => navigate('/home/address')}
                                            className={`${theme === "Light" ? "bg-white text-black" : "bg-black text-white"}  font-semibold h-10 rounded-md text-base cursor-pointer`}
                                        >Place your Order</button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                    <div className={`${theme === "Light" ? "border-white" : "border-gray-900"} border-2 w-2/3 rounded-lg`}>
                        {
                            orderItems.map((item, index) => (
                                <>
                                    <h1 className='text-lg font-semibold tracking-widest text-center pt-4 underline underline-offset-4'>Your InVoice Bill</h1>
                                    <div key={index} className={`py-6 ${theme === "Light" ? "border-white" : "border-gray-900"} flex flex-row justify-between px-10`}>
                                        <div className='flex flex-col w-1/2 space-y-4'>
                                            <span className={`flex justify-between items-center border-b-2 px-2 pb-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                                Product Name: <p className='text-xl font-semibold'>{item.name}</p>
                                            </span>
                                            <span className={`flex justify-between items-center border-b-2 px-2 pb-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                                Price: <p className='text-xl font-semibold'>₹ {item.price.toLocaleString("hi-IN")} /-</p>
                                            </span>
                                            <span className={`flex justify-between items-center border-b-2 px-2 pb-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                                Quantity: <p className='text-xl font-semibold'>{quantity}</p>
                                            </span>
                                            <span className={`flex justify-between items-center border-b-2 px-2 pb-2 ${theme === "Light" ? "border-white" : "border-gray-900"}`}>
                                                Total Price: <p className='text-xl font-semibold'>₹ {(item.price * quantity).toLocaleString("hi-IN")} /-</p>
                                            </span>
                                            <span className='px-2 pt-4 text-center'>
                                                <p className='font-semibold text-green-600 capitalize text-2xl'>You can pay the amount using Paytm / Phone Pay / Cash</p>
                                            </span>
                                        </div>
                                        <img src={item.imageURL} alt='' className='h-72 rounded-md' />
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashPayment