import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center container my-4'>
      <Icons.logo className="" />
      <div>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border"
          )}
        >
          <div className='flex items-center'>  
            Login
            <Icons.chevronRight className='pl-2' />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar