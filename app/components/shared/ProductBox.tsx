
export default function ProductBox() {
  return (
    <div className="">
        <div className="flex justify-between items-center text-black ">
            {/* Category Name will be shown here */}
            <h3>Best Seller</h3> 
            {/* At this "a" will push you dinamically */}
            <a href={""} className="text-orange-500"> View All </a>
        </div>
        <div className="bg-blue-100 flex flex-wrap justify-between items-center mt-1 p-4 rounded-lg">
            {/* Book Cover Image  */}
            <div><img src={""} alt="Cover Image"/></div>
            {/* Book title, author name ve Price */}
            <div className="flex flex-col justify-between items-start ml-1">
                <div>
                    {/* Book Title */}
                    <p>{}</p>
                    {/* Author Name */}
                    <p className="mt-1 text-sm #090937">{}</p>
                </div>
                {/* Price */}
                <p className="#6251DD text-2xl">{}$</p>
            </div>
        </div>
    </div>
  )
}
