import { createContext, useContext, useReducer, useState } from "react";
import { initialState, restaurantReducer } from "../reducer/restaurantReducer";

const RestaurantContext = createContext({
	cuisines: [],
    restaurants: [],
	restaurantDispatch : () => {},
	currentCuisine: [],
	getResturantDetails: () => {}
});

export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);
  const getResturantDetails = (restId) => {
	return state?.restaurants?.find(({id}) => id == restId);
  }
  return (
    <RestaurantContext.Provider
      value={{
		cuisines: state.cuisines,
    	restaurants: state.restaurants,
		restaurantDispatch: dispatch,
		currentCuisine: state.currentCuisine,
		getResturantDetails
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);