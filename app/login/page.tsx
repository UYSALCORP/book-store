'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "../zodSchema/login";
import useSWRMutation from 'swr/mutation';
import { loginUser } from '../utils/auth';
import Carousel from '../components/shared/Carousel';

// Define the login schema using Zod
type FormData = z.infer<typeof loginSchema>;

export default function Login() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, setError, reset } = useForm<FormData>({
        resolver: zodResolver(loginSchema),
    });

    // A useSWR + mutate like API, but it will not start the request automatically
    const { trigger: loginMutation, isMutating } = useSWRMutation(
        '/api/rest/login',
        // The extra argument will be passed via the `arg` property of the 2nd parameter.
        async (_url, { arg }: { arg: FormData }) => {
            return loginUser(arg);
        }
    );

    // Handle form submision
    async function onSubmit(data: FormData) {
        try {
            const response = await loginMutation(data);
            
            if (response) {
                // Clear form on success
                reset();
                router.push("/dashboard");
            }
        } catch (error) {
            setError('root', {
                type: 'manual',
                message: error instanceof Error ? error.message : 'Login failed'
            });
        }
    }

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
            {/* Right side login form */}
            <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
                <div className="w-full max-w-md px-8">
                    <div className="flex justify-center mb-14">
                        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
                    </div>
                    <h2 className="text-sm text-gray-600 mb-1">
                        Welcome back!
                    </h2>
                    <p className="text-2xl font-semibold text-gray-800 mb-16">Login to your account</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.root && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-sm">
                                <p className="text-red-600 text-sm">{errors.root.message}</p>
                            </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input
                                {...register("email", { required: true })}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="uysal@mail.com"
                                className="w-full px-4 py-2 border rounded-sm placeholder:text-gray-400 text-black"
                            />
                            {errors.email && (
                                <p className='text-red-600 text-sm'>{errors?.email?.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded-sm placeholder:text-gray-400 text-black"
                            />
                            {errors.password && (
                                <p className='text-red-600 text-sm'>{errors?.password?.message}</p>
                            )}
                        </div>

                        <div className="flex items-center mb-6">
                            <label className="flex items-center text-sm text-blue-700">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-700 mr-2 w-4 h-4"
                                />
                                Remember Me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!isDirty || !isValid || isMutating}
                            className="w-full bg-orange-600 text-white py-2 rounded-b-xs hover:bg-orange-700 transition mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isMutating ? 'Logging in...' : 'Login'}
                        </button>

                        <button
                            type="button"
                            onClick={() => router.push('/register')}
                            className="w-full text-purple-600 border border-purple-600 py-2 px-6 rounded-b-xs hover:bg-purple-50 mt-4 text-center"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
