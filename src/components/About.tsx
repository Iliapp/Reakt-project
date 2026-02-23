import {
	Heading,
	Box,
	Text,
	Image,
	HStack,
	VStack,
	Badge,
} from '@chakra-ui/react';

const techLinks = [
	{ name: 'React', url: 'https://react.dev' },
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org' },
	{ name: 'Chakra UI', url: 'https://chakra-ui.com' },
	{
		name: 'JSONPlaceholder  API',
		url: 'https://jsonplaceholder.typicode.com',
	},
	{ name: 'React Router ', url: 'https://reactrouter.com' },
];

const About = () => {
	return (
		<Box as="main" flex={1}>
			<Heading fontSize="1.9rem" color="black" mb="2rem">
				About me Page:
			</Heading>

			<Box
				as="div"
				bg="white"
				borderRadius="1rem"
				borderWidth="1px"
				borderColor="gray.200"
				p="2rem"
				mb="2rem"
				boxShadow="md"
				w="100%"
			>
				<HStack spacing={6} align="center">
					<Image
						src="https://avatars.githubusercontent.com/u/110605762?v=4"
						borderRadius="full"
						boxSize="100px"
						objectFit="cover"
						border="3px solid"
						borderColor="blue.400"
					/>

					<VStack align="start" spacing={2}>
						<Text color="black" fontSize="1.8rem" fontWeight="bold">
							Hi! my name is Iliapp
						</Text>
						<Text color="gray.600" fontSize="1.3rem">
							I created project (To-Do-list) using:
						</Text>

						<Badge bg="white">
							<Text
								color="white"
								fontSize="1.3rem"
								bg="black"
								borderRadius="10px"
								w="150px"
								h="20px"
							>
								{'</>'} Student
							</Text>
						</Badge>
					</VStack>
				</HStack>
			</Box>

			<Heading fontSize="1.9rem" mb={4} color="black">
				Tech Stack:
			</Heading>
			<Box
				bg="white"
				borderRadius="1rem"
				borderWidth="1px"
				borderColor="gray.200"
				p="2rem"
				boxShadow="md"
			>
				{/*<Heading size="md" mb={4}>Tech Stack:</Heading>*/}
				<HStack wrap="wrap" gap={3}>
					{techLinks.map((tech, index) => (
						<Box
							key={index}
							as="a"
							href={tech.url}
							target="_blank"
							rel="noopener noreferrer"
							bg="gray.100"
							color="black"
							px={4}
							py={2}
							borderRadius="full"
							fontSize="1.1rem"
							_hover={{
								bg: 'blue.100',
								transform: 'scale(1.05)',
							}}
							transition="all 0.2s"
						>
							{tech.name}
						</Box>
					))}
				</HStack>
			</Box>
		</Box>
	);
};

export default About;
