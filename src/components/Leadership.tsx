import { Reveal, SectionHeading, SpotlightCard } from './ui';
import { Users } from 'lucide-react';
import { leadership } from '@/data/portfolio';

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05." title="Leadership & Community" />
      <div className="grid gap-6 md:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.role} delay={i * 0.1}>
            <SpotlightCard className="h-full p-6">
              <Users size={20} className="text-cyan-400" />
              <p className="mt-3 font-mono text-xs text-zinc-500">{l.period}</p>
              <h3 className="mt-1 font-bold">{l.role}</h3>
              <p className="text-sm text-cyan-300/80">{l.org}</p>
              <p className="mt-3 text-sm text-zinc-400">{l.points[0]}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}