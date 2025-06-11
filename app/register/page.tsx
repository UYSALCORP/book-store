'use client';
import Head from 'next/head';
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "../zodSchema/login";
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to login page
    router.push('/');
  };

  return (
    <div className="flex h-screen">
      {/* Left side background image */}
      <Image
        src="/images/picture.png"
        alt="Login Background"
        width={1000}
        height={1000}
        className="hidden md:flex w-1/2 bg-cover bg-center"
      />

      {/* Right side register form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md px-8">
          <div className="flex justify-center mb-14">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </div>
          <h2 className="text-sm text-gray-600 mb-1">
            Welcome!
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mb-16">Create your account</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-sm placeholder:text-gray-400 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@mail.com"
                className="w-full px-4 py-2 border rounded-sm placeholder:text-gray-400 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-sm placeholder:text-gray-400 text-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-b-xs hover:bg-orange-700 transition mt-10"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full text-purple-600 border border-purple-600 py-2 px-6 rounded-b-xs hover:bg-purple-50  mt-4 text-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 