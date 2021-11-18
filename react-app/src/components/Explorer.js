import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";

export default function Explorer() {
  function newFolder() {
    alert("funcionality not added.");
  }

  const [count, setCount] = useState(10);

  return (
    <div className="explorer-folder">
      <button className="new-folder" onClick={newFolder}>
        + New Folder
      </button>
      <button className="folders" onClick={() => setCount(count + 1)}>
        <FaFolder /> Employee {count}
      </button>
      <button className="folders" onClick={() => setCount(count + 1)}>
        <FaFolder /> Day Off {count}
      </button>
    </div>
  );
}
