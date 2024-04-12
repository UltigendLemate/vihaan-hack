import Image from "next/image";
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import Faqs from "@/components/Faqs";
import Howwework from "@/components/Howwework";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

export default function Home() {
  const howwork = [
    { title: "Tell Us About Your Idea", icon: 'input', description: "Briefly describe your SaaS concept using our guided prompt. No need for lengthy proposals." },
    { title: "We Gather Real User Feedback", icon: 'reddit', description: "Our platform scours relevant online communities on Reddit, Twitter, and more, finding conversations related to your concept" },
    { title: "Actionable Insights for Success", icon: 'sparkles', description: "We translate the gathered data into clear insights, highlighting user needs and potential opportunities for your idea." }
]
  return (
    <main className="text-center">
      <Navbar />
      <Hero />
      <div className='my-16'>
                <h3 className='text-5xl font-medium'>How we work</h3>
                <div className='bg-[#0f1b27] p-10 border-2 max-w-screen-xl my-10 rounded-md mx-auto border-gray-700 grid grid-cols-3'>
                    {howwork.map((item, index) => (
                        <Howwework icon={item.icon} key={index} title={item.title} description={item.description} />
                    ))}

                </div>
            </div>

      <div className=''>
        <h3 className='text-5xl font-medium py-10'>FAQs</h3>
        <Faqs />
      </div>

      <Separator className="max-w-screen-xl mx-auto bg-gray-500"/>
      <Footer/>
    </main>
  );
}
