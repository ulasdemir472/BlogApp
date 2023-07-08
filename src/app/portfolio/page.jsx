import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.ctgryTitle}>Choose a gallery</h1>
      <div className={styles.portItems}>
        <Link href="/portfolio/illustrations" className={styles.portItem}>
          <span className={styles.itemTitle}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.portItem}>
          <span className={styles.itemTitle}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.portItem}>
          <span className={styles.itemTitle}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
