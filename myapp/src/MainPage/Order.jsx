import React from 'react';
import { useOrder } from '../Carts&Orders/orderContext';
import OrderNotBooked from '../Images/Order Not Booked.png';

const Order = () => {

    const { BookedItems } = useOrder();

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                {
                    BookedItems.length > 0 ?
                        (
                            <div className='w-full flex flex-col items-center space-y-6 my-10 px-40'>
                                {
                                    BookedItems.map((item, index) => (
                                        <div key={index} className='border-2 w-full rounded-2xl h-150 py-10 px-10 flex flex-row'>
                                            <img className='h-64 rounded-md' src={item.imageURL} alt='' />
                                            <div className='ml-48 mt-2'>
                                                <h1 className='text-4xl font-semibold tracking-wide'>{item.name}</h1>
                                                <span className='mt-10'>₹ {` ${item.price.toLocaleString("hi-IN")}`} /-</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                        : (
                            <>
                                <div className='flex flex-col items-center'>
                                    <img className='h-1/12' src={OrderNotBooked} alt='' />
                                    <p className='font-semibold tracking-wider text-2xl'> No Order Booked by You</p>
                                    <p className='mt-10 text-2xl font-semibold tracking-wide text-gray-500'>🛒 Don't wait—grab your favorites before they're gone! Place your order now and enjoy hassle-free shopping! 🎉</p>
                                </div>
                            </>
                        )
                }
            </div>
        </>
    )
}

export default Order;