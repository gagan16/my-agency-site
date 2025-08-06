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
      // For now, just simulate a delay (replace with actual API call later)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="block mb-1 font-semibold">Name</span>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block mb-1 font-semibold">Email</span>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block mb-1 font-semibold">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && <p className="text-green-600 mt-2">Message sent! Thank you.</p>}
        {status === 'error' && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}
