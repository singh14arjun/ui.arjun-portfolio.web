import React from "react";
import { useState, useEffect } from "react";
import "../style/about.css";

const About = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Web Developer", "Frontend Specialist", "UI/UX Enthusiast"];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <>
      <div
        className="about flex  justify-center mx-20 mb-[150px] mt-[100px]"
        id="about"
      >
        <section className="about-me">
          <div className="content bg-gradient-to-r from-green-900 to-lime-500 p-5 rounded-2xl">
            <h1 className="font-bold text-2xl">
              Hello, I'm <span className="name">Arjun Singh</span>
            </h1>
            <h2 className="typing-text">
              {text}
              <span className="cursor">|</span>
            </h2>
            <p>
              Hello, my name is Arjun Singh, and I’m from Bihar. I hold a
              Bachelor's degree, which I completed in 2023, and I am currently
              working as a Web Developer Intern at Bepoj Technology. In
              addition, I am pursuing a Master of Computer Applications (MCA)
              from Lovely Professional University to further strengthen my
              expertise in software development.
              <br />
              <br />
              I have strong hands-on experience with technologies like HTML,
              CSS, JavaScript, React.js, and Responsive Design. As a
              result-oriented, self-driven, and highly motivated individual, I
              am always eager to learn new technologies and stay updated with
              industry trends.
              <br />
              <br />
              My technical knowledge includes JavaScript, React.js, and
              additional hands-on experience with Web APIs, Math operations,
              Arrays, Strings, and Modern JavaScript features. These skills
              enable me to write cleaner, more efficient code and build robust
              applications.
              <br />
              <br />
              That's all about me.
            </p>

            <a href="#projects" className="btn">
              View My Work
            </a>
          </div>
        </section>
        <div className="image">
          <img
            src="src/assets/photo/arjun_photo.png"
            loading="lazy"
            alt="Arjun Singh"
          />
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5"></div>
          <div className="box6"></div>
          <div className="box7"></div>
          <div className="box8"></div>
        </div>
      </div>
    </>
  );
};

export default About;
