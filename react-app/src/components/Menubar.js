import React from "react";
import Employee from "./Employee";
import Explorer from "./Explorer";
import { AiOutlineEye } from "react-icons/ai";

export default function Menubar() {
  function menuButton() {
    alert("Button is clicked.");
  }

  return (
    <div>
      <div className="menubar">
        <div className="view-bar">
          <button classNamem="view" onClick={menuButton}>
            HR overview <AiOutlineEye />
          </button>
          <button classNamem="view-button" onClick={menuButton}>
            Sheet
          </button>
          <button classNamem="view-button" onClick={menuButton}>
            Location
          </button>
          <button classNamem="view-button" onClick={menuButton}>
            +
          </button>
        </div>
        <div className="filter-button">
          <button className="menu-button" onClick={menuButton}>
            Table
          </button>
          <button className="menu-button" onClick={menuButton}>
            Filter
          </button>
          <button className="menu-button" onClick={menuButton}>
            Group
          </button>
          <button className="menu-button" onClick={menuButton}>
            Sorts
          </button>
          <button className="menu-button" onClick={menuButton}>
            Custumize
          </button>
        </div>
      </div>
      <div className="dashboard">
        <div className="explorer">
          <Explorer />
        </div>
        <div className="divider"></div>
        <div className="table">
          <Employee />
        </div>
      </div>
    </div>
  );
}
