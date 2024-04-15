import React, { useEffect } from 'react';
import Recipe from './Recipe';
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../redux/actions/recipies';
const Recipies = () => {
    const dispatch = useDispatch();
    const recipies = useSelector((state) => state.recipies?.results);
    console.log(recipies);
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                        recipies && recipies?.map((item, index) => {
                            return (
                                <Recipe recipie={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipies;
