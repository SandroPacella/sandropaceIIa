'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      event.target.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-mono mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            aria-label="Your name"
            className="w-full p-2 border border-foreground/10 rounded-lg bg-background hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            aria-label="Your email address"
            className="w-full p-2 border border-foreground/10 rounded-lg bg-background hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject line"
            aria-label="Subject line"
            className="w-full p-2 border border-foreground/10 rounded-lg bg-background hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <textarea
            name="message"
            required
            placeholder="How can I help you?"
            aria-label="Your message"
            rows="4"
            className="w-full p-2 border border-foreground/10 rounded-lg bg-background hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
        {isSuccess && (
          <p className="text-green-500 text-center" role="alert">
            Submitted!
          </p>
        )}
      </form>
    </section>
  );
} 