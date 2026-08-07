import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeading, SpotlightCard, GithubIcon } from './ui';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03." title="Featured Projects" subtitle="Shipped systems — not tutorials. Every repo is public." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={p.featured ? 'md:col-span-2' : ''}>
            <SpotlightCard className="group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400">{p.tag}</span>
                <a href={p.repo} target="_blank" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-cyan-300">
                  <GithubIcon size={16} /> Repo <ArrowUpRight size={14} />
                </a>
              </div>
              <h3 className="mt-3 text-xl font-bold group-hover:text-cyan-300">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{p.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-zinc-300"><span className="text-cyan-400">▸</span>{b}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">{t}</span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}