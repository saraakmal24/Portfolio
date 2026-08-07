import { Reveal, SectionHeading, SpotlightCard } from './ui';
import { Code2, Cpu, Globe, Database } from 'lucide-react';
import { skills } from '@/data/portfolio';

const icons: Record<string, React.ReactNode> = {
  code: <Code2 size={22} className="text-cyan-400" />, cpu: <Cpu size={22} className="text-cyan-400" />,
  globe: <Globe size={22} className="text-cyan-400" />, db: <Database size={22} className="text-cyan-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02." title="Technical Arsenal" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <SpotlightCard className="h-full p-7">
              <div className="flex items-center gap-3">{icons[s.icon]}<h3 className="font-semibold">{s.label}</h3></div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map(t => <span key={t} className="rounded-full border border-zinc-700/80 bg-zinc-800/40 px-3 py-1 font-mono text-xs text-zinc-300">{t}</span>)}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}