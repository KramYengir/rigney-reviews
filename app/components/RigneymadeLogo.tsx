import Link from "next/link";
import React from "react";

const RigneymadeLogo = () => {
  return (
    <div
      className=" flex mx-auto text-sm
 hover:text-scooter-600 dark:hover:text-scooter-400"
    >
      <Link
        href={"https://www.rigneymade.com/"}
        className="flex items-center font-sans  "
      >
        <svg
          className="fill-current "
          width="32"
          height="32"
          version="1.0"
          viewBox="0 0 240 240"
        >
          <path d="M138.7 36.45C112.75 47.1 62 97.85 34.1 140.95c-9.6 14.9-7.95 17.6 2.5 4.05C75.85 94.25 133.7 42.85 149.95 44.2c12.55 1.05 6 35.8-14.65 77.3-9 18.05-8 16.95-12.85 14.4-22.7-11.85-62 40.75-43.9 58.85 9 9 27.5-1.7 44.8-26.05 6.4-9 6.45-9 9.35-1.7 5.55 13.7 11.45 14.15 28.1 2.1 15.8-11.45 22.5-11.75 32.2-1.6 8.15 8.55 16.15 8.15 10.35-.55-6.5-9.7-15.05-15.35-23.35-15.35-6.55 0-8.75 1.05-23.75 11.2-13.1 8.8-12.2 9-17.25-3.6l-3.5-8.7 7-14c32.95-65.6 31.1-114.4-3.8-100.05zm-19.25 107.7c3.35 1.55 3.5 1.1-3.7 11.6-11.65 17.05-26.75 32.6-29.85 30.7-3.4-2.1 1.25-18.5 7.95-28 8.4-11.95 18.45-17.55 25.6-14.3z" />
        </svg>
        {" RigneyMade "}
        &#169; {new Date().getFullYear()}
      </Link>
    </div>
  );
};

export default RigneymadeLogo;
