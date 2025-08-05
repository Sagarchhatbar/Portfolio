"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import github from "../../../public/github.svg";
import linkedin from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!document.getElementById("my-form")) return;

    emailjs
      .sendForm(
        "service_1l3mpyg",    // e.g., "service_xxx123"
        "template_rws6fhr",   // e.g., "template_abc456"
        "#my-form",
        "d0gc2IiI9t6q9QIb2"     // e.g., "Bd12EXAMPLE"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          document.getElementById("my-form")?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="grid grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-700 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I’m always excited to connect with like-minded creatives,
          collaborators, and teams working on meaningful projects. Whether
          you’re looking to build something together, have a question, or just
          want to say hi – feel free to reach out. Let’s create something awesome!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/SagarChhatbar"}>
            <Image src={github} alt="GitHub" />
          </Link>
          <Link href={"https://www.linkedin.com/in/sagar-chhatbar/"}>
            <Image src={linkedin} alt="Linkedin" />
          </Link>
        </div>
      </div>

      <div>
        <form id="my-form" onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="john.doe@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Just Saying Hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message here..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 w-full rounded bg-primary-300 hover:bg-primary-400 text-black"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className="mt-4 text-sm text-primary-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
