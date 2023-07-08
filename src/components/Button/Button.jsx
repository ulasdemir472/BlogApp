import Link from "next/link";
import React from "react";
import styles from "@/app/page.module.css";

const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className={styles.btn}>{text}</button>
    </Link>
  );
};

export default Button;
