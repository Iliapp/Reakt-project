import {
	Heading,
	Box,
	Text,
	Input,
	Checkbox,
	Button,
	HStack,
	VStack,
	Image,
	Badge,
} from '@chakra-ui/react';

const Contact = () => {
	return (
		<Box
			backgroundColor="white"
			borderRadius="10px"
			boxShadow="md"
			w="752px"
			h="800px"
		>
			<Heading fontSize="1.9rem" color="black" mb={4}>
				Contact Page
			</Heading>
			<Text color="gray.400" fontSize="1.5rem">
				Сhose a method below to get in touch with me/iliapp
			</Text>

			<Box width="100%" height="1px" bg="gray.300" my={4} />

			{/*// Discrod and Gmail*/}

			<HStack spacing={4} align="stretch">
				<Box
					borderRadius="5px"
					borderColor="gray.300"
					borderWidth="1px"
					bg="gray.50"
					p={4}
					w="400px"
					h="335px"
					mx="30px"
				>
					{/*<Text fontSize="1.5rem">Discord:</Text>*/}
					<VStack spacing={6} align="center">
						<Image
							src="https://pngimg.com/d/discord_PNG7.png"
							borderRadius="full"
							boxSize="100px"
							objectFit="cover"
							border="3px solid"
							borderColor="black.400"
						></Image>
						<Text fontSize="1.5rem" color="black">
							Discord Community
						</Text>
						<Text fontSize="1.3rem" color="gray.400">
							Join our community for real-time(support)
						</Text>
					</VStack>
					<Box width="100%" height="1px" bg="gray.300" my={4} />

					<Badge bg="gray.200" color="black" w="40px" h="10px">
						<Text>iliapp</Text>
					</Badge>
				</Box>

				<Box
					borderRadius="5px"
					borderColor="gray.300"
					borderWidth="1px"
					bg="gray.50"
					p={4}
					w="400px"
					h="335px"
					mx="30px"
				>
					{/*<Text fontSize="1.5rem">Gmail:</Text>*/}
					<VStack spacing={6} align="center">
						<Image
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPLzioKr8pPzSaDsM2WwODrNxEqGP0B-K_Q&s"
							borderRadius="full"
							boxSize="100px"
							objectFit="cover"
							border="3px solid"
							borderColor="black.400"
						></Image>
						<Text fontSize="1.5rem" color="black">
							Email Support
						</Text>
						<Text fontSize="1.3rem" color="gray.400">
							Drop us a line for detailed inquiries
						</Text>
					</VStack>
					<Box width="100%" height="1px" bg="gray.300" my={4} />

					<Badge bg="gray.200" color="black" w="55" h="10px">
						<Text>iliapp@gmail.com</Text>
					</Badge>
				</Box>
			</HStack>

			{/*Далі то блок з заповненняи форми*/}

			{/*Header*/}

			<Box bg="gray.50">
				<Box width="100%" height="1px" bg="gray.300" my={4} />

				<Heading fontSize="1.9rem" color="black" mb={4}>
					Or send a message directly
				</Heading>

				{/*name/email*/}

				<HStack spacing={4} align="stretch" mx="80px" gap="2rem">
					<Box>
						<Text color="black" textAlign="start">
							Name
						</Text>
						<Input
							placeholder="Your name"
							w="276px"
							h="42px"
							borderRadius="10px"
							borderColor="gray.300"
							color="black"
						></Input>
					</Box>

					<Box>
						<Text color="black" textAlign="start">
							Email
						</Text>
						<Input
							placeholder="you@example.com"
							w="276px"
							h="42px"
							borderRadius="10px"
							borderColor="gray.300"
							color="black"
						></Input>
					</Box>
				</HStack>

				{/*message/box*/}
				<Box w="585px" h="100px" mx="80px">
					<Text color="black" textAlign="start">
						Message
					</Text>
					<Input
						as="textarea"
						placeholder="How can we help?"
						borderColor="gray.300"
						color="black"
					></Input>
				</Box>

				<Box mb={4} alignSelf="flex-start">
					<Checkbox.Root>
						<Checkbox.Control />
						<Checkbox.Label color="black">
							I agree to the privacy policy
						</Checkbox.Label>
					</Checkbox.Root>
				</Box>

				{/*button */}

				<Box display="flex" justifyContent="center">
					<Button size="lg" px={8} color="white" w="576px">
						Send message
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
