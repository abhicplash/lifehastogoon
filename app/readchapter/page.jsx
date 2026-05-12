"use client";

import styles from "@/styles/ReadChapter.module.css";
import Image from "next/image";
import reading from "@/public/reading.png";
import Link from "next/link";

export default function ReadChapter() {
  return (
    <main className={styles.readPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <Image
          src={reading}
          alt="Reading Life Has To Go On"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <p className={styles.tag}>Sample Reading Experience</p>

          <h1 className={styles.title}>
            Read The First
            <span> Two Chapters</span>
          </h1>

          <p className={styles.subtitle}>
            Step into a deeply emotional journey about healing, friendship,
            silence, pain, and learning to move forward.
          </p>

          <div className={styles.heroButtons}>
            <a href="#chapter1">
              <button className={styles.primaryBtn}>Start Reading</button>
            </a>

            <a href="https://www.amazon.in/dp/B0GQ3GQKJT" target="_blank">
              <button className={styles.secondaryBtn}>Get Full Book</button>
            </a>
          </div>
        </div>
      </section>

      {/* BOOK INFO */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <div>
            <h3>Genre</h3>
            <p>Emotional Fiction</p>
          </div>

          <div>
            <h3>Theme</h3>
            <p>Healing & Moving Forward</p>
          </div>

          <div>
            <h3>Reading Style</h3>
            <p>Simple & Deeply Relatable</p>
          </div>
        </div>
      </section>

      {/* CHAPTER */}
      <section className={styles.chapterSection} id="chapter1">
        <div className={styles.chapterContainer}>
          <p className={styles.chapterLabel}>Chapter 1</p>
          <h2 className={styles.chapterTitle}>The Weight of Every Day</h2>
          <div className={styles.chapterContent}>
            <p>
              Dev woke up from his sleep with a sudden gasp, his chest rising
              sharply as if pulled out of a fading dream. The early morning air
              felt slightly cold against his skin, carrying that faint mix of
              dawn freshness and the stillness of a home that hadn’t fully woken
              up yet. He reached for his phone and glanced at the screen—far
              earlier than the alarm he relied on every day. With a quiet
              exhale, he sank back into the bed, already knowing this was
              becoming a familiar pattern in his daily routine.
            </p>
            <p>
              For a moment, it felt as though time itself had paused beside him,
              hovering in the quiet room, watching him struggle to move forward.
            </p>
            <p>
              He lay back down, but his eyes remained open, fixed on the empty
              space beside him—as if expecting a miracle, as if hoping someone
              might be there. But deep inside, he knew that moment would never
              come.
            </p>
            <p>
              He stared up at the ceiling, listening to the low, steady whir of
              the fan—an old, familiar sound that filled the quiet of his room.
              The faint smell of the previous night’s air lingered, adding to
              the sense of loneliness around him. Moments later, his daily alarm
              broke the silence, ringing exactly as expected. He reached over,
              turned it off, and slowly pushed himself out of the bed
            </p>
            <p>
              He moved through his morning routine in a slow, mechanical rhythm.
              His feet touched the cold tiles, sending a small shiver through
              his body—but even that didn’t fully wake him. He washed his face,
              staring at his own reflection as if it were a stranger. The cold
              water touched his skin, but he felt nothing. He brushed his teeth
              with no interest, just moving the brush left and right. The mirror
              fogged slightly, yet his expression never changed. He stepped into
              the shower, letting the water fall without refreshing him. Every
              motion felt rehearsed, repeated, lifeless.
            </p>
            <p>
              He walked to the kitchen with silent footsteps, preparing his
              breakfast exactly the same way he did every single day—not because
              he was hungry, but because it was part of the routine. The aroma
              of freshly boiled water and plain toast filled the kitchen
              lightly, but it didn’t spark any appetite in him.
            </p>
            <p>
              After finishing his morning rituals, he dressed up for the
              office—slipping into a blazer and neatly pressed pants, the kind
              that perfectly suited a manager in a reputed firm.
            </p>
            <p>
              After getting ready, he picked up his laptop bag and stepped
              toward the door of his flat. It was a spacious 3BHK apartment
              inside a quiet gated society. Just before closing the door, he
              paused and looked back one last time. On the wall hung a large
              framed photograph—him and his wife, captured in a moment of pure
              happiness. That picture had once filled the home with warmth. Now
              it only echoed silence. He gently pulled the door shut and walked
              toward the lift.
            </p>
            <p>
              He tapped the lift button and waited. The cool metallic button
              felt slightly damp from morning humidity. A few people stood
              around him, chatting about topics he usually took part in—but
              today, he didn’t respond. He simply stood still, silent, lost
              somewhere inside his own thoughts.
            </p>
            <p>
              When the lift finally opened, Dev stepped in. Floor after floor,
              people entered and exited in a steady flow, their voices filling
              the small space. But Dev didn’t care to listen. He didn’t disturb
              anyone, nor did he encourage a single conversation. He just stayed
              there quietly, trapped in his own mind while the lift carried him
              down.
            </p>
            <p>
              Soon, he reached the parking lot and walked toward his car. He got
              inside, rested for a minute, and then started the engine. Just
              then, his colleague called, asking him to pick him up since his
              own car had broken down.
            </p>
            <p>
              Dev now had two duties: pick up his colleague for office and drop
              his colleague’s son at school. He agreed without hesitation—but
              also without emotion. He answered only in short, dry words like
              “yes” or “okay,” never starting a new conversation, never showing
              any interest. The colleague felt like what he truly was—just a
              colleague, not a friend. Dev helped only because the situation
              demanded it, not because he wanted to.
            </p>
            <p>
              While waiting at a traffic island, Dev noticed a group of college
              students on two bikes—five of them squeezed together, laughing,
              shouting, and rushing toward their campus. The warm morning sun
              hit their faces, the air filled with the smell of petrol and their
              loud, carefree voices. Just from their interactions, he understood
              how deeply they were enjoying their age.
            </p>
            <p>
              For a brief moment, Dev drifted back to his own college days, to a
              time when life felt light and uncomplicated.
            </p>
            <p>
              But the sudden burst of car horns snapped him out of his thoughts,
              reminding him that he was still stuck in the present, in the
              middle of a busy traffic island.
            </p>
            <p>
              Following his colleague’s instructions, Dev first drove to the
              school. After dropping the child off, they headed to the office
              and reached exactly on time—just like every other day. His routine
              was so fixed, so mechanical, that even his punctuality felt
              emotionless
            </p>
            <p>
              Dev gently pushed open the glass cabin door and stepped inside. He
              sat in his chair, and the door closed behind him with a soft
              click. On that very door, printed neatly in bold letters, were the
              words:
            </p>
            <p>
              <b>“Dev – General Manager.”</b>
            </p>
            <p>The title sounded powerful, but inside, Dev felt nothing</p>
          </div>
          <br /> <p className={styles.chapterLabel}>Chapter 2</p>
          <h2 className={styles.chapterTitle}>The Familiar Stranger</h2>
          <div className={styles.chapterContent}>
            <p>
              After reaching his office and opening his laptop, Dev realized it
              wasn’t working. He spent around ten minutes trying to fix it, but
              nothing responded. Frustration tightened around his chest as he
              picked up the phone and called the head of the hardware and
              networking department.
            </p>
            <p>
              The conversation was casual, almost familiar. The voice on the
              other end belonged to someone he knew well—almost a friend—Kabir.
            </p>
            <p>
              Kabir suggested Dev use another laptop while they tried to fix his
              own, but Dev shook his head. He walked toward the newcomers’
              section and noticed a vacant seat. With a quiet nod from the
              nearby employee, Dev settled in.
            </p>
            <p>
              “The person who used this chair shifted to the testing
              department,” the new employee said. “So it’s free now.”
            </p>
            <p>
              Once Dev started working, the world around him blurred. He barely
              noticed the employee sitting nearby. Occasionally, the new
              employee glanced at him, but Dev never looked up. His focus was
              absolute, every keystroke a testament to his dedication.
            </p>
            <p>
              After finishing his own tasks, Dev turned and helped the new
              joinee. He offered guidance without being asked—soft, patient, and
              encouraging. Other new employees gradually sought his suggestions
              as well. Because of his support, they finished their tasks ahead
              of schedule.
            </p>
            <p>
              During a short tea break, one employee offered Dev a cup. They
              chatted casually, sharing stories and laughter. Soon, Dev realized
              that four of them had attended the same college he had. A flash of
              memory crossed his face, subtle but noticeable.
            </p>
            <p>“Why the sudden look, Dev?” one asked.</p>
            <p>
              Dev’s voice was quiet, distant. “Sorry… I just got lost in the
              past.”
            </p>
            <p>
              Before he could elaborate, his phone rang. Kabir’s voice reminded
              him of a meeting in ten minutes. Kabir had already reached the
              conference hall.
            </p>
            <p>
              “Sorry, everyone,” Dev said, standing up. “I’ll leave now… we can
              continue this some other time.”
            </p>
            <p>
              He approached the conference hall but paused. Kabir was outside,
              leaning near the coffee vending machine. The aroma of freshly
              brewed coffee filled the air, oddly comforting against the tension
              pressing on Dev’s chest.
            </p>
            <p>“Right on time, as usual,” Kabir said with a half-smile.</p>
            <p>
              “What’s the purpose of this meeting?” Dev asked. “It’s being held
              by a third party, even though our performance has been solid.”
            </p>
            <p>
              Kabir’s eyes flicked around before he spoke. “It’s not for
              validation. From a higher-level source, I’ve learned they’re
              planning big changes—scaling the company. They want us ready.”
            </p>
            <p>
              As the team approached, Dev’s gaze landed on a familiar face.
              Recognition sparked a fleeting smile, but it vanished almost
              instantly. His features hardened as memories stirred, and without
              a word, he turned toward the restroom.
            </p>
            <p>
              Inside, he locked the door and sank onto the closed toilet seat.
              His legs swung tensely, a restless rhythm revealing the storm
              within. He knew he would have to face that person eventually, and
              the thought tightened his chest. After splashing cold water on his
              face and staring briefly into the mirror, he drew a steadying
              breath.
            </p>
            <p>
              Stepping out, he found his manager waiting just opposite him. Dev
              asked quietly, “Is it really necessary for me to attend this
              meeting?” His voice carried calm authority, yet hinted at the
              trust between them.
            </p>
            <p>
              The manager shook his head. “No, it’s not that important now. Do
              you want to go to the hospital?”
            </p>
            <p>
              Dev nodded. “Yes,” he said, relief mingling with unease. With the
              manager’s tacit approval, he turned toward the exit, carrying the
              weight of his decision.
            </p>
            <p>
              “It’s your stubbornness that’s stopped me from visiting her,” the
              manager said, a note of frustration in his calm tone. “But you
              never allowed me.”
            </p>
            <p>
              Dev met his gaze steadily. “It’s not my stubbornness. It’s hers.
              She doesn’t want anyone visiting her… not even me. That’s why I
              wait until after office hours. Otherwise, I would have resigned
              long ago.”
            </p>
            <p>
              He walked silently to his car, sliding into the driver’s seat. The
              engine’s hum echoed the weight pressing on his shoulders. As he
              drove through the city, his thoughts twisted around memories—the
              familiar face in the new team, the uncertainty surrounding his
              wife, and the quiet fear of what the future might hold. The
              traffic, the honking cars, even the smell of the early morning
              air—all faded into the background, swallowed by the storm of his
              mind.
            </p>
          </div>
          {/* FADE */}
          <div className={styles.fade}></div>
          {/* CTA */}
          <div className={styles.chapterCta}>
            <h3>Want To Continue Reading?</h3>

            <p>Discover the complete emotional journey in the full book.</p>

            <Link href="/#order">
              <button className={styles.readBtn}>Get Your Copy</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
