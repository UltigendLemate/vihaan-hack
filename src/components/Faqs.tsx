import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { cn } from '@/lib/utils'
  

type Props = {}

const Faqs = (props: Props) => {
    const faq = [
        {q : "What kind of ideas can I validate on your platform?", a : "This platform is designed specifically for SaaS (Software-as-a-Service) ideas.  Whether you have a concept for a project management tool, a marketing automation platform, or anything else that falls under the SaaS umbrella, we can help you validate it."},
        {q : "How does the platform work?", a : "Simply provide your SaaS idea description and target audience details. Our platform will then scan social media platforms like Reddit and Twitter to find relevant conversations and analyze the sentiment. You'll receive valuable insights into how your target market feels about your idea."},
        {q : "What social media platforms does the platform currently use?", a : "Right now, we focus on Reddit for their diverse user base and open discussions. However, we're constantly exploring ways to expand and may integrate platforms like Twitter, Discord and Instagram in the future."},
        {q : "Is the feedback from the platform completely automated?", a : "While our platform utilizes advanced algorithms to analyze social media data, the insights are presented for your interpretation. You can use your own judgment and combine the findings with your unique understanding of the market."},
        {q : "Is there a community aspect to this platform?", a : "Currently, the focus is on individual idea validation. However, we're exploring future possibilities like a community forum where founders can share ideas, connect with mentors, and learn from each other's experiences."}
    ]
  return (
    <Accordion type="single" collapsible className='w-full max-w-screen-lg mx-auto mb-40 space-y-8'>
  {faq.map((item, index) => (
    <AccordionItem value={`item-${index}`} key={index}>
      <AccordionTrigger className={`bg-[#3858733D] border-2 border-[#D2D2D25C] px-5 rounded-md [&[data-state='open']]:border-b-0 [&[data-state='open']]:rounded-b-none `}>{item.q}</AccordionTrigger>
      <AccordionContent className='bg-[#3858733D] border-2 border-[#D2D2D25C] border-t-0 px-5 rounded-b-md text-left'>
        {item.a}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
  )
}

export default Faqs