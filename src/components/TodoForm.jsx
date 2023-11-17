import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../assets/module/TodoForm.module.css";

const TodoForm = ({ add, deleteAll }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    // 할 일 추가 함수
    if (newTodo.trim() !== "") {
      add({ id: uuidv4(), text: newTodo });
      setNewTodo("");
    } else {
      alert("할 일을 입력하세요");
    }
  };

  const handleKeyDown = (e) => {
    // 키다운
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className={styles.todo__form__container}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className={styles.todo__input}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
      />

      <button className={styles.add__button} onClick={addTodo}>
        할 일 추가
      </button>

      <button className={styles.add__button} onClick={deleteAll}>
        모두 삭제
      </button>
    </div>
  );
};

export default TodoForm;
