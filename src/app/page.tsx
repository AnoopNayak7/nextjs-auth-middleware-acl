import Navbar from '@/components/common/navbar'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <p className='py-1 px-3 bg-[#B9F8D3] rounded text-black'>Next.js middleware for authentication using NextAuth.js</p>
          <h1 className="font-heading font-bold text-[#2E3840] text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            An example app built using <span className='text-[#53BF9D]'>Next.js 13</span>
          </h1>
          <span className='text-2xl'>server components.</span>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m building a web app with Next.js 13 and open sourcing
            everything. The code includes a Next.js middleware for authentication using NextAuth.js, which redirects unauthenticated users to the login page unless they are already on an authentication-related page or attempting to access the dashboard.
          </p>
        </div>
      </section>
    </main>
  )
}
