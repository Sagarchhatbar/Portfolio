"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const HeroSection = () => {
  const emailToCopy = "sagar.chhatbar25@gmail.com";

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy email: ", err);
      alert("Failed to copy email."); 
    }
  };

  return (
    <section className="lg:py-16">
      <div className="grid gird-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-200">
              Hello, I’m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sagar Chhatbar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-end Developer",
                1000,
                "Javascript specialist",
                1000,
              ]}
              className="text-white"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            I am a software engineer with a passion for building scalable web
            applications and exploring new technologies. Welcome to my
            portfolio!
          </p>
          <div>
            <button
              onClick={handleCopyClick}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-300 to-secondary-200 hover:bg-slate-500 text-black"
            >
              Hire Me
            </button>

            <a
              href="/Sagar_Chhatbar_Resume.pdf"
              download
              className="inline-block px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-300 to-secondary-200 hover:bg-slate-800 mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex items-center justify-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <Image
              src={"/images/ghibli.png"}
              alt="Sagar Chhatbar"
              className="absolute rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
