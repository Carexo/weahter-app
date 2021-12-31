import React from "react";
import { LayoutProps } from "./Layout.types";
import { useAppSelector } from "../../../store/hooks";
import { selectHeader } from "../../../store/reducers/header/headerSlice";
import { SkeletonTheme } from "react-loading-skeleton";

import Header from "../header/Header";
import SearchNav from "../../organisms/search-nav/SearchNav";
import HeaderInfo from "../../organisms/header-info/HeaderInfo";
import Footer from "../../molecules/footer/Footer";
import Main from "../main/Main";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navIsOpen = useAppSelector(selectHeader);

  return (
    <SkeletonTheme baseColor="" highlightColor="#c9c9cc">
      <Header>{navIsOpen ? <SearchNav /> : <HeaderInfo />}</Header>
      <Main>
        {children}
        <Footer />
      </Main>
    </SkeletonTheme>
  );
};

export default Layout;
