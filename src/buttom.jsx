import React from 'react';
import { IoLanguage } from 'react-icons/io5';

function Buttom() {
    return (
        <>
            <div className='text-white my-20 px-4 md:px-8 flex justify-center gap-10 lg:px-16'>
                <div className='flex flex-col md:flex-row gap-8 font-light'>
                    <div className='flex flex-col'>
                        <p className='leading-loose mb-2'>Questions? Call 000-800-919-1694</p>
                        <p className='leading-loose mb-2'>FAQ</p>
                        <p className='leading-loose mb-2'>Privacy</p>
                        <p className='leading-loose mb-2'>Speed Test</p>
                        
                        <div className='flex items-center gap-4 mt-4'>
                            {/* <IoLanguage color='white' /> */}
                            <select className='bg-transparent p-1 text-white border h-8 w-36 border-white rounded-md'>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <p className='leading-loose mt-4'>Netflix India</p>
                    </div>
                    
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='flex flex-col'>
                            <p className='leading-loose mb-2'>Help Centre</p>
                            <p className='leading-loose mb-2'>Jobs</p>
                            <p className='leading-loose mb-2'>Cookie Preferences</p>
                            <p className='leading-loose'>Legal Notices</p>
                        </div>
                        
                        <div className='flex flex-col'>
                            <p className='leading-loose mb-2'>Account</p>
                            <p className='leading-loose mb-2'>Ways to Watch</p>
                            <p className='leading-loose mb-2'>Corporate Information</p>
                            <p className='leading-loose'>Only on Netflixs</p>
                        </div>
                        
                        <div className='flex flex-col'>
                            <p className='leading-loose mb-2'>Media Centre</p>
                            <p className='leading-loose mb-2'>Jobs</p>
                            <p className='leading-loose mb-2'>Terms of Use</p>
                            <p className='leading-loose'>Contact Us</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Buttom;
