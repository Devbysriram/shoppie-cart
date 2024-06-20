import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Header = ({cartItemsCount, showModal, setShowModal }) => {
  

  return (
    <div className="flex p-4 justify-between bg-slate-900">
      <h3 className="bg-slate-900">Shoppiecart</h3>
      <div className="cart items-center bg-slate-900" onClick={() => setShowModal(!showModal)}>
        <FontAwesomeIcon icon={faCartShopping} className="bg-slate-900"/>
        <span className="px-2 bg-slate-900">{cartItemsCount}</span>
      </div>
    </div>
  );
};

export default Header;
