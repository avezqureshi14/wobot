import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from '../components/Recipe';

const AllRecipes = () => {
    const [searchQuery, setSearchQuery] = useState('chicken');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async (query) => {
            try {
                const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                    params: {
                        query: query,
                        maxFat: 1000,
                        number: 50,
                        apiKey: '7e8a60f7c07947019124d8cf97f689a2'
                    }
                });
                setRecipes(response.data.results);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes(searchQuery);
    }, [searchQuery]); // Trigger fetch when searchQuery changes

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    console.log(recipes)

    const filteredRecipes = recipes?.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='allr' style={{ marginTop: "10%" }}>
            <div className="flex justify-center items-center">
                <div className="bg-white flex justify-center items-center">
                    <div className="max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 mx-auto">
                        <div className="text-center max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                What do you want to cook?
                            </h2>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <input
                                    name="search"
                                    type="search"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="min-w-0 flex-auto rounded-md border-gray-300 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-opacity-50 sm:text-sm sm:leading-6"
                                    placeholder="Search recipes..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Recipes</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {filteredRecipes?.map((recipe, index) => (
                            <Recipe key={index} recipie={recipe} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRecipes;
