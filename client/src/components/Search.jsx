import React from 'react';
import { NavLink } from 'react-router-dom';

const Search = () => {
    return (
        <NavLink id='explore' to="/search" >
            <div className="flex justify-center items-center">
                <div className="bg-white flex justify-center items-center">
                    <div className="max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 mx-auto">
                        <div className="text-center max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                What do you want 2 cook.
                            </h2>
                            <div className="mt-6 flex max-w-md gap-x-4">

                                <input
                                    name="search"
                                    type="search"
                                    className="min-w-0 flex-auto rounded-md border-gray-300 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-opacity-50 sm:text-sm sm:leading-6"
                                    placeholder="What do u want to have today ?"
                                />

                            </div>
                        </div>

                    </div>
                </div>
                <div className='absolute' >
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                    </div>
                </div>
            </div >
        </NavLink>
    );
};

export default Search;
