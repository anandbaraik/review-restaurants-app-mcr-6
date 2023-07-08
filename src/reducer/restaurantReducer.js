import { cuisineData, restaurantsData } from "../assets/asset";

export const initialState = {
    cuisines: cuisineData,
    restaurants: restaurantsData
};

export const restaurantReducer = (state, { type, payload }) => {
    switch (type) {
        case 'INITIALIZE_ALL_USERS':
            return {
                ...state,
                users: [...payload]
            };
        default:
            return  state;
    }
};