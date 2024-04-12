import { Keyboard } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    icon : string,
    title : string,
    description : string
}

const Howwework = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
                        <Image src={`/${props.icon}.svg`} width={60} alt='icon' height={60} className='mb-4' />
                        <h6 className='text-xl font-medium mb-2'>{props.title}</h6>
                        <p className='px-5 text-[#e4e4e4]'>{props.description}</p>
                    </div>
  )
}

export default Howwework