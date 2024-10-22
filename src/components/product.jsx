import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Product({ image, title, categories, price, id ,description }) {
  const data = {
    title  : title,
    image : image,
    category : categories,
    price: price,
    id:id,
    description: description
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <>
      <NavLink to={`/products/${id}`} state={{item:data}}>
        <div className="w-72 h-96 bg-white  rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-10" data-aos="flip-right" data-aos-delay="300" data-aos-duration="2000">
          <a href="#">
            <img
              src={image}
              alt="Product"
              className="h-64 w-72 object-contain rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {categories}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {title}
              </p>
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ${price}
                </p>

                <NavLink to={`/products/${id}`}>
                  {" "}
                  <div className="ml-auto hover:text-red-600  mt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>
          </a>
        </div>
      </NavLink>
    </>
  );
}
