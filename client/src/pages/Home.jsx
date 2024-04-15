import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Recipies from '../components/Recipes'
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const reload = queryParams.get("reload");
    const navigate = useNavigate();

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        setIsLoggedIn(!!profile); // !! converts the value to a boolean
    }, []);

    useEffect(() => {
        if (reload === "true") {
            // Remove the reload query parameter to avoid continuous reloads
            const newSearch = new URLSearchParams(search);
            newSearch.delete("reload");
            navigate({ search: newSearch.toString() });

            // Reload the page after necessary actions
            window.location.reload();
        }
    }, [reload, search, navigate]);
    return (
        <>
            <Hero />
            <Search />
            <Recipies />
        </>
    )
}