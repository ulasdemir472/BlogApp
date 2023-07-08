"use client";
import React from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import DarkMode from "../DarkModeToggle/DarkMode";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const session = useSession();
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Iron Mans Place
      </Link>
      <div className={styles.links}>
        <DarkMode />
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={() => signOut()}>
            Logout
          </button>
        )}
        {session.status === "unauthenticated" && (
          <button
            className={styles.logout}
            onClick={() => router.push("/dashboard/login")}
          >
            Login
          </button>
        )}
        <span>{session.data?.user?.name}</span>
      </div>
    </div>
  );
};

export default Navbar;
