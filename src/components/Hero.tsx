"use client"
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { TrendingUp, Search, Star, Keyboard } from 'lucide-react'
import TrendingSearch from './TrendingSearch';
import { Button } from '@/components/ui/button';
import Howwework from './Howwework';
import Faqs from './Faqs';
import Link from 'next/link';

const Hero = () => {

    const [userQuery, setUserQuery] = useState<string>('')
    const [idea, setIdea] = useState<string>('')
    const trendingSearch = [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.",
        "Lorem ipsum dolor sit amet.",
    ]

    return (
        <div className="text-center h-fit text-white grid gap-5">
            <div className="lg:text-[3.75rem] leading-[4rem] text-[2.5rem] w-[60%] mx-auto font-semibold">
                Get real-world <span className="text-primaryGray">feedback</span> on your idea before you <span className="text-primaryGray">launch.</span>
            </div>

            <p className="text-[1rem] text-paragraphGray w-[55%] mx-auto my-4">Ideateit scans billions of discussions on reddit and other online communities to find the most useful posts and comments for you and creates a list of people talking about your next idea.</p>

            <div className="lg:w-[60%] w-[90%] p-1 flex md:flex-row flex-col mx-auto border-[2px] rounded-md bg-[#385873AD] border-[#D2D2D25C] text-[#FFFF] border-opacity-30">
                <Input 
                onChange={(e) => setIdea(e.target.value)}
                value={idea}
                className="bg-transparent border-none text-[1.1rem] text-[#E4E4E4]" placeholder="Describe your Idea / Product " />
                <Link href={`/idea?q=${idea}`}>
                <Button
                className="text-[#213A50] flex"><Star size={16} className="mx-2" /> 
                Generate Result
                </Button>
                </Link>
            </div>
            <div>
                <div className="flex gap-4 mx-auto text-[1.5rem] pt-8 pb-4 justify-center">
                    <TrendingUp size={24} className="flex align-middle items-center my-2" />
                    <span className="#E4E4E4">Trending Searches</span>
                </div>


                <div className="grid lg:grid-cols-3 grid-cols-1 text-[0.938rem] lg:w-[65%] w-[90%] mx-auto gap-6">
                    {trendingSearch.map((item) => (
                        <TrendingSearch key={item} title={item} />
                    ))}
                </div>
            </div>

            <div className="lg:w-[65%] w-[90%] bg-primaryGray min-h-[9rem] rounded-md mx-auto my-12">
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 items-center w-4/5 mx-auto text-[#E4E4E4] gap-4 py-8 text-left">
                <div className="md:text-[2.5rem] text-[1.9rem] font-semibold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                    Dont guess, get insights! <br />See what resonates with your audience.
                </div>
                <div className="flex flex-col align-middle items-start justify-around space-y-4">
                    <div className="md:text-[1.2rem] text-[0.7rem]">
                        Our platform cuts through the noise of social media.  We analyze comments and posts from Reddit, Twitter, and more to give you real user feedback. Launch with confidence - validate your SaaS idea today!
                    </div>
                    <Button variant="transparentBg">See it in action</Button>
                </div>
            </div>


        </div>
    )
}

export default Hero