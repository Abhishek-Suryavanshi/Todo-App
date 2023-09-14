import React from 'react'
import TodoItems from '../TodoItems/TodoItems';

const Todolist = (props) => {
    const { todos, updateCheckBox, deleteItem } = props;
    return (
        <div>
            <ul>
                {todos.map((item, indx) =>
                    <TodoItems
                        updateCheckBox={updateCheckBox}
                        deleteItem={deleteItem}
                        upShow={indx != 0 ? true : false}
                        downShow={indx != todos.length - 1 ? true : false}
                        key={item.id}
                        task={item}
                    />)}
            </ul>
        </div>
    )
}

export default Todolist