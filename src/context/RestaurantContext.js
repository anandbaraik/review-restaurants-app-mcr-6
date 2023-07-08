import { createContext, useContext, useReducer, useState } from "react";
import { initialState, restaurantReducer } from "../reducer/restaurantReducer";

const RestaurantContext = createContext({
	cuisines: [],
    restaurants: [],
	restaurantDispatch : () => {}
});

export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);
  const [activeCuisine, setActiveCuisine] = useState("");
  return (
    <RestaurantContext.Provider
      value={{
		cuisines: state.cuisines,
    	restaurants: state.restaurants,
		restaurantDispatch: dispatch,
		activeCuisine,
		setActiveCuisine
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);