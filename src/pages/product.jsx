import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/product";

export default function ShowProduct() {
  const [products, setProducts] = useState([]);
  const [isloading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isloading) {
    return (
      <div className="flex justify-center mt-24">
        {" "}
        <img src="https://loading.io/assets/mod/spinner/shopping/lg.gif" />
      </div>
    );
  }

  return (
    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-15 gap-x-10 mt-10 mb-10">
      {products.map((val, index) => {
        return (
          <Product
            key={index}
            title={val.title}
            image={val.image}
            price={val.price}
            categories={val.category}
            id={val.id}
            description={val.description}
          />
        );
      })}
    </section>
  );
}
