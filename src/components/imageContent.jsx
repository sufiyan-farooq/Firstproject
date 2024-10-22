import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ImageContent() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start"  data-aos="zoom-in" data-aos-delay="300" data-aos-duration="2000">
          <div>
            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">
              Elevate Your Wardrobe
            </p>
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-3/5">
            <p className="text-base leading-6 text-gray-600 dark:text-white">
              Discover the latest trends in fashion and shop your favorite
              outfits for every occasion.
            </p>
          </div>
          <div className="mt-16 w-full">
            <NavLink to={"/product"}>
              {" "}
              <button className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
                <p className="text-xl font-medium leading-5">Shop Now</p>
                <svg
                  className="dark:text-gray-900"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 w-1/2 xl:space-x-8 space-y-4 sm:space-y-0">
          <div className="">
            <img
              className="hidden "
               data-aos="flip-right" data-aos-delay="300" data-aos-duration="2000"
              src="https://www.darcyclothing.com/cdn/shop/products/bundle_04154ac8-39b9-4e5f-93ca-f249b0d54653_2048x.jpeg?v=1637235683"
              alt="clothing display"
            />
            <img
             data-aos="flip-right" data-aos-delay="300" data-aos-duration="2000"
              className="w-80 sm:w-auto "
              src="https://www.darcyclothing.com/cdn/shop/products/bundle_04154ac8-39b9-4e5f-93ca-f249b0d54653_2048x.jpeg?v=1637235683"
              alt="clothing display"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4  lg:space-y-5 xl:space-y-8">
            <div>
              <img 
               data-aos="flip-right" data-aos-delay="300" data-aos-duration="2000"
                className=" "
                src="https://i.pinimg.com/236x/fe/85/6f/fe856fe857f1c14ed3ef4b6e1efa692f.jpg"
                alt="clothing rack"
              />
            </div>
            <div>
              <img
               data-aos="flip-right" data-aos-delay="300" data-aos-duration="2000"
                className=" "
                src="https://www.next.co.uk/nxtcms/resource/blob/6287320/d59d9e449bd70240257014867208dac3/date-featured-2-mens-min-data.jpg"
                alt="outfit display"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
