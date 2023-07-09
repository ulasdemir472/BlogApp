"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const session = useSession(); //authenticated olup olmadığını verir
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //username e göre postları getirir
  const { data, mutate, error, isLoading } = useSWR(
    `/api/blogPosts?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <div>loading...</div>;
  }
  // if (session.status === "unauthenticated") {
  //   router.push("/dashboard/login");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/blogPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          username: session.data.user.name,
          content,
          img,
        }),
      });
      mutate(); //oluşturduğumuz post sayyfa yenilenmeden hemen gelir
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`/api/blogPosts/${id}`, {
      method: "DELETE",
    });
    mutate();
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => {
                return (
                  <div className={styles.post} key={post._id}>
                    <Link href={`blog/${post._id}`} className={styles.postLink}>
                      <div className={styles.imgContainer}>
                        <Image
                          src={post.img}
                          alt="image"
                          width={200}
                          height={100}
                        />
                      </div>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                    </Link>
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </span>
                  </div>
                );
              })}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Form</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>
          <button className={styles.send}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
