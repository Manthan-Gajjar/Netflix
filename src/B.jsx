import React from 'react';
import mobile from './images/mobile-0819.jpg';

function B() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center my-16 p-4'>
                <div className='mt-8 md:mt-0 md:mr-8'>
                    <img src={mobile} alt='Mobile' className='w-full max-w-md' />
                </div>
                <div className=' text-center md:text-left'>
                    <h1 className='font-extrabold text-2xl md:text-4xl lg:text-5xl text-white'>Download your shows to</h1>
                    <h1 className='leading-loose font-extrabold text-2xl md:text-4xl my-5 lg:text-5xl text-white'>watch offline</h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>Save your favourites easily and always have</p>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>something to watch.</p>
                </div>
            </div>
            <div className='p-1 bg-zinc-800'></div>
        </>
    );
}

export default B;
