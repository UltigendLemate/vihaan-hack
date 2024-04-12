import React from 'react'
import { Input } from "@/components/ui/input"
import {TrendingUp, Search, Star} from 'lucide-react'
import TrendingSearch from './TrendingSearch';
import { Button } from '@/components/ui/button';

const Hero = () => {
    const trendingSearch = [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.", 
        "Lorem ipsum dolor sit amet.",
    ]


  return (
    <div className="text-center h-fit text-white">
        <div className="mt-10 lg:text-[3.75rem] text-[2.5rem] w-[60%] leading-none mx-auto font-semibold">
        See what <span className="text-primaryGray">real</span> people are <span className="text-primaryGray">talking</span> about your idea.
        </div>

        <p className="py-4 text-[1rem] text-paragraphGray w-[60%] mx-auto my-4">PMS scans billions of discussions on reddit and other online communities to find the most useful posts and comments for you and creates a list of people talking about your next idea.</p>

        <div className="lg:w-[60%] w-[90%] p-1 flex md:flex-row flex-col mx-auto border-[2px] rounded-md bg-[#385873AD] border-[#D2D2D25C] text-[#FFFF] border-opacity-30">
        <Input className="bg-transparent border-none text-[1.1rem] text-[#E4E4E4]" placeholder="Describe your Idea / Product "/>
        <Button className="text-[#213A50] flex"><Star size={16} className="mx-2"/> Generate Result</Button>
        </div>

        <div className="flex justify-between text-[1.5rem] mx-auto py-8">
            <div className="flex gap-4 mx-auto">
            <TrendingUp size={24} className="flex align-middle items-center my-2" />
            <span className="#E4E4E4">Trending Searches</span>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 text-[0.938rem] lg:w-[65%] w-[90%] mx-auto gap-6">
            {trendingSearch.map((item) => (
                <TrendingSearch key={item} title={item} />
            ))}
        </div>

            <div className="lg:w-[65%] w-[90%] bg-primaryGray min-h-[9rem] rounded-md mx-auto my-12">
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 w-4/5 mx-auto text-[#E4E4E4] gap-4 py-8 text-left">
                <div className="md:text-[2.5rem] text-[1.9rem] font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente dolorum aliquid laudantium!
                </div>
                <div className="flex flex-col align-middle items-center justify-around space-y-8">
                    <div className="md:text-[1.2rem] text-[0.7rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto nobis consequatur tempore, accusantium nesciunt voluptas quidem reiciendis veritatis doloremque architecto odio quisquam sunt, magnam omnis eveniet nemo. Fuga sequi in soluta, explicabo quod libero.
                    </div>
                    <Button variant="transparentBg">See How It Works!</Button>
                </div>
            </div>
    </div>
  )
}

export default Hero