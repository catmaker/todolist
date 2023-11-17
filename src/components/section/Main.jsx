import React from "react";
import TodoList from "../TodoList";
import { Menu } from "./Menu";
import layout from "../../assets/module/layout.module.css";
import { Header } from "./Header";
import styles from "../../assets/module/Main.module.css";
export const Main = () => {
  return (
    <div>
      <div>
        <Header />
        <Menu />
        <TodoList />
      </div>
    </div>
  );
};
