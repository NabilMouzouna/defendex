import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Presentation } from "@/components/sections/Presentation"
import { WhyUs } from '@/components/sections/WhyUs';
import { GlobalPresence } from '@/components/sections/GlobalPresence';
import { Products } from '@/components/sections/Products';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />
      <Hero />
      <Presentation />
      <WhyUs />
      <GlobalPresence />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}