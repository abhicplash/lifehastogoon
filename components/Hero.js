"use client";

import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import book from "@/public/bookcover.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Layered atmosphere */}
      <div className={styles.noiseOverlay} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />

      {/* Vertical rule lines — editorial touch */}
      <div className={styles.ruleLeft} />
      <div className={styles.ruleRight} />

      {/* Decorative corner mark */}
      <svg
        className={styles.decoCornerTR}
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
          strokeWidth="1"
        />
        <line x1="1" y1="1" x2="18" y2="1" stroke="#8A6840" strokeWidth="2" />
        <line x1="1" y1="1" x2="1" y2="18" stroke="#8A6840" strokeWidth="2" />
        <line
          x1="63"
          y1="63"
          x2="46"
          y2="63"
          stroke="#8A6840"
          strokeWidth="2"
        />
        <line
          x1="63"
          y1="63"
          x2="63"
          y2="46"
          stroke="#8A6840"
          strokeWidth="2"
        />
        <circle cx="32" cy="32" r="6" stroke="#8A6840" strokeWidth="0.75" />
        <circle
          cx="32"
          cy="32"
          r="12"
          stroke="#8A6840"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
      </svg>

      <svg
        className={styles.decoCornerBL}
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
          strokeWidth="1"
        />
        <line x1="1" y1="1" x2="18" y2="1" stroke="#8A6840" strokeWidth="2" />
        <line x1="1" y1="1" x2="1" y2="18" stroke="#8A6840" strokeWidth="2" />
        <line
          x1="63"
          y1="63"
          x2="46"
          y2="63"
          stroke="#8A6840"
          strokeWidth="2"
        />
        <line
          x1="63"
          y1="63"
          x2="63"
          y2="46"
          stroke="#8A6840"
          strokeWidth="2"
        />
        <circle cx="32" cy="32" r="6" stroke="#8A6840" strokeWidth="0.75" />
        <circle
          cx="32"
          cy="32"
          r="12"
          stroke="#8A6840"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
      </svg>

      <div className={styles.container}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowLine} />
            <p className={styles.eyebrow}>
              For Anyone Feeling Lost, Stuck, or Broken
            </p>
          </div>

          <h1 className={styles.headline}>
            Life Doesn't
            <br />
            Get <em>Easier…</em>
          </h1>

          <p className={styles.subheadline}>You Learn How to Move Forward.</p>

          <div className={styles.dividerGroup}>
            <span className={styles.dividerDot} />
            <div className={styles.dividerLine} />
            <span className={styles.dividerDot} />
          </div>

          <p className={styles.desc}>
            This book won't promise miracles. But it will give you something
            real — clarity, strength, and the courage to keep going. Written
            from lived experience, not from a distance.
          </p>

          <div className={styles.ctaRow}>
            <a href="" target="_blank" className={styles.btnPrimaryWrap}>
              <button className={styles.btnPrimary}>
                <span className={styles.btnLabel}>Read Chapter 1</span>
                <span className={styles.btnIcon}>→</span>
              </button>
            </a>
            <a href="#order" className={styles.btnSecondaryWrap}>
              <button className={styles.btnPrimary}>
                <span className={styles.btnLabel}>Get Your Copy</span>
                <span className={styles.btnUnderline} />
              </button>
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustBlock}>
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
            <div className={styles.trustBlock}>
              <p className={styles.trustNum}>5.0</p>
              <p className={styles.trustText}>Average rating</p>
            </div>
            <div className={styles.trustSep} />
            <p className={`${styles.trustText} ${styles.trustItalic}`}>
              By Abhilash CP
            </p>
          </div>

          {/* Platform pills */}
          <div className={styles.platformRow}>
            <span className={styles.platformLabel}>Available on</span>
            <span className={styles.platformPill}>Amazon</span>
            <span className={styles.platformPill}>Flipkart</span>
            <span className={styles.platformPill}>Notion Press</span>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.right}>
          <div className={styles.bookStage}>
            {/* Multi-layer glow */}
            <div className={styles.bookGlow1} />
            <div className={styles.bookGlow2} />

            {/* Floating badge */}
            <div className={styles.badgeFloat}>
              <span className={styles.badgeDot} />
              Now Available
            </div>

            {/* Book wrapper with 3D tilt */}
            <div className={styles.bookWrap}>
              <Image
                src={book}
                alt="Life Has To Go On — Abhilash CP"
                className={styles.bookImg}
                priority
              />
              <div className={styles.bookShineLine} />
              <div className={styles.bookGroundShadow} />
            </div>

            {/* Floating stat card — top left */}
            {/* <div className={styles.statCard}>
              <p className={styles.statNum}>12</p>
              <p className={styles.statLabel}>Five-star<br />reviews</p>
            </div> */}

            {/* Floating reader quote — bottom left */}
            <div className={styles.quoteCard}>
              <svg
                className={styles.quoteMarkSvg}
                viewBox="0 0 24 18"
                fill="none"
              >
                <path
                  d="M0 18V10.5C0 4.5 3.5 1 10.5 0L11.5 1.5C8 2.5 6.1 4.6 6 8H10V18H0ZM14 18V10.5C14 4.5 17.5 1 24.5 0L25.5 1.5C22 2.5 20.1 4.6 20 8H24V18H14Z"
                  fill="#8A6840"
                  fillOpacity="0.2"
                />
              </svg>
              <p className={styles.quoteText}>
                it's not just a book — it's a companion for healing.
              </p>
              <p className={styles.quoteAttr}>— Verified Reader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
