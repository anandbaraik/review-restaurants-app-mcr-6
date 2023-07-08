import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRestaurant } from '../context/RestaurantContext';
import { Badge, Box, Button, Divider, Flex, Heading, Icon, IconButton, Text, Avatar } from '@chakra-ui/react';
import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons'
const RestaurantDetails = () => {
  const {id} = useParams();
  const {getResturantDetails} = useRestaurant();
  const resturant = getResturantDetails(id);
  const menus = resturant?.menu?.reduce((acc, {name}) => [...acc, name], []).join(', ');
  console.log(id, resturant);
  return (
    <Box margin={10}>
		<Flex>
			<Link to={'/'}>
				<IconButton
					variant='outline'
					colorScheme='purple'
					icon={<ArrowBackIcon />}
				/>
			</Link>
		</Flex>
		<Box>
			<Flex justifyContent={'space-around'} alignItems={'center'} gap={10}>
				<Flex flexDir={'column'}>
					<Heading  as='h1' size='2xl' marginTop={5}>
						{resturant?.name}
					</Heading>
					<Text>
						{menus}
					</Text>
					<Text>
						{resturant?.address}
					</Text>
					<Text>
						Average Rating : {resturant?.averageRating}
					</Text>
				</Flex>
				<Flex>
					<Button colorScheme='pink' variant='solid'
						onClick={() => {}}>
						Add Review
					</Button>
				</Flex>
			</Flex>
		</Box>
		<Divider/>
		<Box>
			<Flex>
				<Heading  as='h3' size='md' marginTop={5}>
					Reviews
				</Heading>
			</Flex>
			{
				(resturant?.ratings?.length > 0) && (
					resturant?.ratings?.map((rating, index) => {
						return (
							<>
								<Box key={index} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={10} flexDir={'column'}>
									<Flex justifyContent={'space-between'} alignItems={'center'} gap={10} >
										<Flex alignItems={'center'}>
											<Avatar src={rating?.pp}/>
											<Box ml='3'>
												<Text fontWeight='bold'>
													{rating?.revName}
												</Text>
											</Box>
										</Flex>
										<Flex>
											<Badge variant='solid' colorScheme='green'>
												{rating?.rating} <Icon as={StarIcon}></Icon>
											</Badge>
										</Flex>
									</Flex>
									<Box>
										<Text>
											{rating?.comment}
										</Text>
									</Box>
								</Box>
								<Divider/>
							</>
						)
					})
				)
			}
		</Box>
    </Box>
  )
}

export default RestaurantDetails