import { Dot } from 'lucide-react'
import React from 'react'

type Props = {
  subreddit: string
  pointers: string[]
  postedBy: string
  summary: string
}

const Tldr = ({ subreddit, pointers, postedBy, summary }: Props) => {
  return (
    <div className='bg-[#3858733D] rounded-md p-10 text-white'>
        <h5 className='text-xl'>{summary}</h5>
        <h6>Posted by <span className='underline'>{postedBy}</span> <Dot className='inline'/> in <span className='underline'>r/{subreddit}</span> <Dot className='inline'/> 5 months ago</h6>

        <h6 className='text-md mt-5'>Summary</h6>
        <ul className='text-[#e4e4e4] list-disc list-outside pl-5'>
          {pointers.map((item) => {
            <li key={item}>
              {item}
            </li>
          })}

        </ul>

        
    </div>
  )
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