import { cuisineData, restaurantsData } from "../assets/asset";

export const initialState = {
    cuisines: cuisineData,
    restaurants: restaurantsData,
    currentCuisine: []
};

export const restaurantReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_CUISINE':
            return {
                ...state,
                currentCuisine: [...state.restaurants].filter(({cuisine_id}) => cuisine_id == payload)
            };
        default:
            return  state;
    }
};