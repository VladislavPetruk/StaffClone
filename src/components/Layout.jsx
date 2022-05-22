import React from "react";
import UseTheme from "../hooks/UseTheme";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  const { isLight } = UseTheme();

  return (
    <div className="layout" data-theme={isLight ? "light" : "dark"}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
