import './App.css';
import { Provider } from './components/ui/provider';
import Todo from './components/Todo';

function App() {
	return (
		<Provider>
			<Todo />
		</Provider>
	);
}

export default App;
