import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-gray-900 p-8 rounded shadow-md w-80">
        <h2 className="text-center text-xl font-bold mb-4">Welcome, Anime lovers</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-3 bg-gray-800 rounded"/>
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-800 rounded"/>
        <button className="w-full bg-red-700 py-2 rounded">Login</button>
        <p className="text-sm mt-3 text-center">
          Don’t have an account? <Link href="/signup" className="underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
