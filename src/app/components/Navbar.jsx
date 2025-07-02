'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        
        {/* Logo + Text */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <Image src="/text-logo.png" alt="One For All Text" width={120} height={40} />
        </Link>

        {/* Hamburger Icon (Mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Search bar (hidden on very small screens) */}
        <div className="w-full md:flex-1 md:flex md:justify-center md:px-4 hidden md:block">
          <input
            type="text"
            placeholder="Search by Anime..."
            className="w-full max-w-md px-4 py-1 rounded-full text-white placeholder-white bg-gray-800"
          />
        </div>

        {/* Nav Links */}
        <div
  className={`w-full md:w-auto ${
    isOpen ? 'flex' : 'hidden'
  } flex-col md:flex md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 space-y-2 md:space-y-0`}
>

          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/anime">Anime</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/login" className="bg-blue-500 px-3 py-1 rounded">Log In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}
