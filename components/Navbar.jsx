import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <p className="logo">
            <Link href="/">Home</Link>
          </p>
          <p className="logo">
            <Link href="/apparel">Apparel</Link>
          </p>
          <p className="logo">
            <Link href="/footwear">Footwear</Link>
          </p>
          <p className="logo">
            <Link href="/hats&acc">Hats & Accessories</Link>
          </p>
        </nav>
      </aside>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
