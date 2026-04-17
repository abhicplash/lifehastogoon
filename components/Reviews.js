"use client";

import styles from "@/styles/Reviews.module.css";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Life Has to Go On: Learning to Breathe Again is a touching story about friendship, life’s unexpected turns, and the strength people find within themselves to keep moving forward. The journey of the five friends feels honest and real, showing how life can quietly change everything and how people deal with those moments.What stood out the most was how relatable the characters felt. In many parts of the book, it almost feels like we are those characters ourselves—feeling their struggles, their silence, their memories, and the bond they share.This book gently reminds us that life doesn’t always go the way we expect, but somehow we learn to stand again and keep going. It’s an emotional and reflective read that stays with you even after you close the book.",
      author: "Rithin KT",
      rating: 5,
    },
    {
      id: 12,
      text: "The writing is accessible and heartfelt, making it suitable for anyone going through a difficult phase in life.It is the best pick for when u r alone.Some parts feel reflective and almost meditative, encouraging readers to breathe, accept, and gradually rebuild.Overall, it’s not just a book—it’s a good companion for healing.",
      author: "Anju S Anand",
      rating: 5,
    },
    {
      id: 13,
      text: "I liked the honesty in the writing. It talks about difficult feelings in a very simple and understanding way. I will definitely recommend this book.",
      author: "Shini Mol AVS",
      rating: 5,
    },
    {
      id: 14,
      text: "A simple yet emotional story about pain, healing, and learning to move forward. The message really stayed with me. It’s relatable, heartfelt, and comforting. A meaningful read for anyone going through a difficult phase in life Very touching story..🥹",
      author: "Anagha ",
      rating: 5,
    },
    {
      id: 15,
      text: "Simple and elegant, easy to read even for first time reader like me,Very emotional understanding, overall superb...Thanks abhilash",
      author: "Fazal",
      rating: 5,
    },
    {
      id: 16,
      text: "The book kept me hooked from start to finish in a single sitting. The emotions felt genuine, and I found myself connecting deeply with the struggles portrayed in the story. It is a touching and meaningful read that beautifully explores themes of pain, healing, and the journey of moving forward.",
      author: "Vibith Vijayan",
      rating: 5,
    },
    {
      id: 10,
      text: "This book felt very personal and emotional. The way the story talks about pain, healing, and learning to move forward really stayed with me. It’s simple, honest, and relatable. I could connect with the struggles and the message that life must go on no matter what we face. A meaningful read for anyone going through a tough phase",
      author: "Jithin Das",
      rating: 5,
    },
    {
      id: 2,
      text: "Life Has to Go On ,I read the whole book in one sitting because I just couldn’t pull myself out of that.The characters felt so real, like they were standing right in front of me, and I kept wondering what would happen next. Some lines from the story are still stuck in my heart.Such an emotional and satisfying story 😊",
      author: "Gopika Shaji",
      rating: 5,
    },
    {
      id: 3,
      text: "Simple yet elegant language is used. Many phrases made some simple words evenmore meaningful in some situations. It was so relatable like the characters were people who live among us.",
      author: "Vidhya M",
      rating: 5,
    },
    {
      id: 4,
      text: "If you've ever felt stuck between a past you can't undo and a present that doesn't feel yours yet — pick this up. It won't promise you a sunrise. But it'll remind you that even surviving is meaningful. Even breathing is brave.",
      author: "Avinash",
      rating: 5,
    },
    {
      id: 5,
      text: "When you’re alone and overthinking everything, this book hits differently. It’s not loud or dramatic---it quietly heals you.",
      author: "Nidhin P",
      rating: 5,
    },
    {
      id: 6,
      text: "Each chapter beautifully captures deep emotions, drawing readers into the journey. The story evokes reflection, hope, and connection, making every page a meaningful, heartfelt experience from start to finish.",
      author: "Adil P",
      rating: 5,
    },
  ];

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Reader Experiences</p>

          <h2 className={styles.heading}>Words From Those Who Read It</h2>

          <p className={styles.sub}>
            Real feedback from readers who connected deeply with this book.
          </p>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          {/* <div>
            <h3>20+</h3>
            <p>Readers</p>
          </div> */}
          <div>
            <h3>5★</h3>
            <p>Average Rating</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Positive Feedback</p>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              {/* ⭐ STARS */}
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.rating ? styles.starFilled : styles.starEmpty
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* TEXT */}
              <p className={styles.text}>"{review.text}"</p>

              {/* AUTHOR */}
              <span className={styles.author}>— {review.author}</span>
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
