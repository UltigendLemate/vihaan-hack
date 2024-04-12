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

export default UserComment