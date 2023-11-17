import React from "react";
import styles from "../../assets/module/Header.module.css";
import layout from "../../assets/module/layout.module.css";
export const Header = () => {
  return (
    <div className={layout.header}>
      <h1 className={styles.h1}>TodoList 작성하기</h1>
    </div>
  );
};
