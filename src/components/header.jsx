import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.css";
import Home from "../pages/home";
import React, { useEffect, useState } from "react";
import { Badge, Button, Drawer } from "antd";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [cartLen, setCartLen] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItem"));
    setCartLen(cart);
  });

  console.log(cartLen, "cartLen");

  const totalPrice = cartLen.reduce((total, item) => total + item.price, 0);

  return (
    <nav className="nav flex flex-wrap items-center justify-between px-8 p-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
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
        <span className="font-semibold text-xl tracking-tight">
          Luke Bennett
        </span>
      </div>
      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative" />
      </label>
      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <a
            href="/about/"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
          >
            <NavLink to={"/home"}>Home</NavLink>
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/about/"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
          >
            <NavLink to={"/about"}>About</NavLink>
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/about/"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
          >
            <NavLink to={"/product"}>Product</NavLink>
          </a>
        </li>

        <li className="border-t md:border-none">
          <Badge count={cartLen?.length}>
            <AiOutlineShoppingCart
              size={25}
              className="mt-3"
              style={{ cursor: "pointer" }}
              onClick={showDrawer}
            />
          </Badge>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <div className="flex flex-col p-2">
              <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
              {cartLen?.map((item, index) => (
                <>
                  <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-4">
                    <img
                      src="https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382816.jpg?semt=ais_hybrid"
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 mx-4">
                      <h3 className="text-lg font-medium">{item?.title}</h3>
                      <p className="text-gray-700">${item?.price}</p>
                    </div>
                  </div>
                </>
              ))}

              <h6 className="text-xl">Total Amount : ${totalPrice}</h6>

              <NavLink to={"/product"}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                  Continue Shopping
                </button>
              </NavLink>
            </div>
          </Drawer>
        </li>
      </ul>
    </nav>
  );
}
