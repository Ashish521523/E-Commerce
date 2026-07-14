import React, { useState } from "react";
import "./Header.css";
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  let [mobiletype, setMobiletype] = useState(false);

  const handelMobilesite = () => {
    setMobiletype(!mobiletype);
  };
  return (
    <div className="headerContenar">
      <div>
        <h4 className="headerHeaing">Eco-Mart</h4>
      </div>
      <div className={mobiletype ? "menuMobile" : "menuWeb"}>
        <ul className="heaeritem">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/" className="nav-link">
            <li>Contact</li>
          </Link>
          <Link to="/" className="nav-link">
            <li>About</li>
          </Link>
          <Link to="/" className="nav-link">
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>

      <div className="headericoncontenar">
        <div className="headersearch">
          <input type="text" placeholder="what are you looking for?" />

          <span>
            <CiSearch className="headericon" />
          </span>
        </div>

        <span>
          <CiHeart className="headericon1" />
        </span>

        <Link to="/bag">
          <span>
            <HiOutlineShoppingCart className="headericon1" />
          </span>
        </Link>

        <span onClick={handelMobilesite}>
          <FiAlignJustify className="headericon2" />
        </span>
      </div>
    </div>
  );
}

export default Header;
