import React, { useState, useEffect } from 'react';
// import type { ITodo } from '../types.ts';
import { FaTrashAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import {
	Box,
	Heading,
	Image,
	Input,
	Button,
	List,
	Text,
	Checkbox,
	Flex,
} from '@chakra-ui/react';
// import { getTodos, addTodo, updateTodo, deleteTodo } from '../api/todosApi.ts';
import { useTodoStore } from '../store/todoStore.ts';
import '../main.scss';

const MotionListItem = chakra(motion.li);
// const MotionButton = chakra(motion.button);

const Todo: React.FC = () => {
	// const [todos, setTodos] = useState<ITodo[]>([]);
	const [input, setInput] = useState('');
	// const [loading, setLoading] = useState(true);
	// const [loadingId, setLoadingId] = useState<number | null>(null);
	// const [adding, setAdding] = useState(false);

	const todos = useTodoStore((state) => state.todos);
	const loading = useTodoStore((state) => state.loading);
	const adding = useTodoStore((state) => state.adding);
	const loadingId = useTodoStore((state) => state.loadingId);
	const addTodo = useTodoStore((state) => state.addTodo);
	const deleteTodo = useTodoStore((state) => state.deleteTodo);
	const toggleTodo = useTodoStore((state) => state.toggleTodo);
	const fetchTodos = useTodoStore((state) => state.fetchTodos);

	const HandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	// const AddTodo = async () => {
	// 	if (!input.trim()) return;
	//
	// 	try {
	// 		setAdding(true);
	// 		const response = await addTodo(input);
	// 		const newTodo: ITodo = {
	// 			id: Date.now(),
	// 			text: response.data.title,
	// 			completed: response.data.completed,
	// 		};
	// 		setTodos((prev) => [...prev, newTodo]);
	// 		setInput('');
	// 	} catch (error) {
	// 		console.error(error);
	// 	} finally {
	// 		setAdding(false);
	// 	}
	// };

	// const DeleteTodo = async (id: number) => {
	// 	try {
	// 		setLoadingId(id);
	// 		await deleteTodo(id);
	// 		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	// 	} catch (error) {
	// 		console.error(error);
	// 	} finally {
	// 		setLoadingId(null);
	// 	}
	// };

	// const ToggleTodo = async (id: number) => {
	// 	const todo = todos.find((t) => t.id === id);
	// 	if (!todo) return;
	//
	// 	const oldCompleted = todo.completed;
	//
	// 	setTodos(
	// 		todos.map((t) =>
	// 			t.id === id ? { ...t, completed: !oldCompleted } : t
	// 		)
	// 	);
	//
	// 	try {
	// 		setLoadingId(id);
	// 		await updateTodo(id, !oldCompleted);
	// 	} catch (error) {
	// 		setTodos(
	// 			todos.map((t) =>
	// 				t.id === id ? { ...t, completed: oldCompleted } : t
	// 			)
	// 		);
	// 		console.error(error);
	// 	} finally {
	// 		setLoadingId(null);
	// 	}
	// };

	useEffect(() => {
		// const fetchTodos = async () => {
		// 	try {
		// 		setLoading(true);
		// 		const response = await getTodos();
		// 		const formattedTodos = response.data.map((todo: ITodo) => ({
		// 			id: todo.id,
		// 			text: todo.text,
		// 			completed: todo.completed,
		// 		}));
		// 		setTodos(formattedTodos);
		// 	} catch (error) {
		// 		console.log(error);
		// 	} finally {
		// 		setLoading(false);
		// 	}
		// };
		fetchTodos();
	}, []);

	return (
		<Box
			bg="white"
			position="absolute"
			m="auto"
			top="40%"
			left="50%"
			transform="translate(-50%, -50%)"
			p={8}
			borderRadius="15px"
			width="500px"
			maxWidth="90%"
			boxShadow="xl"
			zIndex={10}
		>
			<Flex align="center" justify="center" mb={12}>
				<Image
					src="https://media.tenor.com/EFDwfjT2GuQAAAAM/spinning-cat.gif"
					alt="cat spinning"
					boxSize="30px"
					mr={3}
				/>
				<Heading
					size="lg"
					color="black"
					fontWeight="bold"
					fontSize="1.7rem"
					fontFamily="'Oswald', sans-serif"
					mt={0}
				>
					To-do App
				</Heading>
			</Flex>

			<Flex width="115%" mb={6} ml="-7.5%">
				<Input
					type="text"
					value={input}
					onChange={HandleInput}
					placeholder="Add your task"
					borderRadius="50px"
					w="400px"
					right="-3.7rem"
					h="3.5rem"
					bg="rgba(128, 128, 128, 0.27)"
					border="none"
					color="black"
					flex={1}
					pl="1.5rem"
					_focus={{
						outline: 'none',
						boxShadow: 'none',
					}}
					_placeholder={{
						color: 'black',
						opacity: 0.5,
					}}
				/>
				<Button
					onClick={() => {
						addTodo(input);
						setInput('');
					}}
					disabled={adding}
					bg="#ff5c5c"
					color="white"
					border="none"
					px="20px"
					py="10px"
					// right="1rem"
					borderRadius="50px"
					fontSize="16px"
					fontWeight="bold"
					cursor="pointer"
					left="-3rem"
					position="relative"
					width="125px"
					h="3.5rem"
					_hover={{
						bg: '#e05252',
						transform: 'scale(1)',
					}}
				>
					{adding ? 'Adding...' : 'add'}
				</Button>
			</Flex>

			{loading ? (
				<Text textAlign="center" py={4} color="gray.500" fontSize="lg">
					Task loading
				</Text>
			) : (
				// tyt rozibratysia z animation
				<AnimatePresence>
					<List.Root gap={3} mt={4}>
						{todos.map((todo) => (
							<MotionListItem
								// as={motion.li}
								key={todo.id}
								display="flex"
								alignItems="flex-start"
								justifyContent="space-between"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, x: -100 }}
								// transition={{ duration: 0.3}}
							>
								<Flex gap={2} flex={1}>
									<Checkbox.Root
										checked={todo.completed}
										onCheckedChange={() =>
											toggleTodo(todo.id)
										}
										disabled={loadingId === todo.id}
										colorPalette="green"
										mt={1}
									>
										<Checkbox.HiddenInput />
										<Checkbox.Control
											boxSize="25px"
											borderRadius="full"
											borderColor="#555"
											_checked={{
												bg: '#4caf50',
												borderColor: '#4caf50',
											}}
										>
											<Checkbox.Indicator>
												<Box
													as="span"
													fontSize="18px"
													color="white"
												>
													✓
												</Box>
											</Checkbox.Indicator>
										</Checkbox.Control>
									</Checkbox.Root>

									<motion.div
										animate={{
											color: todo.completed
												? '#d1d1d1'
												: 'black',
										}}
									>
										{/*transition={{ duration: 0.3 }}*/}
										<Text
											fontSize="20px"
											wordBreak="break-word"
											// color={
											// 	todo.completed ? '#d1d1d1' : 'black'
											// }
											textDecoration={
												todo.completed
													? 'line-through'
													: 'none'
											}
											lineHeight="1.4"
											fontFamily="'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif"
											opacity={
												loadingId === todo.id ? 0.5 : 1
											}
										>
											{todos.indexOf(todo) + 1}.{' '}
											{todo.text}
										</Text>
									</motion.div>
								</Flex>

								<Button
									variant="ghost"
									onClick={() => deleteTodo(todo.id)}
									disabled={loadingId === todo.id}
									p={1}
									minW="auto"
									h="auto"
									bg="transparent"
									ml={2}
									_hover={{ bg: 'transparent' }}
								>
									<FaTrashAlt
										size={40}
										color={
											todo.completed
												? '#ff0000'
												: '#adb5bd'
										}
									/>
								</Button>
							</MotionListItem>
						))}
					</List.Root>
				</AnimatePresence>
			)}
		</Box>
	);
};

export default Todo;
