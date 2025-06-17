import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

export default function Dashboard(){
  const slides = [
    "images/carousel1.png",
    "images/carousel1.png",
    "images/carousel1.png",
  ]
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="w-[80%] m-auto pt-11 mt-20">
        <Carousel slides={slides} />
      </div>
    </div>
  )
}
