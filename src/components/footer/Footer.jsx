import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>2023 Ulas Demir.All right reserved.</div>
      <div className={styles.imgContainer}>
        <Image
          src="/1.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="facebook.png"
        />
        <Image
          src="/2.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="instagram.png"
        />
        <Image
          src="/3.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="twitter.png"
        />
        <Image
          src="/4.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="youtube.png"
        />
      </div>
    </div>
  );
};

export default Footer;
