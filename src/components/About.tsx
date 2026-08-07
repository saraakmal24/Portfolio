import { Reveal, SectionHeading, SpotlightCard } from './ui';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';
import { socials } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01." title="About Me" subtitle="Mathematical foundations. Production engineering. Real-world impact." />
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <SpotlightCard className="h-full p-8">
            <p className="leading-relaxed text-zinc-300">
              I'm a BS Artificial Intelligence graduate (UMT Lahore, CGPA 3.57/4.00) specializing in
              <span className="text-cyan-300"> Agentic AI, Computer Vision and RAG/Graph-RAG systems</span>, with the
              full-stack ability to ship them: React frontends, FastAPI microservices, Firebase sync, Neo4j graphs.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              As a <span className="text-zinc-200">Teaching Assistant for Machine Learning, Deep Learning, Linear Algebra & Differential Equations</span>,
              I don't just use models — I teach the mathematics underneath them. From sub-30-second medical triage (NexaMed)
              to XAI-auditable SAM 2 tracking, I build systems that ship, explain themselves, and serve people.
            </p>
          </SpotlightCard>
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}><SpotlightCard className="p-6">
            <GraduationCap className="text-cyan-400" size={22} />
            <p className="mt-3 font-semibold">BS Artificial Intelligence</p>
            <p className="text-sm text-zinc-400">UMT Lahore · 2022–2026 · CGPA 3.57/4.00</p>
          </SpotlightCard></Reveal>
          <Reveal delay={0.2}><SpotlightCard className="p-6">
            <BookOpen className="text-cyan-400" size={22} />
            <p className="mt-3 font-semibold">Teaching Assistant</p>
            <p className="text-sm text-zinc-400">ML · DL · Linear Algebra · Differential Equations</p>
          </SpotlightCard></Reveal>
          <Reveal delay={0.3}><SpotlightCard className="p-6">
            <MapPin className="text-cyan-400" size={22} />
            <p className="mt-3 font-semibold">{socials.location}</p>
            <p className="text-sm text-zinc-400">Open to remote & on-site roles</p>
          </SpotlightCard></Reveal>
        </div>
      </div>
    </section>
  );
}