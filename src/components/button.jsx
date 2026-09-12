import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Button({ children, link, className }) {
  const [isHovered, setIsHovered] = useState(false);
  if (link) {
    return (
      <Link to={link}>
        <button
          className={`px-4 py-2 rounded-md font-body text-md ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={`px-4 py-2 rounded-md font-body text-md ${className}`}>
        {children}
      </button>
    );
  }
}
export default Button;
