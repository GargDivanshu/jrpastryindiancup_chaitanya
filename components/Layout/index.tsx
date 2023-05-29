import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <>

      <Navbar />
      <div className={`w-[100vw] h-full grid gap-10 justify-center items-center ${props.className}`}>{props.children}</div>
      

    <Footer/>
    </>
    
  );
};

export default Layout;

  

