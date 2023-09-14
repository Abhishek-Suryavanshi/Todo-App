import React from 'react'
import styles from './TodoItems.module.css'

// let myStyle = { 'text-decoration': 'line-through' };

const TodoItems = (props) => {
    let { task, upShow, downShow, updateCheckBox, deleteItem } = props;

    const updateCheckBoxHandler = (ev) => {
        // console.log(ev.target.className);
        // console.log(ev.target.parentElement.id);
        let id = ev.target.parentElement.id;

        let class_name = ev.target.className;

        if (class_name == 'checkbox') {
            updateCheckBox(id);
        }
        else if (class_name == 'upArrow') {

        }
        else if (class_name == 'downArrow') {

        }
        else if (class_name == 'delete') {
            deleteItem(id);
        }
    };

    let strikeOrNot = task.checked ? 'line-through' : '';
    return (
        // Applying on this because yhe pta chal jayega kha click kra
        <div id={task.id} onClick={updateCheckBoxHandler} className='itemContainer'>
            <input className="checkbox" type='checkbox' />
            <span style={{ 'textDecoration': strikeOrNot }}>{task.name}</span>
            {upShow && <button className='upArrow'>↑</button>}
            {downShow && <button className='downArrow'>↓</button>}
            <button className='delete'>X</button>
        </div >
    )
}

export default TodoItems