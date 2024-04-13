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
        {/* <h5 className='text-xl'>{summary}</h5> */}
        {/* <h6>Posted by <span className='underline'>{postedBy}</span> <Dot className='inline'/> in <span className='underline'>r/{subreddit}</span> <Dot className='inline'/> 5 months ago</h6> */}

        <h6 className='text-md mt-5'>Summary</h6>
        <ul className='text-[#e4e4e4] list-disc list-outside pl-5'>
          {/* {pointers.map((item) => {
            <li>
              {item}
            </li>
          })} */}
            {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, qui tempore assumenda quam itaque aliquam?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora nam dolores obcaecati odit distinctio officiis. Obcaecati nemo perferendis odit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, labore. Eos fugit quo magnam quasi?</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci minima repellendus rem beatae quibusdam, corrupti perferendis neque, molestiae dolorem ipsam aliquam temporibus. Quisquam, alias perferendis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, dolore?</li> */}
        </ul>

        
    </div>
  )
}

export default Tldr