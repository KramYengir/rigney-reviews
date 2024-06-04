import Image from "next/image";
import React from "react";
import rrLogoBlue from "/public/RR-logo-blue.svg";
import { FaCheck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="grid justify-center py-12 text-left">
      <div className=" mx-auto max-w-64">
        <Image
          src={rrLogoBlue}
          alt="logo in the shape of a film reel with the letters r r"
        ></Image>
      </div>
      <h1 className="mt-12 text-2xl  sm:text-4xl tracking-wider font-medium text-scooter-950 dark:text-scooter-100">
        What is <span className="text-scooter-600 font-bold">Rigney</span>
        Reviews...
      </h1>
      <p className="my-4 max-w-2xl">
        RigneyReviews is a personal blog where I share my thoughts on films and
        TV shows. I try to follow a pattern of reviewing which avoids all the
        pitfalls I find with other popular reviewing sites.
      </p>
      <h3 className=" text-scooter-800 font-medium text-xl tracking-wide mt-4 mb-3">
        The RigneyReviews way:
      </h3>
      <ul className="mb-4">
        <li className="flex  justify-start items-center gap-4 pl-2 mb-3 leading-snug">
          <span className=" text-scooter-700">
            <FaCheck />
          </span>{" "}
          Completely spoiler-free!
        </li>
        <li className="flex  justify-start items-center gap-4 pl-2 mb-3 leading-snug">
          <span className=" text-scooter-700">
            <FaCheck />
          </span>{" "}
          A focus on what works and what doesn&apos;t
        </li>
        <li className="flex  justify-start items-center gap-4 pl-2 mb-3 leading-snug">
          <span className=" text-scooter-700">
            <FaCheck />
          </span>{" "}
          No thesis on the underlying themes of cultural blah blah blah
        </li>
        <li className="flex  justify-start items-center gap-4 pl-2 mb-3 leading-snug">
          <span className=" text-scooter-700">
            <FaCheck />
          </span>{" "}
          No politics, no social commentary, no nonsense!
        </li>
        <li className="flex  justify-start items-center gap-4 pl-2 mb-3 leading-snug">
          <span className=" text-scooter-700">
            <FaCheck />
          </span>{" "}
          No plot summary
        </li>
      </ul>
      <h3 className=" text-scooter-800 font-medium text-xl tracking-wide mt-4 mb-3">
        My ratings:
      </h3>
    </section>
  );
};

export default AboutPage;
