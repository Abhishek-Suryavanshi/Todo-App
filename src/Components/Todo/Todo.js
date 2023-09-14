import React, { useState } from 'react'
import TodoInput from '../TodoInput/TodoInput'
import Todolist from '../Todolist/Todolist'
import TodoHeading from '../TodoHeading/TodoHeading'
import { v4 as uuidv4 } from 'uuid';
import styles from './Todo.module.css'

const Todo = () => {
    let initalTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initalTodos);

    const updateTodo = (newtask) => {
        // console.log(newtask);
        let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
        newtodos.unshift({ name: newtask, id: uuidv4(), checked: false });
        localStorage.setItem('todos', JSON.stringify(newtodos));

        setTodos(newtodos);
    }

    const updateCheckBox = (id) => {
        // console.log(id);
        setTodos((prevState) =>
            prevState.map((todo) => {
                return (todo.id == id) ? { name: todo.name, id: todo.id, checked: !todo.checked } : todo;
            })
        )
    }

    const deleteItem = (id) => {
        setTodos((prevState) =>
            prevState.filter((task) => {
                if (task.id != id) return true;
            })
        )
    }

    return (
        <div className={styles.todo}>
            <TodoHeading />
            <TodoInput updateTodo={updateTodo} />
            <Todolist todos={todos} updateCheckBox={updateCheckBox} deleteItem={deleteItem} />
        </div>
    )
}

export default Todo