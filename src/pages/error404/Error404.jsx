import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h2>404</h2>
      <p>The page you requested for was not found</p>
      <Link to="/" className="btn bg-dark text-white px-4">
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
