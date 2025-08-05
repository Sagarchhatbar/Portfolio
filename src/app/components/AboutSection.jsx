"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA=[
    {
        title: "Skills",
        id:"skills",
        content: (
          <ul className="list-disc pl-5">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>CSS/Sass</li>
            <li>HTML</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id:"education",
        content: (
          <p>Bachelor’s in Computer Engineering from Charusat University</p>
        ),
    },
    {
        title: "Certifications",
        id:"certifications",
        content: (
          <ul>
            <li className="underline"><Link href={'https://www.credly.com/badges/45fdca17-2b67-4bb4-998d-296776e505c0/public_url'}>AWS Certified Cloud Practitioner</Link></li>
            <li className="underline"><Link href={'https://www.coursera.org/account/accomplishments/verify/2R788TUTNDMM'}>AWS Fundamentals: Going Cloud-Native</Link></li>
          </ul>
        ),
    }
]

const AboutSection = () => {
  const [tabs, setTabs] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTabs(tab);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src={"/images/PcGhibli.png"} alt="image1" width={600} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white- mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Result-oriented Frontend Developer with 3.5+ years of experience
            building scalable, responsive, and performant web applications using
            React.js, Next.js, and TypeScript. Expertise in delivering
            cloud-integrated solutions with AWS and optimising user experiences
            through design and performance best practices. Proven ability to
            collaborate with cross-functional teams and provide enterprise-grade
            products. AWS Certified Cloud Practitioner.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tabs === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tabs === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tabs === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.map((tab) => {
              if (tabs === tab.id) {
                return (
                  <div key={tab.id} className="text-base lg:text-lg">
                    {tab.content}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
