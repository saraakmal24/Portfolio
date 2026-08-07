import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Sara Akmal — AI Engineer | Agentic AI · Computer Vision · Full-Stack',
  description: 'Portfolio of Sara Akmal — BS AI (UMT Lahore). Agentic AI, Graph-RAG, Computer Vision & full-stack engineering. IBM, Google & Anthropic credentialed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}