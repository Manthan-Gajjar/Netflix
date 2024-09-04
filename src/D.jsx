import React from 'react';
import cartoon from './images/cartoon.png';

function D() {
    return (
        <>
            <div className='flex  justify-center items-center my-20 px-4 md:px-8 lg:px-16 xxxs:flex-col md:flex-row '>
                <div className='mb-8 md:mb-16'>
                    <img src={cartoon} alt='Cartoon' className='w-full max-w-sm md:max-w-md lg:max-w-lg' />
                </div>
                <div className=''>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4'>
                        Create profiles for kids
                    </h1>
                    <p className='text-lg md:text-xl lg:text-2xl text-white mb-2'>
                        Send children on adventures with their favourite
                    </p>
                    <p className='text-lg md:text-xl lg:text-2xl text-white mb-2'>
                        characters in a space made just for them—free with
                    </p>
                    <p className='text-lg md:text-xl lg:text-2xl text-white'>
                        your membership.
                    </p>
                </div>
            </div>
            <div className='p-1 bg-zinc-800'></div>
        </>
    );
}

export default D;
