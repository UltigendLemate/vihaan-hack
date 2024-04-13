'use client'
import { getTLDR } from '@/lib/actions'
import { Dot } from 'lucide-react'
import React, { useEffect } from 'react'


const Tldr = ({data} : {data:any}) => {

    const [summary, setSummary] = React.useState();

    useEffect(()=>{
        console.log(data.documents[0])
        async function tryCatch(errorMessage : string) {
            let attempts = 0;
            while (attempts < 3) {
                try {
                    const parummary = await getTLDR(data.documents[0].slice(0, 10))
                setSummary(JSON.parse(parummary)[0])
                console.log(JSON.parse(parummary)[0])
                return;
                } catch (error) {
                    attempts++;
                    console.error(`Attempt ${attempts} failed: ${error}`);
                }
            }
            console.error(`Failed after 3 attempts: ${errorMessage}`);
        };
        tryCatch("summary me dikkat")
    },[data]);

    // (!summary.summary || !summary.postedBy || !summary.subreddit || !summary.pointers)
    return !summary ?  <TldrLoading /> :          
    <div className='bg-[#3858733D] rounded-md p-10 text-white'>
        <h5 className='text-xl'>{summary.summary}</h5>
        <h6>Posted by <span className='underline'>{summary.postedBy}</span> <Dot className='inline'/> in <span className='underline'>r/{summary.subreddit}</span> <Dot className='inline'/> 5 months ago</h6>

        <h6 className='text-md mt-5'>Summary</h6>
        <ul className='text-[#e4e4e4] list-disc list-outside pl-5'>
          {summary.pointers.map((item,index) => {
            return <li key={index}>
              {item}
            </li>
          })}

        </ul>

        
    </div>
        }
  



export const TldrLoading = ()=>{
    return (
        <div className='bg-[#3858733D] rounded-md p-10 text-white'>
        <h5 className='text-xl h-6 w-full rounded-md bg-gray-400 animate-pulse'></h5>
        <h5 className='text-xl h-6 w-full rounded-md bg-gray-400 animate-pulse my-3'></h5>
        <p className='h-5 w-1/2 rounded-md bg-gray-400 animate-pulse my-3'></p>
        

        <h6 className='text-md mt-5 w-1/4 h-5 rounded-md bg-gray-400 animate-pulse mb-3'></h6>
        <ul className='text-[#e4e4e4] list-disc list-outside pl-5 space-y-3'>
            <li className='w-full rounded-md bg-gray-400 animate-pulse h-5'></li>
            <li className='w-full rounded-md bg-gray-400 animate-pulse h-5'></li>
            <li className='w-full rounded-md bg-gray-400 animate-pulse h-5'></li>
            <li className='w-full rounded-md bg-gray-400 animate-pulse h-5'></li>
            <li className='w-full rounded-md bg-gray-400 animate-pulse h-5'></li>
        </ul>

        
    </div>
    )
}
export default Tldr