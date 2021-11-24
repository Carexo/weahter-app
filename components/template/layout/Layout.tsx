import React from "react";
import { LayoutProps } from "./Layout.types";
import Header from "../header/Header";
import SearchNav from "../../organisms/search-nav/SearchNav";
import HeaderInfo from "../../organisms/header-info/HeaderInfo";
import Footer from "../../molecules/footer/Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header>
        <SearchNav />
        <HeaderInfo />
      </Header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
