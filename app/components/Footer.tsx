import Link from "next/link";
import React from "react";
import logo from "../../public/rigneymade-logo.png";
import Image from "next/image";
import RigneymadeLogo from "./RigneymadeLogo";

const Footer = () => {
  return (
    <footer className="  flex justify-center items-center p-2 border-t border-slate-300">
      <Link
        href={"https://www.rigneymade.com/"}
        className="flex items-center font-sans"
      >
        <RigneymadeLogo />
        {" RigneyMade "}
        &#169; {new Date().getFullYear()}
      </Link>
    </footer>
  );
};

export default Footer;
