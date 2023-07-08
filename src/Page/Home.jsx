import React from 'react'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { useRestaurant } from '../context/RestaurantContext'
const Home = () => {
    const {cuisines, restaurants} = useRestaurant();
    return (
        <Flex justifyContent={'center'} flexDir={'column'} alignItems={'center'}>
            <Heading as='h1' size='2xl' marginTop={5}>Food Ordering App</Heading>
            <Heading as='h2' marginTop={5}>Select your cuisine:</Heading>
            <Flex gap={10} marginTop={5}>
                {
                    cuisines?.map((cuisine) => {
                        return (<Button key={cuisine?.name} colorScheme='pink' variant='solid'>
                            {cuisine?.name}
                        </Button>)
                    })
                }
            </Flex>
        </Flex>
    )
}

export default Home