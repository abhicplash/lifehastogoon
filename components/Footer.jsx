"use client";

import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Glow */}
      <div className={styles.glow}></div>

      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          {/* LEFT */}
          <div className={styles.brand}>
            <p className={styles.tag}>Life Has To Go On</p>

            <h2 className={styles.title}>
              Learning to
              <span>Breathe Again</span>
            </h2>

            <p className={styles.desc}>
              A heartfelt journey about healing, resilience, friendship, and
              finding the courage to move forward even after life changes
              everything.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.linksWrap}>
            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Explore</p>

              <Link href="/" className={styles.link}>
                Home
              </Link>

              <Link href="#reviews" className={styles.link}>
                Reviews
              </Link>

              <Link href="#author" className={styles.link}>
                Author
              </Link>

              <Link href="#order" className={styles.link}>
                Order
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Available On</p>

              <a
                href="YOUR_AMAZON_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Amazon
              </a>

              <a
                href="YOUR_FLIPKART_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Flipkart
              </a>

              <a
                href="YOUR_NOTIONPRESS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                NotionPress
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Life Has To Go On. All rights reserved.
          </p>

          <p className={styles.credit}>
            Written by <span>Abhilash CP</span>
          </p>
        </div>
      </div>
    </footer>
  );
}