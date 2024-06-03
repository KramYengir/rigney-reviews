import Link from "next/link";
import React from "react";
import logo from "../../public/rigneymade-logo.png";
import Image from "next/image";
import RigneymadeLogo from "./RigneymadeLogo";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <footer className=" flex  items-center p-2 ">
      <RigneymadeLogo />
      <BackToTop />
    </footer>
  );
};

export default Footer;
