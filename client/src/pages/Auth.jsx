import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../redux/actions/auth";
import { NavLink, useNavigate } from "react-router-dom";

export default function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous error

        try {
            if (isSignUp) {
                await dispatch(signup(formData));
                navigate("/?=true"); // Redirect to home after successful signup
            } else {
                await dispatch(signin(formData));
                navigate("/?reload=true"); // Redirect to home after successful signin
            }
        } catch (error) {
            setError("Error: Authentication failed. Please try again.");
        }
    };

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        setError(""); // Clear error when toggling form
    };

    return (
        <>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <NavLink to='/' className="-m-1.5 p-1.5 text-center">
                        <h1 style={{ fontSize: "2rem", fontWeight: "bolder" }}>Avez.</h1>
                    </NavLink>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {isSignUp ? "Create an account" : "Sign in to your account"}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {!isSignUp && (
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">

                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isSignUp ? "Sign up" : "Sign in"}
                            </button>
                        </div>
                    </form>

                    {error && (
                        <p className="mt-4 text-center text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <p className="mt-6 text-center text-sm text-gray-500">
                        {isSignUp
                            ? "Already have an account?"
                            : "Not a member?"}{' '}
                        <button
                            onClick={toggleForm}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 focus:outline-none"
                        >
                            {isSignUp ? "Sign in instead" : "Create an account"}
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}
