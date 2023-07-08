import React from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useRestaurant } from '../context/RestaurantContext'
import ResturantCard from '../components/ResturantCard';
const Home = () => {
    const {cuisines, currentCuisine, restaurantDispatch} = useRestaurant();

    return (
        <Flex justifyContent={'center'} flexDir={'column'} alignItems={'center'}>
            <Heading as='h1' size='2xl' marginTop={5}>Food Ordering App</Heading>
            <Heading as='h2' marginTop={5}>Select your cuisine:</Heading>
            <Flex gap={10} marginTop={5}>
                {
                    cuisines?.map((cuisine) => {
                        return (
                        <Button key={cuisine?.name} colorScheme='pink' variant='solid'
                            onClick={() => restaurantDispatch({type: 'SET_CUISINE' , payload: cuisine?.id})}>
                            {cuisine?.name}
                        </Button>)
                    })
                }
            </Flex>
            {
                (currentCuisine?.length > 0) && (
                    <Flex gap={10} marginTop={5} flexDir={'column'} justifyContent={'start'}
                        margin={5}>
                        {
                            currentCuisine?.map((cuisine) => {
                                return (
                                    <Box key={cuisine?.id} css={{
                                        display:"flex",
                                        flexDirection: "column"
                                    }}>
                                        <Heading as='h5' size='ms' marginTop={5}>
                                            {`Dishes by ${cuisine?.name}`}
                                        </Heading>
                                        <ResturantCard resturant={cuisine?.name} menus={cuisine?.menu}/>
                                    </Box>
                                )
                            })
                        }
                    </Flex>
                )
            }
        </Flex>
    )
}

export default Home