"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const localStorageKey = "luxurDetailsContactSubmissions";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(localStorageKey);
    if (saved) {
      const entries = JSON.parse(saved) as Array<{ savedAt: string }>;
      if (entries.length > 0) {
        setSavedAt(entries[entries.length - 1].savedAt);
      }
    }
  }, []);

  useEffect(() => {
    if (status !== "saved") return;
    setShowToast(true);
    const timeout = window.setTimeout(() => setShowToast(false), 3200);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    if (typeof window === "undefined") {
      setStatus("error");
      return;
    }

    const now = new Date();
    const submission = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      savedAt: now.toISOString(),
    };

    const stored = window.localStorage.getItem(localStorageKey);
    const submissions = stored ? JSON.parse(stored) : [];
    submissions.push(submission);
    window.localStorage.setItem(localStorageKey, JSON.stringify(submissions));

    setStatus("saved");
    setSavedAt(now.toLocaleString());
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="bg-black text-white min-h-screen relative">
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pointer-events-none fixed top-6 right-6 z-50 rounded-2xl border border-white/15 bg-white/95 px-5 py-4 text-black shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <p className="text-sm font-semibold">Request saved successfully.</p>
        </motion.div>
      )}
      <section className="pt-28 px-6 md:px-20 lg:px-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-gray-400">
            Contact Us
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
            Premium detailing support, booked with confidence.
          </h1>
          <p className="mt-6 max-w-3xl text-gray-300 leading-8 text-base md:text-lg">
            Share your vehicle needs and we will store your request locally so you can confirm it instantly.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-[0_30px_120px_rgba(255,255,255,0.05)]"
            >
              <h2 className="text-xl font-semibold mb-3">Fast response</h2>
              <p className="text-gray-300 leading-7">
                Our team reviews every request and prepares the perfect luxury detailing package for your car.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-[0_30px_120px_rgba(255,255,255,0.05)]"
            >
              <h2 className="text-xl font-semibold mb-3">Saved locally</h2>
              <p className="text-gray-300 leading-7">
                Each submission is stored securely in your browser, so your request stays available even if you refresh.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-20 lg:px-32 pb-20">
        <div className="max-w-6xl mx-auto grid gap-10 xl:grid-cols-[1.5fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm shadow-[0_30px_120px_rgba(255,255,255,0.05)]"
          >
            <p className="text-gray-300 leading-8 mb-8">
              Whether you want a showroom-level gloss or a complete interior renewal, the form below captures your premium request locally.
              Submit once and keep the details safe inside your browser.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <label className="block text-sm text-gray-300">
                Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </label>

              <label className="block text-sm text-gray-300">
                Email
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </label>

              <label className="block text-sm text-gray-300">
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="Tell us about your vehicle and the service you want"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Save request
              </button>

              
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-[0_30px_120px_rgba(255,255,255,0.05)]">
              <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
              <p className="text-gray-300 leading-7 mb-6">
                We are ready to answer your questions and help you choose the perfect detailing package.
              </p>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Phone</p>
                  <p className="mt-2">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Email</p>
                  <p className="mt-2">contact@luxuredetails.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Location</p>
                  <p className="mt-2">123 Prestige Lane, Downtown City</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-[0_30px_120px_rgba(255,255,255,0.05)]">
              <h2 className="text-2xl font-semibold mb-4">Opening hours</h2>
              <div className="space-y-3 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
