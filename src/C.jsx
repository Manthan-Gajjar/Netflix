import React from 'react';
import device from './images/device-pile-in.png';

function C() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center my-24 p-4'>
                <div className='text-center md:text-left'>
                    <h1 className='leading-loose font-extrabold text-2xl md:text-4xl  my-5 lg:text-5xl text-white'>Watch everywhere</h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>Stream unlimited movies and TV shows on your</p>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>phone, tablet, laptop, and TV.</p>
                </div>
                <div className='mt-8 md:mt-0 md:ml-8'>
                    <img src={device} alt='Device' className='w-full max-w-md' />
                </div>
            </div>
            <div className='p-1 bg-zinc-800'></div>
        </>
    );
}

export default C;
