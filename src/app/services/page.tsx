"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      title: "Workflow Automation",
      description:
        "Streamline repetitive tasks using Zapier, Make.com, and custom APIs to save time and reduce errors.",
      color: "from-pink-500 to-yellow-500",
    },
    {
      title: "Data Dashboards",
      description:
        "Build interactive Power BI dashboards connected to Azure SQL, Excel, and SharePoint for better decision-making.",
      color: "from-blue-500 to-teal-500",
    },
    {
      title: "Cloud Data Pipelines",
      description:
        "Migrate and transform data from on-premises systems to the cloud using Azure Data Factory and modern ETL processes.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-28 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        Our Services
      </motion.h1>

      {/* Services */}
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`p-8 rounded-2xl shadow-xl bg-white border-t-8 border-transparent hover:border-gradient-to-r ${service.color} transition-all duration-300 hover:scale-105`}
            style={{
              borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i + 1}
          >
            <h2
              className={`text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}
            >
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Clients Section */}
      <motion.div
        className="mt-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={services.length + 1}
      >
        <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
          Our Clients
        </h2>
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/redleaftax-logo.png" // Add this logo in public folder
            alt="RedLeafTax"
            width={220}
            height={90}
            className="object-contain drop-shadow-lg"
          />
          <p className="text-gray-700 max-w-2xl text-lg">
            We are proud to serve{" "}
            <span className="font-semibold text-red-500">RedLeafTax</span> —
            our first and biggest client, helping them streamline operations,
            build insightful dashboards, and automate critical workflows.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
