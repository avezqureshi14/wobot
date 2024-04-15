import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import defaultImage from "../assets/images/food.png"
const Recipe = ({ recipie }) => {
    const [isFavorite, setIsFavorite] = useState(false);


    // Check local storage on component mount to set initial favorite status
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoriterecipies')) || [];
        setIsFavorite(storedFavorites.some(item => item.id === recipie.id));
    }, [recipie.id]);

    const toggleFavorite = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoriterecipies')) || [];
        let updatedFavorites;
        if (isFavorite) {
            // Remove from favorites
            updatedFavorites = storedFavorites.filter(item => item.id != recipie.id);
            localStorage.setItem('favoriterecipies', JSON.stringify(updatedFavorites));
        } else {
            // Add to favorites
            updatedFavorites = [...storedFavorites, { id: recipie.id, title: recipie.title, image: recipie.image }];
            localStorage.setItem('favoriterecipies', JSON.stringify(updatedFavorites));
        }
        window.location.reload();

        setIsFavorite(!isFavorite);
    };
    return (
        <>
            <div>

                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 object-cover">
                    <NavLink to={`/recipie/${recipie?.id}`} className="group">
                        <img
                            src={recipie?.image ? recipie?.image : defaultImage}
                            alt={recipie?.title}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </NavLink>
                </div>
                <div className='flex items-center justify-between my-2' >
                    <h3 className="mt-4 text-sm text-gray-700">{recipie?.title}</h3>
                    <i onClick={toggleFavorite} class='bx bxs-heart items-end' style={{ color: "red", fontSize: "1.5rem" }} ></i>
                </div>
            </div>
        </>
    )
}

export default Recipe
