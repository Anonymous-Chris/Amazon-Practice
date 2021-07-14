import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  // const [state, dispatch] = useStateValue();
  //  console.log(state);
  // here state ==> {basket: Array(0)}
  const [{ basket }, dispatch] = useStateValue(); //destructuring

  console.log(basket);
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
            <span className="header__optionLine1">Hello chris</span>
            <span className="header__optionLine2">Sign in</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2"> & Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Your</span>
            <span className="header__optionLine2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket ">
            <ShoppingBasketIcon />{" "}
            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
