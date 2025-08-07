import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Simplify Your Data & Automation</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          End-to-end automation, data analytics, and AI solutions. Powered by Azure, Power BI, and modern ETL.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Get a Free Consultation
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">ETL Automation</h3>
            <p>
              Build efficient pipelines for extracting, transforming, and loading data using Azure Data Factory, Python, and more.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Power BI Dashboards</h3>
            <p>
              Design insightful dashboards for real-time reporting, KPI tracking, and executive decision-making.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">AI & Automation</h3>
            <p>
              Use AI tools like ChatGPT, Notion AI, and Zapier to automate repetitive workflows and boost productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-2">🔧 Tailored Automation</h4>
              <p>We analyze your workflow and build custom automation to fit your exact business needs.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">📊 Data-Driven Insights</h4>
              <p>Get actionable insights with interactive dashboards and predictive analytics.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">🚀 Scalable Solutions</h4>
              <p>We build solutions using Azure that grow with your business – from small startups to large enterprises.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">💬 Friendly Support</h4>
              <p>Talk to real humans who care about solving your problem. Fast turnaround and great service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Tools & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <span className="bg-gray-200 px-4 py-2 rounded-full">Azure Data Factory</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Power BI</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Python</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">ChatGPT</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Notion AI</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Zapier</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">SQL Server</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Make.com</span>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-purple-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Build Something Great Together</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Whether you&apos;re looking to automate, analyze, or improve—let us help you get there. Reach out for a free 30-minute consultation.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} YourCompanyName. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
