import Navbar from "@/components/Navbar";
import SIdebar from "@/components/SIdebar";
import Tldr from "@/components/Tldr";
import UserComment from "@/components/UserComment";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookText, Plus, Sparkles } from 'lucide-react';
const Idea = () => {
    const dummyData = [
        { user: "u/unapologeticNerd", text: "I wish there was an app which connects me with personalised.. ", subreddit: "r/ideasfortheidea" },
        { user: "u/Chaitanya", text: "I'm working on an app which will cater to individual exercise asjdf askdf how are you", subreddit: "r/startup_ideas" },
        { user: "u/bakshi_dhruv", text: "Not a gym in my area, need an online trainer.", subreddit: "r/fitness" }
    ]
    const subreddits = [
        "r/business", "r/startup_ideas", "r/ideasfortheidea", "r/fitness", "r/technology", "r/programming", "r/askreddit", "r/askscience"
    ]

    const addSubreddit = () => {
        console.log('Add subreddit');
    }

    const apiResponse = {
        subreddit: '',
        author: '',
        pointers: ['', '', '', '', '', '', '', ''],
        summary: ''
    }


    return (<main className="">
        <Navbar />
        <Separator className="my-4" />
        <div className="flex h-[300vh] justify-between items-start my-10 px-10 relative">
            <SIdebar subreddits={subreddits} />
            <div className="w-[80%] px-10 grid gap-5">
                <h2 className="text-3xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsum cupiditate incidunt voluptatum cumque.</h2>
                <p>Ideateit scanned 651 comments to find you 96 relevant comments from 8 relevant discussions.</p>
                <Separator className="my-4" />
                <div className="grid gap-4 my-5">
                    <div className="flex gap-4">
                        <BookText className="text-[#E4E4E4] w-10 h-10" />
                        <h4 className="text-3xl font-medium">Sources</h4>
                    </div>
                    <p>A total of 369 users have been talking about your idea in 3 Subreddits.</p>

                    <div className="grid grid-cols-3 gap-10">
                        {dummyData.map((data, index) => (
                            <UserComment key={index} user={data.user} text={data.text} subreddit={data.subreddit} />
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <Button variant={'ghost'}><Plus className="h-4 w-4 mr-1" /> View All</Button>
                    </div>
                </div>
                <Separator className="" />
                <div className="grid gap-4 my-10">
                    <div className="flex gap-4 items-center">

                        <Sparkles className="text-[#E4E4E4] w-10 h-10" />
                        <h4 className="text-3xl font-medium">TLDR Summary</h4>

                    </div>
                    <Tldr 
                    summary={summary} 
                    author={author} 
                    subreddit={subreddit} 
                    pointers={pointers} 
                    />



                </div>
            </div>
        </div>


    </main>);
}

export default Idea;