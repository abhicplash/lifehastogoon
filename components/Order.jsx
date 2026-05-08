"use client";

import styles from "@/styles/Order.module.css";
import Image from "next/image";

export default function Order() {
  const platforms = [
    {
      name: "Amazon",
      desc: "Fast delivery with trusted global service.",
      link: "https://www.amazon.in/dp/B0GQ3GQKJT",
      logo: "/amazon.png",
    },
    {
      name: "Flipkart",
      desc: "Preferred by thousands of Indian readers.",
      link: "https://www.flipkart.com/life-has-go/p/itm81bbddaecacc8?pid=9798903421480&lid=LSTBOK97989034214803INTNT&marketplace=FLIPKART&hl_lid=&q=life+has+to+go+on&store=bks&ctx=eyJkZWxpdmVyZWRCeSI6IjE3NzMxMTE1NDMzNjkiLCJkaXNwbGF5UHJpY2UiOiIyMzkifQ==&fm=eyJ3dHAiOiJwcm9kdWN0Q2FyZExpc3QiLCJwcnB0Ijoic3AiLCJtaWQiOiJQUk9EVUNUIn0&_refId=&_appId=WA",
      logo: "/flipkart.png",
    },
    {
      name: "NotionPress",
      desc: "Buy directly from the official publisher.",
      link: "https://direct.notionpress.com/in/read/life-has-to-go-on",
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
