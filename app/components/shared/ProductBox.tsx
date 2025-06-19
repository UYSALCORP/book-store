import { category, product, MyData } from "../../constants/data";

export default function ProductBox() {
    const categories = {...category};
    const products = {...product}; 

  return (
    <>
      {categories.map((category) => (
        <div key={category.id}>
          <div className="flex justify-between items-center text-black ">
            <h3>{category.name}</h3>
            <a href="" className="text-orange-500">
              View All
            </a>
          </div>
          <div className="bg-blue-100 flex flex-wrap justify-between items-center mt-1 p-4 rounded-lg">
            {/* slice kullanmamız lazım burada */}
            {products.map((product) => (
              <div key={product.id} className="flex">
                <div>
                  <img src={product.cover} alt="Cover Image" />
                </div>
                <div className="flex flex-col justify-between items-start ml-1">
                  <div>
                    <p>{product.author}</p>
                    <p className="mt-1 text-sm #090937">{product.author}</p>
                  </div>
                  <p className="#6251DD text-2xl">{product.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
