import { React } from "react";
import styles from "./Todos.module.css";
import img from "../../basked.png";

export const Todos = (props) => {

  return (

    <div className={styles.inner}>
      <label className={styles.lobel}>
        <div className={styles.input_wrapper}>
          <input
            type="checkbox"
            onChange={() => { props.handleActiveTodo(props.item.todo) }}
            defaultChecked={props.item.active}
            className={styles.checkbox} />
          <span className={styles.fakeBtn}></span>
          <span className={styles.lobelText}>{props.item.todo}</span>
        </div>
        {props.item.active &&
        <input type="image" src={img} alt="img" onClick={() => {props.hendleDeleteTodo(props.item.todo)}} className={styles.btn} />
        }
      </label>
    </div>
  )
}

   