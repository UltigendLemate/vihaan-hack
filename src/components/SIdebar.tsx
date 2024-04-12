import { Plus } from 'lucide-react'
import React from 'react'

type Props = {
  subreddits : string[]
  add : ()=>void
}

const SIdebar = (props: Props) => {

  const colors = [
    ["#0061FF", "#60EFFF"],
    ["#595CFF", "#C6F8FF"],
    ["#2C68CA", "#FFFFFF"],
    ["#FFFFFF", "#3D939D"]
  ]
  return (
    <div className='sticky top-0 grid justify-center items-center h-fit py-20'>
      <div>
        <h5 className='hover:underline cursor-pointer text-xl'>Include subreddit <Plus className='inline h-4 w-4' /></h5>
        <div className='grid gap-4 my-3'>
          {props.subreddits.map((data, index) => (
            <div key={index} className='flex gap-2 items-center'>
              <div className='w-6 h-6 bg-gradient-to-r rounded-full' style={{
                background: `linear-gradient(to right, 
              ${colors[index % colors.length][0]} 0%,${colors[index % colors.length][1]} 100%)`
              }} />
              <h5>{data}</h5>

            </div>))}


        </div>
      </div>
    </div>
  )
}

export default SIdebar