export default function SearchBar() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center bg-indigo-50 text-gray-500 px-4 py-2 rounded-md">
        {/* Search Icon (SVG) */}
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>

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