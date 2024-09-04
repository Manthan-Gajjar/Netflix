import React, { useState } from 'react';
import './App.css';
import Netflixlogo from './images/netflixLOGO.png';
import { IoLanguage } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { FiPlus } from 'react-icons/fi';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import Buttom from './buttom';

function Navbar() {
    const [openAccordion, setOpenAccordion] = useState(-1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? -1 : index);
    };

    const accordionData = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more-on thousands of internet-connected devices.",
            answer1: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            answer1: "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees-start or stop your account anytime."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
            answer1: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ];

    return (
        <>
            <body className="bg-black text-white">
                <div className="bg">
                    <div className="flex justify-between items-center p-4  md:px-24 lg:px-96">
                        <div>
                            <img src={Netflixlogo} width={180} alt="Netflix Logo" />
                        </div>
                        <div className="flex items-center gap-3">
                            <select className="bg-transparent p-1 text-white border border-white text-xs rounded-md">
                                <option className="text-black">English</option>
                                <option className="text-black">Hindi</option>
                            </select>
                            <button className="text-white bg-red-600 hover:bg-red-700 p-2 px-4 font rounded-sm font-medium text-xs xxxs:text-nowrap">
                                Sign In
                            </button>
                        </div>
                    </div>

                    <div className="text-center my-16 md:my-48  px-4">
                        <h1 className="leading-loose font-extrabold text-2xl md:text-4xl lg:text-5xl">
                            Unlimited movies, TV shows and more
                        </h1>
                        <p className="leading-loose py-5 text-lg md:text-2xl">Watch anywhere. Cancel anytime.</p>
                        <p className="leading-loose text-lg md:text-2xl">
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center mt-4 gap-2">
                            <input
                                type="text"
                                className="bg-transparent text-white p-3 w-full md:w-80 border border-white rounded-md placeholder:text-slate-50"
                                placeholder="Email Address"
                            />
                            <button className="text-white bg-red-600 hover:bg-red-700 p-3 px-5 text-2xl rounded-md font-semibold">
                                Get Started >
                            </button>
                        </div>
                    </div>

                    <div className="p-1 bg-zinc-90"></div>
                </div>

                <A />
                <B />
                <C />
                <D />

                <div className="text-center my-12">
                    <h1 className="leading-loose font-extrabold text-2xl md:text-4xl lg:text-5xl text-white">
                        Frequently Asked Questions
                    </h1>

                    <div className="max-w-7xl mx-auto p-4">
                        {accordionData.map((item, index) => (
                            <div key={index} className="rounded-sm overflow-hidden mb-2">
                                <div
                                    className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4 bg-zinc-800/100 hover:bg-zinc-700/100 cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <p className="font-normal text-white text-base md:text-lg lg:text-2xl">
                                        {item.question}
                                    </p>
                                    {openAccordion === index ? (
                                        <ImCross className="w-5 h-5 fill-current text-white transform transition-transform" />
                                    ) : (
                                        <FiPlus className="fill-current text-white transform transition-transform" size={25} />
                                    )}
                                </div>
                                <div className={`py-2 mt-1 bg-zinc-800/100 ${openAccordion === index ? '' : 'hidden'}`}>
                                    <p className="text-white text-base md:text-lg lg:text-xl ml-4 pr-8">
                                        <span className="block">{item.answer}</span>
                                        <span className="block mt-2">{item.answer1}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mb-4 leading-loose text-white text-lg">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center xxs:px-5 xxxs:px-5  mt-4 gap-2">
                            <input
                                type="text"
                                className="bg-transparent  text-white p-3 w-full md:w-80  border border-white rounded-md placeholder:text-slate-50"
                                placeholder="Email Address"
                            />
                            <button className="text-white bg-red-600 hover:bg-red-700 p-3 rounded-md font-semibold">
                                Get Started >
                            </button>
                        </div>
                </div>

                <div className="p-1 bg-zinc-800"></div>
                <Buttom />
            </body>
        </>
    );
}

export default Navbar;
