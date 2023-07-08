import React from "react";
import styles from "@/app/page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

async function getData(cat) {
  const res = await items[cat];

  if (res) {
    return res;
  }

  return notFound();
}

const Category = async ({ params }) => {
  const data = await getData(params.category);

  return (
    <div className={styles.category}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => {
        return (
          <div className={styles.catContainer} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.contentTitle}>{item.title}</h1>
              <p className={styles.contentDesc}>{item.desc}</p>
              <Button url="#" text="See more" />
            </div>
            <div className={styles.catImg}>
              <Image src={item.image} alt="" width={500} height={500} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
