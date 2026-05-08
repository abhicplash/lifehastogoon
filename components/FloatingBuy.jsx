"use client";

import styles from "@/styles/FloatingBuy.module.css";
import Image from "next/image";

export default function FloatingBuy() {
  const platforms = [
    {
      name: "Amazon",
      link: "https://www.amazon.in/dp/B0GQ3GQKJT",
      icon: "/amazon.png",
    },
    {
      name: "Flipkart",
      link: "https://www.flipkart.com/life-has-go/p/itm81bbddaecacc8?pid=9798903421480&lid=LSTBOK97989034214803INTNT&marketplace=FLIPKART&hl_lid=&q=life+has+to+go+on&store=bks&ctx=eyJkZWxpdmVyZWRCeSI6IjE3NzMxMTE1NDMzNjkiLCJkaXNwbGF5UHJpY2UiOiIyMzkifQ==&fm=eyJ3dHAiOiJwcm9kdWN0Q2FyZExpc3QiLCJwcnB0Ijoic3AiLCJtaWQiOiJQUk9EVUNUIn0&_refId=&_appId=WA",
      icon: "/flipkart.png",
    },
    {
      name: "NotionPress",
      link: "https://direct.notionpress.com/in/read/life-has-to-go-on",
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
