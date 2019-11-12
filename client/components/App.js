import React from "react";
import Header from "./partials/Header";

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
