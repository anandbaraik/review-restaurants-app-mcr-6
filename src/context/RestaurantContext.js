import { createContext, useContext, useReducer, useState } from "react";
import { initialState, restaurantReducer } from "../reducer/restaurantReducer";

const RestaurantContext = createContext({
	cuisines: [],
    restaurants: [],
	restaurantDispatch : () => {},
	currentCuisine: []
});

export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);
  return (
    <RestaurantContext.Provider
      value={{
		cuisines: state.cuisines,
    	restaurants: state.restaurants,
		restaurantDispatch: dispatch,
		currentCuisine: state.currentCuisine
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);