'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Reveal, SectionHeading, SpotlightCard, Magnetic, GithubIcon, LinkedinIcon } from './ui';
import { socials } from '@/data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    const json = await res.json();
    setStatus(json.success ? 'sent' : 'error');
    if (json.success) setForm({ name: '', email: '', message: '' });
  };

  const info = [
    { icon: <Mail size={18} />, label: socials.email, href: `mailto:${socials.email}` },
    { icon: <Phone size={18} />, label: socials.phone, href: `tel:${socials.phone.replace(/\s/g, '')}` },
    { icon: <GithubIcon size={18} />, label: 'github.com/saraakmal24', href: socials.github },
    { icon: <LinkedinIcon size={18} />, label: 'sara-akmal2482', href: socials.linkedin },
    { icon: <MapPin size={18} />, label: socials.location, href: undefined },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="07." title="Let's Build Together" subtitle="Open to AI/ML internships, graduate engineering roles and freelance full-stack work." />
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <SpotlightCard className="flex h-full flex-col gap-5 p-7">
            {info.map((i, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="text-cyan-400">{i.icon}</span>
                {i.href ? <a href={i.href} target={i.href.startsWith('http') ? '_blank' : undefined} className="hover:text-cyan-300">{i.label}</a> : <span>{i.label}</span>}
              </div>
            ))}
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={submit} className="flex h-full flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name"
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan-400/60" />
              <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Your Email"
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan-400/60" />
            </div>
            <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or role..."
              className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan-400/60" />
            {status === 'sent' && <p className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 size={16} /> Message sent! I'll reply within 24 hours.</p>}
            {status === 'error' && <p className="text-sm text-red-400">Something went wrong — email me directly instead.</p>}
            <Magnetic>
              <button disabled={status === 'sending'} className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-cyan-300 disabled:opacity-60">
                {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Send Message
              </button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </section>
  );
}