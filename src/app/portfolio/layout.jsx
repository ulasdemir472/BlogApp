import React from "react";
import styles from "@/app/page.module.css";

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.portTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;
