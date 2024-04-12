import React from 'react'
import {Check, X} from 'lucide-react'




const Pricing = () => {
    const pricingPlans = [
        {
          title: "Hobby",
          price: 0,
          features: [
            {isHave: true, desc:"Only 1 Idea Generation",},
            {isHave: false, desc:"Unlimited Idea Prompts",},
            {isHave: false, desc:"Generates Data from user",},
            {isHave: false, desc:"Exclusive access to new features",},
          ],
        },
        {
          title: "Pro",
          price: 10,
          features: [
            {isHave: true, desc:"Only 5 idea generation",},
            {isHave: false, desc:"Unlimited idea prompts",},
            {isHave: true, desc:"Generates data from twitter",},
            {isHave: true, desc:"Exclusive access to new features",},
          ],
        },
        {
          title: "Enterprise",
          price: 12,
          features: [
            {isHave: true, desc:"Unlimited idea generation",},
            {isHave: true, desc:"Unlimited idea prompts",},
            {isHave: true, desc:"Generates data from twitter",},
            {isHave: true, desc:"Exclusive access to new features",},
          ],
        }
    ]
  return (
    <div className="m-20">
        <h1 className="text-5xl font-medium text-center">
            Pricing
        </h1>

        <div className="grid grid-cols-3 text-center gap-12 my-16">
        {
            pricingPlans.map((item, index) => (
                <div key={index} className="border-[2px] rounded-md bg-[#385873AD] border-[#D2D2D25C] text-[#FFFF] border-opacity-30 p-8">
                    <h2 className="text-[1.5rem]">{item.title}</h2>
                    <h3 className="text-[1.5rem] my-6"><span className="text-[2.5rem]">$ {item.price}/</span>month</h3>
                    <ul className="">
                        {item.features.map((feature, index) => (
                            <li className="my-6 flex align-middle items-center justify-between" key={index}>
                                {feature.isHave ? <Check/> : <X />} {feature.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Pricing