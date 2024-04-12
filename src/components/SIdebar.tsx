"use client"
import { Plus } from 'lucide-react'
import React, {useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Button} from '@/components/ui/button'


type Props = {
  subreddits : string[]
  // add : ()=>void
}

const SIdebar = (props: Props) => {

  const [subredditName, setSubredditName] = React.useState('')

  const addSubreddit = () => {
    console.log("subreddit added")
  }

  const colors = [
    ["#0061FF", "#60EFFF"],
    ["#595CFF", "#C6F8FF"],
    ["#2C68CA", "#FFFFFF"],
    ["#FFFFFF", "#3D939D"]
  ]
  return (
    <div className='sticky top-0 grid justify-center items-center h-fit py-20'>
      <Dialog>
      <div>
      <DialogTrigger asChild>
        <h5 className='hover:underline cursor-pointer text-xl'>Include subreddit <Plus className='inline h-4 w-4' /></h5>
        </DialogTrigger >
        <DialogContent className="sm:max-w-[425px] text-[#e4e4e4]/80 bg-[#243C52]">
          <DialogHeader>
          <DialogTitle>Add Subreddits</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Input placeholder="Enter your subreddit here" id="subreddit" onChange={(e) => setSubredditName(e.target.value)} value={subredditName} className="col-span-3 bg-transparent w-full" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={addSubreddit} variant="lightened" type="submit" className="mx-auto">Save changes</Button>
        </DialogFooter>
        </DialogContent>
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
      </Dialog>
    </div>
  )
}

export default SIdebar