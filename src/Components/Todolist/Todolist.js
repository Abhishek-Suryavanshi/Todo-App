import React from 'react'
import TodoItems from '../TodoItems/TodoItems';
import styles from './Todolist.module.css'

const Todolist = (props) => {
    const { todos, updateCheckBox, deleteItem, upArrowHandler, downArrowHandler } = props;
    return (
        <div className={styles.listContainer}>
            <ul>
                {todos.map((item, indx) =>
                    <TodoItems
                        updateCheckBox={updateCheckBox}
                        deleteItem={deleteItem}
                        upShow={indx != 0 ? true : false}
                        downShow={indx != todos.length - 1 ? true : false}
                        key={item.id}
                        task={item}
                        upArrowHandler={upArrowHandler}
                        downArrowHandler={downArrowHandler}
                    />)}
            </ul>
        </div>
    )
}

export default Todolist