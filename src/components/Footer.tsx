import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui';
import { socials } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-zinc-500">
          Designed & built by <span className="text-zinc-300">Sara Akmal</span> · © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-cyan-300">
            <GithubIcon size={17} /> GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-cyan-300">
            <LinkedinIcon size={17} /> LinkedIn
          </a>
          <a href={`mailto:${socials.email}`}
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-cyan-300">
            <Mail size={17} /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}