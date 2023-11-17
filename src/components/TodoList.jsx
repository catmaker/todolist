import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import styles from "../assets/module/TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    // 할 일 추가
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    // id 해당 목록 삭제
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAll = () => {
    // 전부 삭제
    setTodos([]);
  };

  const toggleTodo = (id) => {
    // id 해당 목록 완료 상태 토글
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sortedTodos = todos // 숫자-알파벳-한글 순 정렬
    .slice()
    .sort((a, b) =>
      a.text.localeCompare(b.text, "en", { sensitivity: "base" })
    );

  return (
    <div className={styles.todo__list__container}>
      <h2 className={styles.todo__list__title}>My Todo List</h2>
      <TodoForm add={addTodo} deleteAll={deleteAll} />
      <ul className={styles.todo__list}>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
            onToggle={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
