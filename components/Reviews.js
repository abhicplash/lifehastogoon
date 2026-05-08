"use client";

import styles from "@/styles/Reviews.module.css";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Life Has to Go On: Learning to Breathe Again is a touching story about friendship, life’s unexpected turns, and the strength people find within themselves to keep moving forward. The journey of the five friends feels honest and real.",
      author: "Rithin KT",
      rating: 5,
    },
    {
      id: 2,
      text: "The writing is accessible and heartfelt, making it suitable for anyone going through a difficult phase in life. It’s not just a book—it’s a good companion for healing.",
      author: "Anju S Anand",
      rating: 5,
    },
    {
      id: 3,
      text: "I liked the honesty in the writing. It talks about difficult feelings in a very simple and understanding way.",
      author: "Shini Mol AVS",
      rating: 5,
    },
    {
      id: 4,
      text: "A simple yet emotional story about pain, healing, and learning to move forward. The message really stayed with me.",
      author: "Anagha",
      rating: 5,
    },
    {
      id: 5,
      text: "Simple and elegant, easy to read even for a first-time reader like me.",
      author: "Fazal",
      rating: 5,
    },
    {
      id: 6,
      text: "The book kept me hooked from start to finish. The emotions felt genuine and meaningful.",
      author: "Vibith Vijayan",
      rating: 5,
    },
  ];

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.topWrap}>
          <p className={styles.eyebrow}>Reader Experiences</p>

          <h2 className={styles.heading}>
            Words From Those
            <span>Who Read It</span>
          </h2>

          <p className={styles.sub}>
            Real feedback from readers who connected deeply with this book.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>5★</h3>
              <p>Average Rating</p>
            </div>

            <div className={styles.statDivider}></div>

            <div className={styles.statCard}>
              <h3>100%</h3>
              <p>Positive Feedback</p>
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className={styles.quoteIcon}>“</span>
              </div>

              <p className={styles.text}>{review.text}</p>

              <div className={styles.bottom}>
                <span className={styles.author}>— {review.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="YOUR_AMAZON_LINK" target="_blank">
            <button className={styles.btn}>Get Your Copy</button>
          </a>
        </div>
      </div>
    </section>
  );
}