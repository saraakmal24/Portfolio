import { Reveal, SectionHeading, SpotlightCard } from './ui';
import { Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="06." title="Certifications & Awards" subtitle="Credentialed by IBM, Google, Anthropic, Microsoft & Deloitte." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <SpotlightCard className="flex h-full items-start gap-3 p-5">
              <Award size={18} className="mt-0.5 shrink-0 text-cyan-400" />
              <div><p className="text-sm font-semibold">{c.name}</p><p className="mt-1 font-mono text-xs text-zinc-500">{c.issuer}</p></div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}