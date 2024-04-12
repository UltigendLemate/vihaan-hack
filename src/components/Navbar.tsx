import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="z-10 flex flex-col md:flex-row justify-between px-8 h-[6.5rem] align-middle text-white">
        <div className="flex items-center justify-center">
            Logo
        </div>

        <div className="flex gap-4 items-center font-medium justify-center">
            <Button className="text-white text-[1rem]" variant="text" size="lg">
                Login
            </Button>
            <Button variant="lightened" className="text-[1rem]" size="lg">
                SignUp
            </Button>
        </div>
    </div>
  )
}

export default Navbar