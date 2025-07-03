'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Signup() {
  const [accountType, setAccountType] = useState<'customer' | 'seller'>('customer');

  return (
    <div
    className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"

      style={{ backgroundImage: "url('/homeimage.png')" }} // Replace with actual image path
    >
      <div className="bg-black bg-opacity-60 text-white px-10 py-8 rounded-lg w-full max-w-md border border-white">
        <h2 className="text-xl font-bold text-center mb-6">Create Your Account</h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 rounded bg-white text-black outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 rounded bg-white text-black outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="text-sm block mb-1">Select Account Type</label>
            <div className="flex space-x-4 text-sm">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="customer"
                  checked={accountType === 'customer'}
                  onChange={() => setAccountType('customer')}
                  className="mr-1"
                />
                Customer
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="seller"
                  checked={accountType === 'seller'}
                  onChange={() => setAccountType('seller')}
                  className="mr-1"
                />
                Seller
              </label>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 rounded bg-white text-black outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 rounded bg-white text-black outline-none"
              placeholder="Re-enter password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#89023E] text-white py-2 rounded hover:bg-[#a0124e] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
