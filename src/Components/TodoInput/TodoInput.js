import React, { useRef, useState } from 'react'
import styles from './TodoInput.module.css'

const TodoInput = (props) => {
  const { updateTodo } = props;
  // const [newtask, setnewtask] = useState("");
  const newtask = useRef("");

  const btnClickHandler = () => {
    // if (newtask) {
    // updateTodo(newtask);
    //   // setnewtask("");
    // }

    // console.log(newtask.current.value);
    if (newtask.current.value) {
      updateTodo(newtask.current.value);
      newtask.current.value = "";
    }
  }

  // const inputChangeHandler = (ev) => {
  //   // console.log(ev.target.value);
  //   // setnewtask(ev.target.value);
  // }

  return (
    <div className={styles.InputContainer}>
      <input
        type='text'
        placeholder='Enter New Task'
        // value={newtask}
        ref={newtask}
      // onChange={inputChangeHandler}
      />
      <br/>
      <button onClick={btnClickHandler}>Add Task</button>
    </div>
  )
}

export default TodoInput