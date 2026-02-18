import { Outlet } from 'react-router-dom';
import { Heading, Box, Text, HStack, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Layout = () => {
	return (
		<Box minH="100vh" display="flex" flexDirection="column">
			<Box as="header" py={1}>
				<Heading
					fontSize="3rem"
					display="flex"
					justifyContent="center"
					color="black"
					mb={10}
				>
					To-Do-App
				</Heading>

				<Box display="flex" justifyContent="center">
					<Box
						as="nav"
						bg="#d1d1d1"
						borderRadius="20px"
						px={4}
						py={1}
						w="400px"
						borderColor="black"
						borderWidth="1px"
					>
						<HStack gap={1} justify="center">
							<Button
								color="black"
								w="130px"
								h="2.6rem"
								borderRadius="20px"
								as={NavLink}
								variant="ghost"
								_hover={{ bg: 'white' }}
								to="/"
							>
								Todo
							</Button>
							<Button
								color="black"
								w="130px"
								h="2.6rem"
								borderRadius="20px"
								as={NavLink}
								variant="ghost"
								_hover={{ bg: 'white' }}
								to="/about"
							>
								About
							</Button>
							<Button
								color="black"
								w="130px"
								h="2.6rem"
								borderRadius="20px"
								as={NavLink}
								variant="ghost"
								_hover={{ bg: 'white' }}
								to="/contact"
							>
								Contact
							</Button>
						</HStack>
					</Box>
				</Box>
			</Box>

			<Box as="main" flex="1" p={6} w="800px" mx="auto" mt={180}>
				<Outlet />
			</Box>

			<Box as="footer" py={1}>
				<Text textAlign="center" mt={2} fontSize="sm">
					© 2026 Iliapp.
				</Text>
			</Box>
		</Box>
	);
};

export default Layout;
