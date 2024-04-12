import Image from "next/image";
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#243C52] to-[#0A0C0E]">
      <Navbar/>
      <Hero/>
    </main>
  );
}
