import React, { useState } from 'react';
import type {ITodo} from '../types';











const Todo: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([
        // {id: 1, text: "first task", completed: false},
        // {id: 2, text: "second task", completed: true},
        // {id: 3, text: "second task", completed: false},

    ]);

    const [input, setInput] = useState("");

    const HandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };


    const AddTodo = () => {
        if (!input.trim()) {
            return;
        }

        const newTodo: ITodo = {
            id: Date.now(),
            text: input,
            completed: false,
        }

        setTodos(prevTodos => [...prevTodos, newTodo]);
        setInput("");


    };

    const DeleteTodo = (id:number) => {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));



    };

    const ToggleTodo = (id:number) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? {...todo, completed:  !todo.completed}
                :todo
        ));
    };





    return (

        <>
            <div className="Todo-center">
                <h1>To-do App</h1>
                <input type={"text"}  value={input} onChange={HandleInput} />
                <button onClick={AddTodo}>add</button>


                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.completed} onChange={() => ToggleTodo(todo.id)} />
                            {todo.text}
                            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>






            </div>



        </>

    );


};


export default Todo;