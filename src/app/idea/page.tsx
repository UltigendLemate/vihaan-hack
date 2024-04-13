'use client'
import Navbar from "@/components/Navbar";
import SIdebar from "@/components/SIdebar";
import Tldr, { TldrLoading } from "@/components/Tldr";
import UserComment, { UserCommentLoading } from "@/components/UserComment";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getArrayFromApi, getTLDR } from "@/lib/actions";
import { BookText, Plus, Sparkles } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const Idea = () => {
    async function tryCatch(data,errorMessage : string) {
        let attempts = 0;
        while (attempts < 3) {
            try {
                const arr = await getArrayFromApi(data.documents[0].slice(0, 3))
                return arr; // Exit the function if successful
            } catch (error) {
                attempts++;
                console.error(`Attempt ${attempts} failed: ${error}`);
            }
        }
        console.error(`Failed after 3 attempts: ${errorMessage}`);
    }
    const searchParams = useSearchParams();
    const idea = searchParams.get('q') || '';
    const [data, setData] = useState<any>([]);
    const [commentData, setCommentData] = useState<any>([]);
    const [summary, setSummary] = useState<any>([])
    const setDocumentData = (data: any) => {
        console.log('Setting data:', data.documents[0].slice(0, 3));

    }
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const url = new URL('http://159.89.168.60:4000/posts');
            url.searchParams.append('query', idea);
            url.searchParams.append('limit', '10');
            try {
                const response = await fetch(url.toString());
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const maindata: any = await response.json();
                setData(maindata);
                console.log('Data received:', maindata);
                // setDocumentData(data);
                const arr = await tryCatch(maindata,"nahi chala");
                setCommentData(JSON.parse(arr));
                console.log("doing summary now")
                const summary = await getTLDR(data.documents[0].slice(0, 10))
                setSummary(JSON.parse(summary))

                console.log(" summary " + summary)
                console.log(arr)
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }
        fetchData();
    }, [idea]);

    useEffect(() => {
        console.log('cOMMENT Data:', commentData);

    }, [commentData])

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
    const arr = Array.from({ length: 3 }, (_, i) => i);

    return (<main className="">
        <Navbar />
        <Separator className="my-4" />
        <div className="flex h-[300vh] justify-between items-start my-10 px-10 relative">
            <SIdebar subreddits={subreddits} />
            <div className="w-[80%] px-10 grid gap-5">
                <h2 className="text-3xl font-medium capitalize">{idea}.</h2>
                <p>Ideateit scanned 651 comments to find you 96 relevant comments from 8 relevant discussions.</p>
                <Separator className="my-4" />
                <div className="grid gap-4 my-5">
                    <div className="flex gap-4">
                        <BookText className="text-[#E4E4E4] w-10 h-10" />
                        <h4 className="text-3xl font-medium">Sources</h4>
                    </div>
                    {commentData[0] &&
                        <p>A total of 369 users have been talking about your idea in {commentData.length} Subreddits.</p>
                    }

                    <div className="grid grid-cols-3 gap-10">
                        {commentData[0] ? commentData.map((data, index) => (
                            <UserComment key={index} user={data.user} text={data.text} subreddit={data.subreddit} />
                        )) : arr.map((_, index) => (
                            <UserCommentLoading key={index} />
                        ))
                        }
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
                        summary={summary.summary}
                        author={summary.postedBy}
                        subreddit={summary.subreddit}
                        pointers={summary.pointers}
                    />



                </div>
            </div>
        </div>


    </main>);
}

export default Idea;
