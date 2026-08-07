import { Reveal, SectionHeading } from './ui';
import { Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="04." title="Experience & Teaching" />
      <div className="relative ml-3 border-l border-zinc-800 pl-8">
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.1} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/50 bg-zinc-950"><Briefcase size={11} className="text-cyan-400" /></span>
            <p className="font-mono text-xs text-zinc-500">{e.period}</p>
            <h3 className="mt-1 font-bold">{e.role} <span className="text-cyan-300">· {e.org}</span></h3>
            <ul className="mt-3 space-y-2">
              {e.points.map(pt => <li key={pt} className="flex gap-2 text-sm text-zinc-400"><span className="text-cyan-400">▸</span>{pt}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}