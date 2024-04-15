import { combineReducers } from 'redux'
import recipies from './recipies'
import auth from './auth'
const rootReducer = combineReducers({
    recipies,
    auth
});

export default rootReducer;
