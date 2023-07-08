import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRestaurant } from '../context/RestaurantContext';
import { Badge, Box, Button, Divider, Flex, Heading, Icon, IconButton, Text, Avatar, useDisclosure } from '@chakra-ui/react';
import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons'
import ReviewModal from '../components/ReviewModal';
const RestaurantDetails = () => {
  const {id} = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {getResturantDetails} = useRestaurant();
  const resturant = getResturantDetails(id);
  const menus = resturant?.menu?.reduce((acc, {name}) => [...acc, name], []).join(', ');
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
			<Flex justifyContent="space-between" alignItems={'center'} gap={10}>
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
						onClick={onOpen}>
						Add Review
					</Button>
					<ReviewModal
                        isOpen={isOpen}
                        onClose={onClose}
						restId={id}
                      />
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
							<Flex flexDir="column" marginTop={3} gap={2} key={index}>
								<Flex justifyContent="space-between" alignItems={'center'}>
									<Flex gap={2}>
										<Avatar src={rating.pp} size="sm" />
										<Text fontWeight="bold">{rating.revName}</Text>
									</Flex>
									<Flex >
										<Badge variant='solid' colorScheme='green'>
											{rating?.rating} <Icon as={StarIcon}></Icon>
										</Badge>
									</Flex>
								</Flex>
								<Text>{rating?.comment}</Text>
								<Divider borderColor="gray.600" />
							</Flex>
						)
					})
				)
			}
		</Box>
    </Box>
  )
}

export default RestaurantDetails