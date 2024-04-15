import { FETCH_RECIPIES } from "../constants/actionTypes";

export default (recipies = [], action) => {
    switch (action.type) {
        case FETCH_RECIPIES:
            return action.payload;
            break;
        default:
            return recipies;
    }
};
