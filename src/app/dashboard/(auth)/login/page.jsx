"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <div>loading...</div>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.registerBtn}>Login</button>
      </form>
      <button className={styles.google} onClick={() => signIn("google")}>
        <Image
          src="https://pbs.twimg.com/profile_images/1511043794937991169/3B5fpOw8_400x400.png"
          alt=""
          width={30}
          height={30}
          className={styles.googleImg}
        />
        <span>Login with Google</span>
      </button>
      <a className={styles.btn} href="/dashboard/register">
        <span>I dont have an existing account</span>
      </a>
    </div>
  );
};

export default Login;
