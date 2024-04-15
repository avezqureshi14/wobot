import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setIsLoggedIn(!!profile);
    }, []);

    const logout = () => {
        localStorage.removeItem('profile');
        setIsLoggedIn(false);
        window.location.reload();
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to='/' className="-m-1.5 p-1.5">
                        <h1 style={{ fontSize: "2rem", fontWeight: "bolder" }} >Avez.</h1>
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                        </svg>
                    </button>
                </div>
                <div className={isMenuOpen ? "flex lg:flex lg:gap-x-12" : "hidden lg:flex lg:gap-x-12"}>
                    <NavLink to='/' className="text-sm font-semibold leading-6 text-gray-900">Home</NavLink>
                    <NavLink to='/search' className="text-sm font-semibold leading-6 text-gray-900">Recipies</NavLink>
                    {
                        isLoggedIn ?
                            <NavLink to='/favourites' className="text-sm font-semibold leading-6 text-gray-900">Favourites</NavLink> : <></>
                    }
                    <NavLink to='/about' className="text-sm font-semibold leading-6 text-gray-900">About</NavLink>
                    <a href="mailto:avezqureshi4785@gmail.com" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
                </div>
                <div className={isMenuOpen ? "flex lg:flex-1 lg:justify-end" : "hidden lg:flex lg:flex-1 lg:justify-end"}>
                    {
                        isLoggedIn ?
                            <div className="py-6">
                                <p
                                    onClick={logout}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base 
                                     cursor-pointer font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log Out</p>
                            </div>
                            :
                            <div className="py-6">
                                <NavLink to='/auth' className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</NavLink>
                            </div>
                    }

                </div>
            </nav>
            <div className={isMenuOpen ? "lg:hidden" : "hidden"} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50" onClick={toggleMenu}></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <button onClick={toggleMenu} >
                                    <NavLink to='/' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</NavLink></button>
                                <NavLink to='/search' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Recipies</NavLink>
                                {
                                    isLoggedIn ?
                                        <NavLink to='/favourites' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Favourites</NavLink> : <></>
                                }

                                <NavLink to='/about' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</NavLink>                                <a href="mailto:avezqureshi4785@gmail.com" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
                            </div>
                            {
                                isLoggedIn ?
                                    <div className="py-6">
                                        <p
                                            onClick={logout}
                                            className="-mx-3 block rounded-lg px-3 py-2.5 
                                            cursor-pointer
                                            text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log Out</p>
                                    </div>
                                    :
                                    <div className="py-6">
                                        <NavLink to='/auth' className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</NavLink>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
