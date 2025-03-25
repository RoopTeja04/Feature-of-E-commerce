import React, { useState } from 'react';
import { useAccount } from '../ContextAPI/AccountContext';
import { useNavigate } from 'react-router-dom';

const Address = () => {
    const { account, setAccount } = useAccount();
    const navigate = useNavigate();

    const [addressDetails, setAddressDetails] = useState({
        phoneNumber: account.phoneNumber || '',
        emailId: account.emailId || '',
        address: account.address || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setAccount(prev => ({ ...prev, ...addressDetails }));
        navigate("/home/thank-you")
    };

    const handleCancel = () => {
        navigate(-2);
    }

    return (
        <div className='min-h-screen flex flex-col items-center mt-10'>
            <h1 className='text-2xl tracking-wider border-b-2 font-serif'>Your Address</h1>
            <div className='mt-10 flex flex-col space-y-10 w-full items-center'>
                <div className='flex w-full justify-center'>
                    <input
                        type='text'
                        name='phoneNumber'
                        placeholder='Phone Number'
                        value={addressDetails.phoneNumber}
                        onChange={handleChange}
                        className='bg-transparent border-b-2 py-4 w-1/4 outline-none px-3 text-lg font-semibold tracking-wider focus:border-b-green-600'
                    />
                </div>
                <div className='flex w-full justify-center'>
                    <input
                        type='text'
                        name='emailId'
                        placeholder='E-Mail ID'
                        value={addressDetails.emailId}
                        onChange={handleChange}
                        className='bg-transparent border-b-2 py-4 w-1/4 outline-none px-3 text-lg font-semibold tracking-wider focus:border-b-green-600'
                    />
                </div>
                <div className='flex w-full justify-center'>
                    <input
                        type='text'
                        name='address'
                        placeholder='Address'
                        value={addressDetails.address}
                        onChange={handleChange}
                        className='bg-transparent border-b-2 py-4 w-1/4 outline-none px-3 text-lg font-semibold tracking-wider focus:border-b-green-600'
                    />
                </div>
                <button
                    onClick={handleSave}
                    className='mt-5 bg-green-600 text-white px-6 py-2 rounded-lg text-lg tracking-wider hover:bg-green-700 cursor-pointer'
                >
                    Place Order
                </button>
                <button 
                    onClick={handleCancel}
                    className='border-2 border-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-600 ease-in-out cursor-pointer'
                >
                    Cancel Order
                </button>
            </div>
        </div>
    );
};

export default Address;