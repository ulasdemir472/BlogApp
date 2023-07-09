"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`/api/blogPosts/${id}`, {
    cache: "no-store", //sürekli değişen veriler için
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.blogPost}>
      <div className={styles.top}>
        <div className={styles.post}>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <div>
            {/* image avatar */}
            <span>{data.username}</span>
          </div>
        </div>
        <div className={styles.postImg}>
          <Image src={data.img} alt="image" width={500} height={250} />
        </div>
      </div>
      <div className={styles.postContent}>
        <p className={styles.postDesc}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
