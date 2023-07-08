"use client";
import React, { useContext } from "react";
import styles from "@/components/DarkModeToggle/darkMode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  //const mode = "dark";
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
