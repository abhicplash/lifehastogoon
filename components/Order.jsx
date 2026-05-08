"use client";

import styles from "@/styles/Order.module.css";
import Image from "next/image";

export default function Order() {
  const platforms = [
    {
      name: "Amazon",
      desc: "Fast delivery with trusted global service.",
      link: "YOUR_AMAZON_LINK",
      logo: "/amazon.png",
    },
    {
      name: "Flipkart",
      desc: "Preferred by thousands of Indian readers.",
      link: "YOUR_FLIPKART_LINK",
      logo: "/flipkart.png",
    },
    {
      name: "NotionPress",
      desc: "Buy directly from the official publisher.",
      link: "YOUR_NOTIONPRESS_LINK",
      logo: "/notionpress.png",
    },
  ];

  return (
    <section className={styles.order} id="order">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.top}>
          <p className={styles.eyebrow}>Order Your Copy</p>

          <h2 className={styles.heading}>
            Choose Your
            <span>Preferred Platform</span>
          </h2>

          <p className={styles.sub}>
            Start reading today through your favorite bookstore.
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.grid}>
          {platforms.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.badge}>Available</div>

              <div className={styles.logoWrap}>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={70}
                  height={70}
                  className={styles.logo}
                />
              </div>

              <h3 className={styles.title}>{item.name}</h3>

              <p className={styles.desc}>{item.desc}</p>

              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className={styles.btn}>
                  Buy Now
                  <span>↗</span>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}