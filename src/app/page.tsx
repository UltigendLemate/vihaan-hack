import Image from "next/image";
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';

export default function Home() {
  return (
    // <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
    // 
    <div className="relative h-full w-full bg-gradient-to-b from-[#243C52] to-[#0A0C0E]">
    {/* // <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"> */}
    <div className="">
      <Navbar/>
      <Hero/>
    </div>
    {/* // </div> */}
    </div>
  );
}
