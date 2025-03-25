import React from 'react'

const Address = () => {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center mt-10'>
                <h1 className='text-2xl tracking-wider border-b-2 font-serif'>Your Address</h1>
                <div className='mt-10 flex flex-col space-y-10 w-full items-center'>
                    <div className='flex w-full justify-center'>
                        <input
                            type='text'
                            placeholder='Phone Number'
                            className='bg-transparent border-b-2 py-4 w-1/4 outline-none px-3 text-lg font-semibold tracking-wider focus:border-b-green-600'
                        />
                    </div>
                    <div className='flex w-full justify-center'>
                        <input
                            type='text'
                            placeholder='E-Mail ID'
                            className='bg-transparent border-b-2 py-4 w-1/4 outline-none px-3 text-lg font-semibold tracking-wider focus:border-b-green-600'
                        />
                    </div>
                    <div className='flex w-full justify-center'>
                        <input
                            type='text'
                            placeholder='Address'
                            className='bg-transparent border-b-2 py-4 w-1/4 outline-none px-3 text-lg font-semibold tracking-wider focus:border-b-green-600'
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Address;