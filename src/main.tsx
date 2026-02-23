import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todo from './components/Todo'

// import App from './App.tsx'
import Todo from "./components/Todo.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)


