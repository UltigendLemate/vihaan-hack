import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="z-10 flex justify-between px-8 h-[6.5rem] align-middle text-white">
        <div className="flex items-center">
            Logo
        </div>

        <div className="flex gap-4 items-center font-medium">
            <Button className="text-white text-[1.25rem]" variant="text" size="lg">
                Login
            </Button>
            <Button variant="lightened" className="text-[1.25rem]" size="lg">
                SignUp
            </Button>
        </div>
    </div>
  )
}

export default Navbar