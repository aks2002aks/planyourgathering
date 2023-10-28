// src/components/Layout.tsx
import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
