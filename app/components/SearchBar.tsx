import { searchSvg } from "../constants/icons.contant";
import IconButton from "./IconButtons";

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center bg-indigo-50 text-gray-500 px-4 py-2 rounded-md">
        {/* Search Icon (SVG) */}
        <IconButton icon={searchSvg()}/>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent focus:outline-none placeholder-gray-400 text-sm"
          width={800}
        />
      </div>
    </div>
  );
}