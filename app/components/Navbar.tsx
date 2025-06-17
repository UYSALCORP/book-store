import Image from "next/image";
import SearchBar from "./SearchBar";
import IconButton from "./IconButtons";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex justify-around items-center p-4">
                <Image
                    src="/images/logo.png"
                    alt="Login Background"
                    width={60}
                    height={39}
                    className="mx-4 my-4 bg-cover"
                />
                <div className="flex-1 max-w-2xl mx-4">
                    <SearchBar />
                </div>
                <div className="flex items-center gap-4">
                    {/* Profile Icon */}
                    <IconButton
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                // width={50}
                                // height={50}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        }
                    />

                    {/* Heart/Wishlist Icon */}
                    <IconButton
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                // width={50}
                                // height={50}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        }
                    />

                    {/* Cart Icon */}
                    <IconButton
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                // width={50}
                                // height={50}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13m-11 0a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
                                />
                            </svg>
                        }
                    />
                </div>
            </div>

        </div>
    )
}
