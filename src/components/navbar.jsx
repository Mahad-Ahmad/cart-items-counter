import React from "react";

function NavBar({ totalCounters }) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
