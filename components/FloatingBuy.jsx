"use client";

import styles from "@/styles/FloatingBuy.module.css";
import Image from "next/image";

export default function FloatingBuy() {
  const platforms = [
    {
      name: "Amazon",
      link: "YOUR_AMAZON_LINK",
      icon: "/amazon.png",
    },
    {
      name: "Flipkart",
      link: "YOUR_FLIPKART_LINK",
      icon: "/flipkart.png",
    },
    {
      name: "NotionPress",
      link: "YOUR_NOTIONPRESS_LINK",
      icon: "/notionpress.png",
    },
  ];

  return (
    <div className={styles.floating}>
      {platforms.map((p, i) => (
        <a key={i} href={p.link} target="_blank" rel="noopener noreferrer">
          <div className={styles.iconWrap}>
            <Image
              src={p.icon}
              alt={p.name}
              width={26}
              height={26}
              className={styles.icon}
            />
          </div>
        </a>
      ))}
    </div>
  );
}