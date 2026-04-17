"use client";

import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import book from "@/public/bookcover.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Noise texture overlay */}
      <div className={styles.noiseOverlay} />

      {/* Decorative corner mark */}
      <svg
        className={styles.decoCorner}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          stroke="#8A6840"
          strokeWidth="1.5"
        />
        <line x1="1" y1="1" x2="14" y2="1" stroke="#8A6840" strokeWidth="2" />
        <line x1="1" y1="1" x2="1" y2="14" stroke="#8A6840" strokeWidth="2" />
        <line
          x1="63"
          y1="63"
          x2="50"
          y2="63"
          stroke="#8A6840"
          strokeWidth="2"
        />
        <line
          x1="63"
          y1="63"
          x2="63"
          y2="50"
          stroke="#8A6840"
          strokeWidth="2"
        />
        <path
          d="M32 20 L36 28 L44 29 L38 35 L39.5 43 L32 39 L24.5 43 L26 35 L20 29 L28 28 Z"
          stroke="#8A6840"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className={styles.container}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            For Anyone Feeling Lost, Stuck, or Broken
          </p>

          <h1 className={styles.headline}>
            Life Doesn't
            <br />
            Get <em>Easier…</em>
          </h1>

          <p className={styles.subheadline}>You Learn How to Move Forward.</p>

          <div className={styles.dividerLine} />

          <p className={styles.desc}>
            This book won't promise miracles. But it will give you something
            real — clarity, strength, and the courage to keep going. Written
            from lived experience, not from a distance.
          </p>

          <div className={styles.ctaRow}>
            <a href="">
              <button className={styles.btnPrimary}>Read Chapter 1</button>
            </a>
            <a
              href="YOUR_AMAZON_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btnPrimary}>Get Your Copy</button>
            </a>
          </div>

          {/* <div className={styles.pillRow}>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Easy to read
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Real stories
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              No fluff
            </span>
          </div> */}

          <div className={styles.trustRow}>
            <div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.trustText}>18+ verified readers</p>
            </div>
            <div className={styles.trustSep} />
            <p className={styles.trustText}>Loved across all ages</p>
            <div className={styles.trustSep} />
            <p className={`${styles.trustText} ${styles.trustItalic}`}>
              By Abhilash CP
            </p>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.right}>
          <div className={styles.bookStage}>
            {/* Ambient glow behind book */}
            <div className={styles.bookGlow} />

            {/* Floating badge */}
            <div className={styles.badgeFloat}>Now Available</div>

            {/* Book wrapper with 3D tilt */}
            <div className={styles.bookWrap}>
              {/* <div className={styles.bookSpine} /> */}
              <Image
                src={book}
                alt="Life Has To Go On Book"
                className={styles.bookImg}
                priority
              />
              <div className={styles.bookGroundShadow} />
            </div>

            {/* Floating reader quote */}
            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>
                {/* "A book that actually feels like someone understands." */}"
                it’s not just a book—it’s a good companion for healing."
              </p>
              <p className={styles.quoteAttr}>— Verified Reader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
