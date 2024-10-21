import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductViewCard() {
  const loc = useLocation();
  const product = {
    id: loc?.state?.item?.id || '',
    title: loc?.state?.item?.title || '',
    price: loc?.state?.item?.price || 0,
    image: loc?.state?.item?.image || '',
    description: loc?.state?.item?.description || '',
    category: loc?.state?.item?.category || '',
    reviews: loc?.state?.item?.reviews || 0,
  };

  const [cartItems, setCartItems] = useState([])  
  const handleAddToCart = () => {
    setCartItems([...cartItems,product])
    toast.success("Item added to cart!")
    console.log(product,"product");
    localStorage.setItem('cartItem',JSON.stringify(cartItems))
  };

  console.log(cartItems);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className=" w-64 lg:h-auto h-64 object-contain object-center rounded"
            style={{ width: "460px" }}
            src={product?.image} 
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-12 ml-12">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600 ml-3">{product?.reviews} Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>

            <div className="flex justify-between mt-2">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
            </div>

            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Add to cart
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
