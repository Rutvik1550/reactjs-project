import React, { useState } from "react";
import { FaQq, FaSearch } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { MdContentCopy, MdCircleNotifications } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineShareAlt } from "react-icons/ai";

export default function Navbar() {
  const [count, setCount] = useState(0);

  function navButton() {
    alert("Button is Clicked.");
  }

  return (
    <div className="navbar">
      <div className="left">
        <button className="nav-button" onClick={navButton}>
          <MdContentCopy /> Boards
        </button>
        <button className="nav-button" onClick={navButton}>
          <FaSearch /> Search
        </button>
        <button className="nav-button" onClick={navButton}>
          <IoMdColorPalette />
          Theme Color
        </button>
        <button className="nav-button" onClick={navButton}>
          <FiActivity />
          Activity Log
        </button>
      </div>
      <div className="nav-logo">
        <FaQq />
      </div>
      <div className="right">
        <button className="nav-button" onClick={navButton}>
          <AiOutlineUserAdd />
          Invite
        </button>
        <button className="nav-button" onClick={navButton}>
          <AiOutlineShareAlt />
          Share
        </button>
        <button className="nav-button" onClick={() => setCount(count + 1)}>
          <MdCircleNotifications /> {count}
        </button>
        <img className="user-info" />
      </div>
    </div>
  );
}
