import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="">Hello chris</span>
            <span>Sign in</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="">Returns</span>
            <span>& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="">Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
