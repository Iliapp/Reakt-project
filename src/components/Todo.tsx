import React, { useState } from 'react';
import type {ITodo} from '../types';
import '../main.scss'











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
            <div className="todo">
                <h1 className="todo__title">
                    <img
                        src="https://media.tenor.com/EFDwfjT2GuQAAAAM/spinning-cat.gif"
                    alt="cat spinning"
                    className="todo__icon"
                />
                    To-do App</h1>
                <input className="todo__input" type={"text"}  value={input} onChange={HandleInput}  placeholder={"Add you task"} />
                <button className="todo__button" onClick={AddTodo}>add</button>


                <ul className="todo__list">
                    {todos.map(todo => (
                        <li key={todo.id} className="todo__item">
                            <input type="checkbox" checked={todo.completed} onChange={() => ToggleTodo(todo.id)}  className="todo__checkbox" />
                            <span className={`todo__text ${todo.completed ? 'todo__text--completed' : ''}`} >
                            {todo.text}
                            </span>
                            <button className="todo__button todo__button--delete" onClick={() => DeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>







            </div>



        </>

    );


};


export default Todo;