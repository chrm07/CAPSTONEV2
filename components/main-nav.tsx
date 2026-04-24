"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex items-center gap-6">
      
      {/* BRAND / LOGO - Always visible on all screens */}
      <Link href="/" className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden">
          {/* Make sure you have your logo in the public/images folder! */}
          <img src="/images/image.png" alt="Logo" className="object-cover" />
        </div>
        <span className="text-xl font-black text-white tracking-tighter uppercase">
          BTS Portal
        </span>
      </Link>

      {/* HORIZONTAL NAVIGATION - Hidden on mobile, visible on desktop */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link 
          href="/" 
          className={`transition-colors hover:text-white ${
            pathname === '/' ? 'text-white font-bold' : 'text-white/80'
          }`}
        >
          Home
        </Link>
        <Link 
          href="/#features" 
          className="transition-colors text-white/80 hover:text-white"
        >
          Features
        </Link>
        <Link 
          href="/#faq" 
          className="transition-colors text-white/80 hover:text-white"
        >
          FAQ
        </Link>
      </nav>

    </div>
  )
}
