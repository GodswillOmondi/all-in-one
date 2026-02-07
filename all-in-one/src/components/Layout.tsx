import React from "react";
import logo from "../../../MENENGAI7/logo.jpeg";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-blue-700">
        <img src={logo} />
        <p>{}</p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
