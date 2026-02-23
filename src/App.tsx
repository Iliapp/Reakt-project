import './App.css';
import { Provider } from './components/ui/provider';
import Todo from './components/Todo';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
// import {Contact, Layout, Router} from "lucide-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Todo />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
