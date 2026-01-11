"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaClock,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import ServiceDetailModal from "./components/ServiceDetailModal";
import ETLAutomationDetail from "./components/ETLAutomationDetail";
import PowerBIDetail from "./components/PowerBIDetail";
import AIAutomationDetail from "./components/AIAutomationDetail";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  const [expandedService, setExpandedService] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section with Particles */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-28 px-6 md:px-12 text-center overflow-hidden">
        <motion.h1
          className="relative text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          Simplify Your <br /> Data & Automation
        </motion.h1>
        <motion.p
          className="relative max-w-3xl mx-auto text-lg md:text-xl mb-10 font-light drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={1}
        >
          End-to-end automation, data analytics, and AI solutions powered by Azure,
          Power BI, and modern ETL pipelines.
        </motion.p>
        <motion.a
          href="#contact"
          className="relative inline-block bg-gradient-to-r from-purple-400 via-blue-500 to-blue-700 px-10 py-4 rounded-full font-semibold text-white shadow-lg transform transition hover:scale-105 hover:shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        >
          Get a Free Consultation
        </motion.a>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-14 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              icon: <FaDatabase size={48} className="text-blue-600 mb-4 animate-pulse" />,
              title: "ETL Automation",
              desc: "Build efficient pipelines for extracting, transforming, and loading data...",
              detail: <ETLAutomationDetail />,
            },
            {
              icon: <FaChartLine size={48} className="text-purple-600 mb-4 animate-bounce" />,
              title: "Power BI Dashboards",
              desc: "Design insightful dashboards for real-time reporting...",
              detail: <PowerBIDetail />,
            },
            {
              icon: <FaRobot size={48} className="text-pink-600 mb-4 animate-spin-slow" />,
              title: "AI & Automation",
              desc: "Use AI tools to automate workflows and boost productivity...",
              detail: <AIAutomationDetail />,
            },
          ].map(({ icon, title, desc, detail }, i) => (
            <motion.div
              key={title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              custom={i + 1}
            >
              <div className="cursor-pointer" onClick={() => setExpandedService(expandedService === title ? null : title)}>
                <div>{icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>

              {expandedService === title && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-inner"
                >
                  {detail}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>


      </section>


      {selectedService && (
        <ServiceDetailModal
          title={selectedService}
          onClose={() => setSelectedService(null)}
        >
          {selectedService === "ETL Automation" && <ETLAutomationDetail />}
          {selectedService === "Power BI Dashboards" && <PowerBIDetail />}
          {selectedService === "AI & Automation" && <AIAutomationDetail />}
        </ServiceDetailModal>
      )}




      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-purple-50 to-blue-50">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-gray-900"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map(({ title, desc, icon, bgColor }, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-2xl shadow-lg cursor-pointer transform transition hover:-translate-y-3 hover:shadow-2xl text-white ${bgColor} flex flex-col items-center text-center`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              custom={i + 1}
            >
              <div className="mb-5 text-5xl">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          Tools & Technologies
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          {[
            "Azure Data Factory",
            "Power BI",
            "Python",
            "ChatGPT",
            "Notion AI",
            "Zapier",
            "SQL Server",
            "Make.com",
          ].map((tool, i) => (
            <motion.span
              key={tool}
              className="bg-gray-200 px-5 py-2 rounded-full font-semibold text-gray-700 shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.4 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="bg-gradient-to-r from-purple-700 via-blue-600 to-blue-700 text-white py-20 px-6 text-center"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          Let’s Build Something Great Together
        </motion.h2>
        <motion.p
          className="mb-10 max-w-2xl mx-auto text-lg font-light"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={1}
        >
          Whether you&apos;re looking to automate, analyze, or improve — let us help you get there. Reach out for a free 30-minute consultation.
        </motion.p>
        <motion.a
          href="mailto:youremail@example.com"
          className="inline-block bg-white text-blue-700 font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        >
          Contact Us
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} GJS Corp. All rights reserved.
      </footer>
    </div>
  );
};

const benefits = [
  {
    title: "Tailored Automation",
    desc: "Custom-fit workflows to save you time and headaches.",
    icon: <FaClock />,
    bgColor: "bg-blue-600",
  },
  {
    title: "Data-Driven Insights",
    desc: "Make smarter decisions with clear analytics.",
    icon: <FaChartLine />,
    bgColor: "bg-purple-600",
  },
  {
    title: "Scalable Solutions",
    desc: "Solutions that grow with your business needs.",
    icon: <FaShieldAlt />,
    bgColor: "bg-pink-600",
  },
  {
    title: "Friendly Support",
    desc: "Real humans ready to help you succeed.",
    icon: <FaUsers />,
    bgColor: "bg-indigo-600",
  },
  {
    title: "Innovative AI",
    desc: "Leverage AI for smarter automation.",
    icon: <FaRobot />,
    bgColor: "bg-teal-600",
  },
  {
    title: "Secure & Reliable",
    desc: "Your data safety is our top priority.",
    icon: <FaDatabase />,
    bgColor: "bg-green-600",
  },
];

export default Home;
