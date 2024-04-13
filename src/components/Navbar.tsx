"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useUser } from "@clerk/nextjs";
import {CircleUser} from 'lucide-react'
import { UserButton } from "@clerk/clerk-react";


const Navbar = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    // Early return while loading or if the user is signed in
    if (!isLoaded) return null;

    return (
        <div className="z-10 flex flex-col md:flex-row justify-between px-8 h-[6.5rem] align-middle text-white">
            <div className="flex items-center justify-center">
                Logo 
            </div>

            <div className="flex gap-4 items-center font-medium justify-center">
                {isSignedIn ? (
                    <UserButton />
                    
                ) : (
                    // React Fragment to wrap multiple elements
                    <>
                        <Link href="/sign-in" passHref>
                            <Button className="text-white text-[1rem]" variant="text" size="lg">
                                Login
                            </Button>
                        </Link>
                        <Link href="/sign-up" passHref>
                            <Button variant="lightened" className="text-[1rem]" size="lg">
                                SignUp
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
