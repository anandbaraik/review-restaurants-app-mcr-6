import {Box,Button,Divider,Flex,FormControl,FormLabel,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Spacer,Textarea, Select, useToast} from '@chakra-ui/react';
import React, {useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
const ReviewModal = ({ isOpen, onClose, restId }) => {
    const {restaurantDispatch} = useRestaurant();
    const toast = useToast()
    const [review, setReview] = useState({
        rating: "",
        comment: "",
        pp: "https://pbs.twimg.com/profile_images/1296817987920396289/aDAUAvaZ_400x400.jpg",
        revName: "Anand"
    });

    const addReview = (e) => {
        e.preventDefault();
        if(review.rating.trim().length == 0) {
            toast({
                title: 'Please choose rating',
                status: 'error',
                duration: 1000,
                position: 'top-right',
                isClosable: true,
              })
            return;
        } else if(review.comment.trim().length == 0) {
            toast({
                title: 'Please write comment',
                status: 'error',
                position: 'top-right',
                duration: 1000,
                isClosable: true,
              })
            return;
        }
        restaurantDispatch({type: 'ADD_REVIEW', payload: {review: review, restId: restId}})
        onClose();
        setReview({
            rating: "",
            comment: "",
            pp: "https://pbs.twimg.com/profile_images/1296817987920396289/aDAUAvaZ_400x400.jpg",
            revName: "Anand"
        });
    }
    const cancelReviewHandler = () => {
        setReview({
            rating: "",
            comment: "",
            pp: "https://pbs.twimg.com/profile_images/1296817987920396289/aDAUAvaZ_400x400.jpg",
            revName: "Anand"
        });
        onClose();
    };

    const inputHandler = (e, inputType) => {
        setReview(prev => ({ ...prev, [inputType]: e.target.value }));
    };

    return (
		<Modal
		isOpen={isOpen}
		onClose={cancelReviewHandler}
		size="xl"
         isCentered
	  >
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(0.5rem)' />
		<ModalContent w={{ base: '90vw' }}>
		  <ModalHeader>Add Your Review</ModalHeader>
		  <ModalCloseButton />
		  <Divider borderColor="gray.500" />
		  <ModalBody p={4}>
			<Flex gap={2} h="10rem">
			  <Box flexGrow={1}>
                <FormControl isRequired>
                    <FormLabel>Rating</FormLabel>
                    <Select placeholder='Select rating' onChange={e => inputHandler(e, 'rating')}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Comment</FormLabel>
                    <Textarea
                        value={review.comment}
                        size='sm'
                        resize="none"
                        rows={'2'}
                        onChange={e => inputHandler(e, 'comment')}
                    />
                </FormControl>
			  </Box>
			</Flex>
		  </ModalBody>
		  <Divider borderColor="gray.500" />
		  <ModalFooter p={2}>
			<Flex w="full" alignItems={'center'}>
			  <Spacer />
			  <Button
				colorScheme="pink"
				borderRadius="full"
				onClick={addReview}
			  >
				Submit
			  </Button>
			</Flex>
		  </ModalFooter>
		</ModalContent>
	  </Modal>
    );
  };

  export default ReviewModal;