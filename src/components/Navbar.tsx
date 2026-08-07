'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' }, { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' }, { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' }, { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed top-0 z-40 w-full transition-all ${scrolled ? 'border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-mono text-sm font-bold text-cyan-400">sara.akmal<span className="text-zinc-500">()</span></Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(l => <Link key={l.href} href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-cyan-400">{l.label}</Link>)}
          <a href="#contact" className="rounded-full border border-cyan-400/40 px-4 py-1.5 text-sm text-cyan-300 transition-colors hover:bg-cyan-400/10">Hire Me</a>
        </div>
        <button className="text-zinc-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && (
        <div className="flex flex-col gap-4 border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 backdrop-blur md:hidden">
          {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-zinc-300 hover:text-cyan-400">{l.label}</Link>)}
        </div>
      )}
    </header>
  );
}