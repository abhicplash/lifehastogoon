"use client";

import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import book from "@/public/bookcover.png";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* LEFT */}
        <Link href="/" className={styles.logo}>
          <Image src={book} alt="BookImage" className={styles.bookLogo} />
          {/* <span className={styles.logoMark}>✦</span> */}
          <div className={styles.logoText}>
            <span className={styles.logoTop}>Life Has To</span>
            <span className={styles.logoBottom}>Go On</span>
          </div>
        </Link>

        {/* CENTER */}
        <nav className={styles.menu}>
          <Link href="#reviews">Reviews</Link>
          <Link href="#author">Author</Link>
          <Link href="#order">Order</Link>
        </nav>

        {/* RIGHT */}
        <a
          href="https://www.amazon.in/dp/B0GQ3GQKJT"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Buy Now
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </header>
  );
}
