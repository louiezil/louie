import React from "react";
import "./page.module.css"; // import the CSS file
import Link from "next/link";

const NotFound = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-text">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href={"/"}>
        <button className="notfound-button">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
