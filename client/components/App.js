import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
