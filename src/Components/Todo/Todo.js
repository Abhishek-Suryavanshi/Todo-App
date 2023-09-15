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
        setTodos((prevState) => {
            let data = prevState.map((todo) => {
                return (todo.id == id) ? { name: todo.name, id: todo.id, checked: !todo.checked } : todo;
            })

            localStorage.setItem('todos', JSON.stringify(data));
            return data;
        })
    }

    const deleteItem = (id) => {
        setTodos((prevState) => {
            let data = prevState.filter((task) => {
                if (task.id != id) return true;
            })

            localStorage.setItem('todos', JSON.stringify(data));
            return data;
        })
    }

    const upArrowHandler = (id) => {
        // console.log(id);
        setTodos((prevState) => {
            let index;
            let data = prevState.map((item, indx) => {
                if (item.id == id) {
                    index = indx;
                }

                return item;
            })

            let temp = data[index];
            data[index] = data[index - 1];
            data[index - 1] = temp;

            return data;
        })
    }

    const downArrowHandler = (id) => {
        // console.log(id);
        setTodos((prevState) => {
            let index;
            let data = prevState.map((item, indx) => {
                if (item.id == id) {
                    index = indx;
                }

                return item;
            })

            let temp = data[index];
            data[index] = data[index + 1];
            data[index + 1] = temp;

            return data;
        })
    }

    return (
        <div className={styles.todo}>
            <TodoHeading />
            <TodoInput updateTodo={updateTodo} />
            <Todolist
                todos={todos}
                updateCheckBox={updateCheckBox}
                deleteItem={deleteItem}
                upArrowHandler={upArrowHandler}
                downArrowHandler={downArrowHandler}
            />
        </div>
    )
}

export default Todo