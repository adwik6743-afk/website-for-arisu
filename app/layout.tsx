import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arisu Home Tuition | Premium Tutors for Nursery to Class 12',
  description: 'Arisu Home Tuition: Connecting parents with verified expert home tutors for all subjects and boards. Personalized 1-on-1 education.',
  keywords: 'home tutors, home tuition, private tutor, kolkata tutors, CBSE ICSE tutors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} selection:bg-indigo-100 selection:text-indigo-700`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}