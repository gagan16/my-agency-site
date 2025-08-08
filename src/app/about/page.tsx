"use client";

import React from "react";
import { motion, Variants } from "framer-motion";


const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const teamMembers = [
  {
    name: "Gaganjot Singh",
    role: "Founder & Full-Stack Developer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Cloud engineer and data analyst passionate about automation and building scalable solutions.",
  },
  {
    name: "Sara Johnson",
    role: "Data Scientist",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in AI, machine learning, and advanced analytics to unlock business insights.",
  },
  {
    name: "Alex Lee",
    role: "Automation Specialist",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Focused on streamlining workflows with Zapier, Power Automate, and custom scripts.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto py-20 px-6">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          About MyAgency
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8 mb-20 text-gray-700 text-lg leading-relaxed">
          {[
            "At MyAgency, we specialize in helping businesses leverage the power of automation, data analytics, and cloud technologies to optimize operations and unlock new growth opportunities. Whether you’re a startup looking to build scalable workflows or an established enterprise aiming to improve efficiency, we tailor solutions to your unique needs.",
            "Our team has deep expertise in cloud platforms such as Azure, powerful BI tools like Power BI, and advanced automation frameworks. We integrate these tools seamlessly with AI-powered solutions to bring cutting-edge innovation to your business processes.",
            "We understand that each business faces distinct challenges when it comes to managing data, automating repetitive tasks, and making data-driven decisions. That’s why we focus on creating end-to-end pipelines and dashboards that are intuitive, reliable, and scalable — empowering you to focus on what matters most: growing your business.",
            "Founded by experts with backgrounds in full-stack development, data science, and cloud architecture, MyAgency is committed to delivering exceptional results and outstanding customer support. Our mission is simple: to help you save time, reduce manual errors, and gain actionable insights that drive smarter decisions.",
            "Beyond technology, we believe in building strong partnerships with our clients. Your success is our success. We work closely with you through every step of the journey, from strategy and implementation to ongoing support and optimization.",
          ].map((paragraph, i) => (
            <motion.p
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="text-gray-700"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.h2
          className="text-3xl font-semibold mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={6}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map(({ name, role, photo, bio }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 7}
            >
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-blue-600 mb-3">{role}</p>
              <p className="text-gray-600 text-sm">{bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
