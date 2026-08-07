'use client';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';
import { Magnetic, GithubIcon, LinkedinIcon } from './ui';
import { socials } from '@/data/portfolio';

const words = ['Agentic', 'AI,', 'Computer', 'Vision', '&', 'Full-Stack', 'Systems.'];
const stats = [
  { v: '3.57', l: 'CGPA / 4.00' },
  { v: '2026', l: 'BS AI Graduate' },
  { v: '10+', l: 'Certifications' },
  { v: '4', l: 'Flagship Projects' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <NeuralCanvas />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono text-sm text-cyan-400">
          Hi, my name is — Sara Akmal · {socials.location}
        </motion.p>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          {words.map((w, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
              <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="mt-6 max-w-2xl text-zinc-400">
          I architect end-to-end AI pipelines — from Graph-RAG knowledge systems and spatio-temporal vision models to production React + FastAPI applications. IBM, Google & Anthropic credentialed.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-8 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a href="#projects" className="rounded-full bg-cyan-400 px-7 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-cyan-300">View Projects</a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-400/60 hover:text-cyan-300">Contact Me</a>
          </Magnetic>
          <div className="ml-2 flex items-center gap-4 text-zinc-400">
            <a href={socials.github} target="_blank" className="hover:text-cyan-400" aria-label="GitHub"><GithubIcon size={20} /></a>
            <a href={socials.linkedin} target="_blank" className="hover:text-cyan-400" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href={`mailto:${socials.email}`} className="hover:text-cyan-400" aria-label="Email"><Mail size={20} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="border-l-2 border-cyan-400/40 pl-4">
              <p className="text-2xl font-bold">{s.v}</p>
              <p className="text-xs text-zinc-500">{s.l}</p>
            </div>
          ))}
        </motion.div>
        <motion.a href="#about" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 text-zinc-600 hover:text-cyan-400" aria-label="Scroll down">
          <ArrowDown size={22} />
        </motion.a>
      </div>
    </section>
  );
}