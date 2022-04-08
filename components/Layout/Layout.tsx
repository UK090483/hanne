import React from "react";
import SkipToContent from "@lib/SkipToContent/SkipComponent";
import Footer from "./Footer";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <SkipToContent containerId="main-content" />
      <Header>
        <Nav />
      </Header>
      <main id="main-content" className="min-h-screen  select-none">
        {children}
      </main>
      <Footer />
    </>
  );
};
