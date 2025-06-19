import React, { useState, useEffect } from "react";

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
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div
      className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mx-4 sm:mx-10 md:mx-20 mt-10 md:mt-[50px] mb-10 md:mb-[100px]"
      id="about"
    >
      {/* Text Section */}
      <section className="w-full md:w-[700px]">
        <div className="bg-gradient-to-r from-green-900 to-lime-500 p-6 rounded-2xl text-black">
          <h1 className="font-bold text-xl sm:text-2xl">
            Hello, I'm{" "}
            <span className="text-white font-bold text-lg sm:text-xl">
              Arjun Singh
            </span>
          </h1>
          <h2 className="text-[1.2rem] sm:text-[1.5rem] text-yellow-500 my-2 h-[40px] overflow-hidden whitespace-nowrap">
            {text}
            <span className="text-red-600">|</span>
          </h2>
          <p className="text-base leading-6 tracking-[0.5px] font-medium capitalize text-start">
            Hello, my name is Arjun Singh, and I’m from Bihar. I hold a
            Bachelor's degree, which I completed in 2023, and I am currently
            working as a Web Developer Intern at Bepoj Technology. In addition,
            I am pursuing a Master of Computer Applications (MCA) from Lovely
            Professional University to further strengthen my expertise in
            software development.
            <br />
            <br />
            I have strong hands-on experience with technologies like HTML, CSS,
            JavaScript, React.js, and Responsive Design. As a result-oriented,
            self-driven, and highly motivated individual, I am always eager to
            learn new technologies and stay updated with industry trends.
            <br />
            <br />
            My technical knowledge includes JavaScript, React.js, and additional
            hands-on experience with Web APIs, Math operations, Arrays, Strings,
            and Modern JavaScript features. These skills enable me to write
            cleaner, more efficient code and build robust applications.
            <br />
            <br />
            That's all about me.
          </p>

          <a
            href="#projects"
            className="inline-block mt-5 px-6 py-2.5 bg-white text-green-700 font-bold rounded-[30px] no-underline transition duration-300 ease-in-out hover:bg-[#ffdd57] hover:text-[#1f4037]"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Image Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-900 w-full md:w-[400px] h-auto md:h-[400px] flex justify-center items-center rounded-2xl">
        <img
          src="src/assets/photo/arjun_photo.png"
          loading="lazy"
          alt="Arjun Singh"
          className="rounded-[30px] w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] m-4 shadow-[0_4px_20px_darkgreen]"
        />
      </div>
    </div>
  );
};

export default About;
