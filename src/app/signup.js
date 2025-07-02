import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-gray-900 p-8 rounded shadow-md w-96">
        <h2 className="text-center text-xl font-bold mb-4">Create Your Account</h2>
        <input type="text" placeholder="Name" className="w-full p-2 mb-3 bg-gray-800 rounded"/>
        <input type="email" placeholder="Email" className="w-full p-2 mb-3 bg-gray-800 rounded"/>
        <div className="mb-3">
          <label className="block text-sm">Account Type:</label>
          <label className="mr-3"><input type="radio" name="type" /> Customer</label>
          <label><input type="radio" name="type" /> Seller</label>
        </div>
        <input type="password" placeholder="Password" className="w-full p-2 mb-3 bg-gray-800 rounded"/>
        <input type="password" placeholder="Confirm Password" className="w-full p-2 mb-4 bg-gray-800 rounded"/>
        <button className="w-full bg-red-700 py-2 rounded">Sign Up</button>
        <p className="text-sm mt-3 text-center">
          Already have an account? <Link href="/login" className="underline">Login</Link>
        </p>
      </div>
    </div>
  )
}
