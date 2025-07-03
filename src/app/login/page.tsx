'use client'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/homeimage.png')" }} // replace with your own image path
    >
      <div className="bg-black bg-opacity-60 text-white px-10 py-8 rounded-lg shadow-lg w-[300px] sm:w-[350px]">
        <h2 className="text-xl font-semibold mb-6 text-center">Welcome, Anime lovers</h2>

        <form>
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 mb-4 px-4 py-2 rounded bg-white text-black"
          />

          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 mb-6 px-4 py-2 rounded bg-white text-black"
          />

          <button
            type="submit"
            className="w-full bg-[#6b0029] hover:bg-[#87003a] text-white py-2 rounded transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs mt-4 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-white font-semibold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
