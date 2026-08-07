import { socials } from '@/data/portfolio';
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-8 text-center">
      <p className="font-mono text-xs text-zinc-500">Designed & built by Sara Akmal · Next.js + Tailwind + Framer Motion · © {new Date().getFullYear()}</p>
      <p className="mt-2 font-mono text-xs text-zinc-600">{socials.email}</p>
    </footer>
  );
}