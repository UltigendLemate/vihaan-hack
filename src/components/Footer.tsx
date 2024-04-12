import { Copyright, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='flex justify-between px-32 py-5'>
<div><Copyright className='inline mr-2'/> Ideateit. All rights reserved.</div>
<div className='flex gap-3 items-center'>
    <Image src='/reddit.svg' width={28} height={28} alt='reddit logo'/>
    <Twitter/>
    <Facebook />
    <Instagram />
    <span className='text-2xl font-medium'>
    /
    </span>
    Ideateit
</div>
        </footer>
    )
}

export default Footer