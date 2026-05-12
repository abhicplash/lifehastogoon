"use client";

import styles from "@/styles/cta.module.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        {/* Tag */}
        <p className={styles.ctaTag}>Your Next Chapter Starts Here</p>

        {/* Heading */}
        <h2 className={styles.ctaHeading}>
          Start Your
          <span className={styles.ctaHighlight}> Transformation Today</span>
        </h2>

        {/* Text */}
        <p className={styles.ctaText}>
          A heartfelt journey through healing, resilience, and discovering the
          courage to keep moving forward—one page at a time.
        </p>

        {/* Buttons */}
        <div className={styles.btnWrappr}>
          <Link href="/readchapter" rel="noopener noreferrer">
            <button className={styles.ctaButton}>
              Read Chapter 1
            </button>
          </Link>

          <a href="https://www.amazon.in/dp/B0GQ3GQKJT" target="_blank">
            <button className={styles.ctaButton}>Get Your Copy</button>
          </a>
        </div>

        {/* Social Proof */}
        <div className={styles.proofWrap}>
          <p className={styles.ctaProof}>⭐ 5★ Rated</p>
          <span className={styles.dot}></span>
          <p className={styles.ctaProof}>Loved Across All Ages</p>
        </div>
      </div>
    </section>
  );
}