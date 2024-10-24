import React, { useState } from "react";
import './admin.css'; 
import { TbShoppingCartCopy } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Table from "./table";
function SideBar() {
  const [activePage, setActivePage] = useState("");

  const handleNavClick = (pageName) => {
    setActivePage(pageName);
  };

  

  return (
    <div className="page">
      <div className="sidebar">
        <header>
          {/* Removed the logo */}
          <NavLink to={"/admin"}>
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
              className="text-Black fill-current"
              style={{color:'black'}}
              d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
            />
            <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Luke Bennett
          </span>
        </div>
      </NavLink>        </header>
        <nav>
          <div className="nav-item active" >
            <a className="nav-link" href="#dashboard">
              <span className="nav-icon">
                <span className="solid">
                <TbShoppingCartCopy/>

                </span>
              </span>
              <span className="nav-text">Orders</span>
            </a>
          </div>

        </nav>
      <NavLink to={'/'}>
      <div className="logout flex justify-center items-center gap-4 cursor-pointer">
           <MdLogout/> Logout
        </div>
      </NavLink>
      </div>
      <header className="dashboard-header">
        <h1>{activePage}</h1>
        
        <div className="bg-slate-300 w-full h-screen p-10">
             <h1>Order List</h1>
           <Table/>
          
        </div>
     
      </header>
    </div>

    
  );
}

export default SideBar;
