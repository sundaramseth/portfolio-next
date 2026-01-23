'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setSuccess('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSuccess('Server error. Please try later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col container py-16 items-center align-center text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md border dark:bg-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md border dark:bg-gray-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md border dark:bg-gray-800"
        />

                <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && (
          <p className="text-sm text-green-600 dark:text-green-400">
            {success}
          </p>
        )}
      </form>
    </section>
)
}