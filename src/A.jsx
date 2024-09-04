import React from 'react';
import tv from './images/tv.png';

function A() {
    return (
        <>
            <div className='p-1 bg-zinc-800 '></div>
            <div className='flex flex-col md:flex-row justify-center items-center my-20 p-4'>
                <div className='text-center md:text-left'>
                    <h1 className='leading-loose font-extrabold text-2xl md:text-4xl py-5 lg:text-5xl text-white'>Enjoy on your TV</h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='mt-8 md:mt-0 md:ml-8'>
                    <img src={tv} alt='TV' className='w-full max-w-md' />
                </div>
            </div>
            <div className='p-1 bg-zinc-800 '></div>
        </>
    );
}

export default A;
