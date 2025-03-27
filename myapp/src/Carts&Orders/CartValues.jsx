import React from 'react'
import { useCart } from './cartContext'
import cartImage from '../Images/cart_image.png';

const CartValues = () => {

    const { cartItems } = useCart();

    return (
        <div className='min-h-screen items-center justify-center flex flex-col'>
            {
                cartItems.length > 0 ? (
                    <div>
                        {
                            cartItems.map((item, index) => (
                                <div key={index}>
                                    <h1>{item.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <>
                        <img src={cartImage} alt='' />
                        <p className='text-4xl font-semibold tracking-wider'>
                            No Items Added !
                        </p>
                        <span
                            className='mt-14 font-light tracking-wider text-6xl text-gray-500'
                        >
                            Add Items To Make Your Cart Happy
                        </span>
                    </>
                )
            }
        </div>
    )
}

export default CartValues;