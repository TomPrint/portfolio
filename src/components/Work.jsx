import React from 'react'
import Influencio from '../assets/Influencio.jpg'
import CutIt from '../assets/CutIt.jpg'
import Pasieka from '../assets/Pasieka.jpg'
import Toolman from '../assets/toolman.jpg'
import ManualsQR from '../assets/ManualsQR.jpg'

const Work = () => {
  return (



    <div name='work' className='w-full md:h-screen bg-[#202020] text-gray-300  pt-[80px]'>
        <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-ful'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-300 text-gray-300'>
                    Work
                </p>
                <p className='py-6'>View my recent projects</p>

                {/* Container */}
                <div className='grid sm:grid-cols-3 md:grid cols-1 gap-2'>
                    {/* Grid Item 1 */}
                    <div style={{backgroundImage: `url(${Influencio})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='invisible'>
                        <div className='group-hover:visible'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Django Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://influencio.pl'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Demo</button>
                                </a>

                                <a href='https://github.com/TomPrint/influencio'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Code</button>
                                </a>

                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Grid Item 2 */}
                    <div style={{backgroundImage: `url(${CutIt})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-auto'>
                        
                        {/* Hover Effects */}
                        <div className='invisible'>
                        <div className='group-hover:visible'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Django Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://klewiu.usermd.net'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Demo</button>
                                </a>

                                <a href='https://github.com/TomPrint/CutIt'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Code</button>
                                </a>

                            </div>
                        </div>
                        </div>
                    </div>

                        {/* Grid Item 3 */}
                                        <div style={{backgroundImage: `url(${Pasieka})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-auto'>
                        
                        {/* Hover Effects */}
                        <div className='invisible'>
                        <div className='group-hover:visible'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Django Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://pasiekaradosc.pl'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Demo</button>
                                </a>

                                <a href='https://github.com/TomPrint/joyful_bees'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Code</button>
                                </a>

                            </div>
                        </div>
                        </div>
                    </div>

                                            {/* Grid Item 4 */}
                                            <div style={{backgroundImage: `url(${Toolman})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-auto'>
                        
                        {/* Hover Effects */}
                        <div className='invisible'>
                        <div className='group-hover:visible'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://toolman.pl'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Demo</button>
                                </a>

                                <a href='https://github.com/TomPrint/Toolman'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Code</button>
                                </a>

                            </div>
                        </div>
                        </div>
                    </div>

                                                                {/* Grid Item 5 */}
                                                                <div style={{backgroundImage: `url(${ManualsQR})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div flex-auto'>
                        
                        {/* Hover Effects */}
                        <div className='invisible'>
                        <div className='group-hover:visible'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Django Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://atsdisplay.com.pl'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Demo</button>
                                </a>

                                <a href='https://github.com/TomPrint/ManualsQR'>
                                <button className='text-center rounded-md px-4 py-3 m-2 bg-gray-700 text-white'>Code</button>
                                </a>

                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
