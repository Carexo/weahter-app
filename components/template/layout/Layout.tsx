import React, { useState } from "react";
import { LayoutProps } from "./Layout.types";
import Header from "../header/Header";
import SearchNav from "../../organisms/search-nav/SearchNav";
import HeaderInfo from "../../organisms/header-info/HeaderInfo";
import Footer from "../../molecules/footer/Footer";
import Main from "../main/Main";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <>
      <Header>
        {isOpen ? (
          <SearchNav handleClose={handleClose} />
        ) : (
          <HeaderInfo handleClose={handleClose} />
        )}
      </Header>
      <Main>
        {children}
        <Footer />
      </Main>
    </>
  );
};

export default Layout;
