"use client";

import styles from "@/styles/Order.module.css";
import Image from "next/image";

export default function Order() {
  const platforms = [
    {
      name: "Amazon",
      desc: "Fast delivery & trusted platform",
      link: "YOUR_AMAZON_LINK",
      logo: "/amazon.png",
    },
    {
      name: "Flipkart",
      desc: "Popular choice for Indian readers",
      link: "YOUR_FLIPKART_LINK",
      logo: "/flipkart.png",
    },
    {
      name: "NotionPress",
      desc: "Official publisher platform",
      link: "YOUR_NOTIONPRESS_LINK",
      logo: "/notionpress.png",
    },
  ];

  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get Your Copy</h2>
        <p className={styles.sub}>
          Choose your preferred platform to start reading today.
        </p>

        <div className={styles.grid}>
          {platforms.map((p, i) => (
            <div key={i} className={styles.card}>
              {/* LOGO */}
              <div className={styles.logoWrap}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={100}
                  height={40}
                  className={styles.logo}
                />
              </div>

              <p className={styles.desc}>{p.desc}</p>

              <a href={p.link} target="_blank">
                <button className={styles.btn}>Buy on {p.name}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
