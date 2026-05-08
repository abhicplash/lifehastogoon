"use client";

import styles from "@/styles/Author.module.css";
import author from "@/public/a.png";
import Image from "next/image";

export default function Author() {
  return (
    <section className={styles.author} id="author">
      <div className={styles.noiseOverlay} />

      {/* Decorative corner mark — bottom left */}
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
        {/* ── LEFT — Avatar + name plate ── */}
        <div className={styles.left}>
          <div className={styles.avatarWrap}>
            {/* <div className={styles.avatarInitials}> */}
            <Image
              src={author}
              alt="author-image"
              priority
              className={styles.authorImage}
            />
            {/* </div> */}
            <div className={styles.avatarRing} />
          </div>

          <div className={styles.namePlate}>
            <p className={styles.nameLabel}>The author</p>
            <h3 className={styles.authorName}>Abhilash CP</h3>
            <div className={styles.dividerLine} />
            <p className={styles.authorTagline}>
              First-time author. Lifelong observer of people.
            </p>
          </div>

          {/* Social / connect row */}
          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/nameis_abhilash/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <span className={styles.socialSep} />
            <a
              href="https://www.amazon.in/dp/B0GQ3GQKJT"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Amazon page
            </a>
          </div>
        </div>

        {/* ── RIGHT — Story text ── */}
        <div className={styles.right}>
          <p className={styles.eyebrow}>Why I wrote this book</p>

          <h2 className={styles.heading}>
            Some stories are too <em>real</em> to stay silent.
          </h2>

          {/* <p className={styles.body}>
            I didn't write this book because I had everything figured out.
            I wrote it because I didn't — and I knew I wasn't alone in that.
          </p> */}

          <p className={styles.body}>
            <em>Life Has To Go On</em> started as a quiet attempt to make sense
            of loss, distance, guilt, and the friendships we let slip away
            without meaning to. Every character in this story carries something
            real. Every chapter is a conversation I wish someone had with me
            when I needed it most.
          </p>

          <p className={styles.body}>
            I wrote it for anyone who is quietly holding things together — who
            smiles in public and stares at the ceiling at night. For anyone who
            has lost someone, lost themselves, or simply lost their direction.
            This book won't fix everything. But it will remind you that you are
            not the only one.
          </p>

          <blockquote className={styles.pullQuote}>
            "Life doesn't ask if you're ready. It just keeps moving. The only
            question is — will you move with it?"
          </blockquote>

          <p className={styles.signoff}>— Abhilash CP</p>
        </div>
      </div>
    </section>
  );
}
