import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


export default function Single() {
    const { id } = useParams();
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`, {
                    params: {
                        apiKey: '7e8a60f7c07947019124d8cf97f689a2'
                    }
                });

                // Assuming response.data.results is an array of recipes
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);
    console.log(recipe)
    return (
        <div className="bg-white container" style={{ marginTop: '3%' }}>
            <div className="p-10">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{recipe.title}</h1>
                        </div>
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900 line-clamp-3">{recipe.summary}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Ingridients</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {recipe.extendedIngredients?.map((item, index) => (
                                            <li className="text-gray-400">
                                                <span className="text-gray-600">{item.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Product info */}
                <div className="ml-15 mr-15 mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Steps to Cook</h2>

                    <div className="mt-4 space-y-6">
                        {
                            recipe.analyzedInstructions?.[0].steps.map((item, index) => {
                                return (
                                    <li className="text-sm text-gray-600"> Step: {index + 1}{"  "}{item?.step}</li>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
