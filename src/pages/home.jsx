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
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src="https://i.pinimg.com/originals/d7/10/52/d710529f025b042c418d1405d7265e8b.gif"/>
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
