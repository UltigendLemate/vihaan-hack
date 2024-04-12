import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="z-10 flex justify-between px-8 h-[6.5rem] align-middle text-white">
        <div className="flex items-center">
            Logo
        </div>

        <div className="flex gap-4 items-center">
            <Button className="text-white" variant="text">
                Login
            </Button>
            <Button>
                SignUp
            </Button>
        </div>
    </div>
  )
}

export default Navbar