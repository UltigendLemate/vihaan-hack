import Image from 'next/image'
import React from 'react'

type Props = {
    user: string
    text: string
    subreddit: string
}

const UserComment = (props: Props) => {
  return (
<div className='p-4 grid border-2 gap-2 border-gray-400 bg-[#3858733D] rounded-lg'>
        <h5>{props.user}</h5>
        <p className='truncate-2'>{props.text}</p>
        <div className='flex gap-3'>
            <Image src='/reddit.svg' width={24} height={24} alt='reddit' />
            <h6>{props.subreddit}</h6>
        </div>

    </div>
  )
}

export const UserCommentLoading = ()=>{
    return (
    <div className='p-4 grid border-2 gap-2 border-gray-400 bg-[#3858733D] rounded-lg'>
        <h5 className='h-5 w-1/2 rounded-md bg-gray-500 animate-pulse'></h5>
        <p className='h-5 w-full rounded-md bg-gray-500 animate-pulse'></p>
        <p className='h-5 w-full rounded-md bg-gray-500 animate-pulse'></p>
        <div className='flex gap-3'>
            {/* <Image src='/reddit.svg' width={24} height={24} alt='reddit' /> */}
            <div className='h-6 w-6 rounded-full bg-gray-500 animate-pulse '></div>
            <h6 className='h-5 w-20 rounded-md bg-gray-500 animate-pulse'></h6>
        </div>

    </div>
    )
}

export default UserComment