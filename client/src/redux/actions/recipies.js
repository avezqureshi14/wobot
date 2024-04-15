import axios from 'axios';
import { FETCH_RECIPIES } from '../constants/actionTypes';


export const fetchRecipes = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                query: 'cake',
                maxFat: 1000,
                number: 50,
                apiKey: '7e8a60f7c07947019124d8cf97f689a2'
            }
        });
        dispatch({ type: FETCH_RECIPIES, payload: response.data });
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};
