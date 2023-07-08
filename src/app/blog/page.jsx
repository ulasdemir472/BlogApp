import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("/api/blogPosts", {
    cache: "no-store", //sürekli değişen veriler için
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.blogContainer}>
      {data.map((item) => {
        return (
          <Link
            href={`/blog/${item._id}`}
            className={styles.cat}
            key={item._id}
          >
            <Image
              src="/illustration.png"
              alt="image"
              width={300}
              height={240}
            />

            <div className={styles.contentBlog}>
              <h1 className={styles.contentTitleBlog}>{item.title}</h1>
              <p className={styles.contentDescBlog}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
