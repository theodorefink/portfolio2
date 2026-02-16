import styles from "./About.module.css";
import otagoPic from "../../assets/otagouni.png";
import musicStudioPic from "../../assets/musicstu.png";
import ADIPic from "../../assets/adinstruments_logo.jpeg";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>
      <div className={styles.aboutBox}>
        <h3 className={styles.aboutTitle}>Education</h3>
        <div className={styles.aboutBox2}>
          <a
            href="https://www.otago.ac.nz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={otagoPic}
              alt="Otago University logo"
              className={styles.aboutImage}
            />
          </a>
          <p className={styles.aboutDesc}>
            I have graduated from a Bachelor of Science at the University of
            Otago, majoring in Computer Science and minoring in Mathematics. I
            have achieved highly in disciplines such as Web Development,
            Software Engineering, Data Structures and Algorithms, Databases, and
            Artificial Intelligence. I graduated with a GPA of 7.7 out of 9,
            which reflects my ability to work hard and hold myself to high
            standards. I am also proficient in Linear Algebra and Differential
            Equations - I thoroughly enjoy the problem solving side of Computer
            Science and Mathematics.
          </p>
        </div>
      </div>
      <div className={styles.aboutBox}>
        <h3 className={styles.aboutTitle}>Experience</h3>
        <div className={styles.aboutBox2}>
          <a
            href="https://www.adinstruments.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ADIPic}
              alt="ADInstruments logo"
              className={styles.aboutImage}
            />
          </a>
          <p className={styles.aboutDesc}>
            I have gained real world experience through an internship with
            ADInstruments, where I worked as part of an agile team of 10 people
            to maintain 'Lt' - their cloud based education web app used by
            university students worldwide. Here I developed and shipped 12
            releases ranging from bug fixes to major feature improvements such
            as making core functions iPad accessible. I refined my coding skills
            in React/Typescript and learned to work within a large codebase,
            reading and writing reusable and maintainable code. This experience
            gave me insight into what being a software engineer really means in
            the industry and what is important for SaaS businesses to thrive.
          </p>
        </div>
      </div>
      <div className={styles.aboutBox}>
        <h3 className={styles.aboutTitle}>Hobbies</h3>
        <div className={styles.aboutBox2}>
          <img
            src={musicStudioPic}
            alt="music studio photo"
            className={styles.aboutImage2}
          />
          <p className={styles.aboutDesc}>
            Outside of coding, I enjoy making electronic music using Ableton, a
            Digital Audio Workstation on my computer. I have been teaching
            myself over the past two years and have uploaded some of my finished
            tracks on my soundcloud, which you can check out below. The world of
            software instruments and plugins is already super vast, it
            fascinates me how many sounds and effects can be achieved through
            software, and I am currently teaching myself to code my own!
          </p>
        </div>
      </div>

      {/*Display SoundCloud Tracks*/}
      <div className={styles.aboutBox}>
        <h3 className={styles.aboutTitle}>My Tracks</h3>
        <div className={styles.tracksContainer}>
          <div className={styles.trackItem}>
            <iframe
              width="100%"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2138841666&color=%23ff5500&auto_play=false&visual=true"
            />

            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}
            ></div>
          </div>
          <div className={styles.trackItem}>
            <iframe
              width="100%"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2107910508&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
