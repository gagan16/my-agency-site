'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Have questions, ideas, or a project in mind? We’d love to hear from you!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto space-y-6 border border-gray-100"
      >
        <label className="block text-left">
          <span className="block mb-1 font-semibold">Name</span>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </label>

        <label className="block text-left">
          <span className="block mb-1 font-semibold">Email</span>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </label>

        <label className="block text-left">
          <span className="block mb-1 font-semibold">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-2 text-center">Message sent! Thank you.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2 text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
