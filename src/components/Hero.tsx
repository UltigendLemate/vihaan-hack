import React from 'react'
import { Input } from "@/components/ui/input"


const Hero = () => {
  return (
    <div className="text-[3.75rem] text-center h-screen text-white">
        <div className="w-[60%] mx-auto font-semibold">
        See what <span className="text-primaryGray">real</span> people are <span className="text-primaryGray">talking</span> about your idea.
        </div>

        <p className="text-[1rem] text-paragraphGray w-[65%] mx-auto my-4">Resonova scans billions of discussions on reddit and other online communities to find the most useful posts and comments for you and creates a list of people talking about your next idea.</p>

        <div className="lg:w-[60%] w-full mx-auto ">
        <Input />
        </div>
       

    </div>
  )
}

export default Hero