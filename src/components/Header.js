import React from "react";

import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginRight: "1rem", color: "white" }}>Todos</h1>
      <Link to="/addTitle">
        {location.pathname === "/" && (
          <button
            style={{ textAlign: "center", borderRadius: 10 }}
            className="ui red button"
          >
            <i className="plus icon"></i>
          </button>
        )}
      </Link>
    </div>
  );
};
