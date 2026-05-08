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

              <Link href="/#reviews" className={styles.link}>
                Reviews
              </Link>

              <Link href="/#author" className={styles.link}>
                Author
              </Link>

              <Link href="/#order" className={styles.link}>
                Order
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <p className={styles.linkTitle}>Available On</p>

              <a
                href="https://www.amazon.in/dp/B0GQ3GQKJT"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Amazon
              </a>

              <a
                href="https://www.flipkart.com/life-has-go/p/itm81bbddaecacc8?pid=9798903421480&lid=LSTBOK97989034214803INTNT&marketplace=FLIPKART&hl_lid=&q=life+has+to+go+on&store=bks&ctx=eyJkZWxpdmVyZWRCeSI6IjE3NzMxMTE1NDMzNjkiLCJkaXNwbGF5UHJpY2UiOiIyMzkifQ==&fm=eyJ3dHAiOiJwcm9kdWN0Q2FyZExpc3QiLCJwcnB0Ijoic3AiLCJtaWQiOiJQUk9EVUNUIn0&_refId=&_appId=WA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Flipkart
              </a>

              <a
                href="https://direct.notionpress.com/in/read/life-has-to-go-on"
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
