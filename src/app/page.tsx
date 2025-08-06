// app/page.tsx

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Automate Smarter. Use Data Better.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          We help businesses save time and scale faster with AI automation, intelligent dashboards, and data pipelines.
        </p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Book a Free Discovery Call
          </button>
        </Link>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p>We streamline tasks using tools like Zapier, Make.com, and custom APIs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Data Dashboards</h3>
            <p>We build Power BI dashboards using Azure SQL, Excel, and SharePoint sources.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Cloud Data Pipelines</h3>
            <p>From on-prem to cloud — we migrate and transform data with Azure Data Factory.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
