import { React, useState } from "react";
import styles from './Input.module.css';


export const Input = (props) => {

  const [message, setMessage]= useState("")

// функция получает доступ к значению ввода
  const hendleChange = (Event) => {
    setMessage(Event.target.value)
  }
  // выводит значение при нажатии кнопки
  const hendleSubmit = (Event) => {
    Event.preventDefault();
    props.submitAddTodo(message);
    console.log('hendleSubmit', message);
  }


  return (
    <div className={styles.inner}>
      <form onSubmit={hendleSubmit} className={styles.form}>

        <input
          className={styles.innerInput}
          type="text"
          placeholder="What will you do today?"
          name = "message"
          onChange={hendleChange}
          value={message}
          autoComplete="off"
        />

        <input type='submit' className={styles.innerBtn} value="ADD" />
      </form>
    </div>
  )
}  
