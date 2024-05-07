import React from "react";
import Link from "next/link";

const SanityNavbar = () => {
  return (
    <div className=" flex p-2">
      <Link href={"/"} className=" text-2xl tracking-wider">
        <span className=" text-scooter-600 font-bold">R</span>Reviews
      </Link>
    </div>
  );
};

export default SanityNavbar;
