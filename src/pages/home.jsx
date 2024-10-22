import { useState, useEffect } from "react";
import Carousel from "../components/carousel";
import Feature from "../components/feature";
import FeaturedProduct from "../components/featuredProduct";
import Gallery from "../components/gallery";
import Contact from "../components/contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
<div className="flex flex-col items-center justify-center h-screen">
  <div className="flex flex-no-shrink items-center text-grey-darkest">
    <svg
      className="fill-current h-8 mr-2 w-8"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 716 895"
    >
      <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885" />
      <path
        className="text-white fill-current"
        d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
      />
      <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722" />
    </svg>
    <span className="font-semibold text-4xl tracking-tight">Luke Bennett</span>
  </div>

  <div className="flex items-center justify-center ">
    <img src="https://taiwanreview.nat.gov.tw/images/loader.gif" alt="Loading..." />
  </div>
</div>

    
    );
  }

  return (
    <>
      <Carousel />
      <Gallery />
      <Feature />
      <div>
        <h1 className="text-center text-4xl font-mono ">
          Featured Product
          <span className="text-red-500 text-7xl">.</span>
        </h1>
        <FeaturedProduct />
      </div>
      <Contact/>
    </>
  );
}
