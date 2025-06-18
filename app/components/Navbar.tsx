import Image from "next/image";
import SearchBar from "./SearchBar";
import IconButton from "./IconButtons";
import { heartSvg, cartSvg, profileSvg } from "../constants/icons.contant";

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
                <div className="flex items-center gap-4 hover:cursor-pointer">
                    {/* Profile Icon */}
                    <IconButton
                        icon={profileSvg()}
                    />

                    {/* Heart/Wishlist Icon */}
                    <IconButton
                        icon={heartSvg()}
                    />

                    {/* Cart Icon */}
                    <IconButton
                        icon={cartSvg()}
                    />
                </div>
            </div>

        </div>
    )
}
