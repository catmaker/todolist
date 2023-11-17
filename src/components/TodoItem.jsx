import React from "react";
import styles from "../assets/module/TodoItem.module.css";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <li className={styles.todo__item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>

      <button
        className={styles.remove__button}
        onClick={() => onRemove(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
