import React from 'react'
import {Flex,  Card, Stack, CardBody, Heading, Text, Image } from '@chakra-ui/react'
const ResturantCard = ({resturant, menus}) => {
  return (
    <Flex flexWrap={'wrap'} gap={5} margin={5}>
    {
        menus?.map((menu, index) => {
            return (
                <Card maxW='sm' key={index}>
                    <CardBody>
                        <Image
                        src={menu?.imgSrc}
                        alt={menu?.name}
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            {menu?.name}
                        </Heading>
                        <Text>
                           Rs {menu?.price} for {menu?.qty}
                        </Text>
                        <Text>
                           {resturant}
                        </Text>
                        </Stack>
                    </CardBody>
                </Card>
            )
        })
    }
    </Flex>
  )
}

export default ResturantCard