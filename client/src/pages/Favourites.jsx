import React from 'react'
import Recipe from '../components/Recipe'

const Favourites = () => {
    const recipesString = localStorage.getItem("favoriterecipies");
    const recipies = JSON.parse(recipesString);
    console.log(recipies);
    return (
        <>
            < div className="bg-white" >
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h1 className='text-3xl font-extrabold my-8' >Favourites</h1 >
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {recipies.length !== 0 ? (
                            recipies.map((item, index) => (
                                <Recipe key={index} recipie={item} />
                            ))
                        ) : (
                            <p>No favorites found</p>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Favourites

