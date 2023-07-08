import { Route, Routes } from 'react-router-dom';
import {ChakraProvider,theme} from '@chakra-ui/react';
import Home from "./Page/Home";
import RestaurantDetails from "./Page/RestaurantDetails";
export default function App() {
  return (
  <div className="App">
    <ChakraProvider theme={theme}>
      	<Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurant/:id/details" element={<RestaurantDetails/>}/>
      	</Routes>
    </ChakraProvider>
  </div>
);
}