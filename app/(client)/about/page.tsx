import Image from "next/image";
import React from "react";
import rrLogoBlue from "/public/RR-logo-blue.svg";
import { FaBrain, FaCheck, FaHeart } from "react-icons/fa";
import QuickSynopsis from "@/app/components/QuickSynopsis";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const headDescription =
  "Technical aspects, does it make sense, believability  and coherance.";
const heartDescription =
  "What's the general mood and tone, emotional impact and sound & visuals";

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
        Reviews?
      </h1>
      <p className="my-4 max-w-2xl font-light">
        RigneyReviews is a personal blog where I share my thoughts on films and
        TV shows. I try to follow a pattern of reviewing which avoids all the
        pitfalls I find with other popular reviewing sites.
      </p>
      <hr className=" border-b border-neutral-200 dark:border-scooter-900 my-6" />
      <h3 className=" text-scooter-800 dark:text-scooter-200 font-medium text-xl tracking-wide mt-4 mb-4">
        Core Aspects
      </h3>
      <ul>
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
      <hr className=" border-b border-neutral-200 dark:border-scooter-900 my-6" />

      <h3 className=" text-scooter-800 dark:text-scooter-200 font-medium text-xl tracking-wide mt-2 mb-2">
        Head & Heart
      </h3>
      <p className="max-w-2xl">
        When searching for something to watch, my main concern is how well made
        it is and how it will make me feel, focusing on the head and the heart
        of the film. The Head & Heart section of my reviews is where I discuss
        these aspects in a at-a-glance format.
      </p>
      <div className=" grid gap-4 my-4 max-w-2xl ">
        <div className="flex p-6 items-center gap-6 rounded-md bg-scooter-100 dark:bg-scooter-900">
          <div className=" text-4xl text-scooter-600 dark:text-scooter-50">
            <FaBrain />
          </div>
          <p className="font-light">{headDescription}</p>
        </div>
        <div className="flex p-6 items-center gap-6 rounded-md bg-scooter-100 dark:bg-scooter-900">
          <div className=" text-4xl text-scooter-600 dark:text-scooter-50">
            <FaHeart />
          </div>
          <p className="font-light">{heartDescription}</p>
        </div>
      </div>
      <hr className=" border-b border-neutral-200 dark:border-scooter-900 my-6" />

      <h3 className=" text-scooter-800 dark:text-scooter-200 font-medium text-xl tracking-wide mt-2 mb-4">
        Contact & Feedback
      </h3>
      <p className="max-w-2xl">
        This blog is a passion project of mine as an aspiring Web Developer. It
        is an ever-evolving project and I am always looking for ways to improve
        it. For example, as the number of reviews grow, I will add a sorting
        option for ease of navigating. Another feature I will add at some point
        is the ability for visitors to comment on reviews.
      </p>
      <p className="max-w-2xl my-4">
        If you have any feedback or suggestions, please feel free to reach out
        to me at:
      </p>
      <ul>
        <li className="flex items-center gap-6 my-2 font-light">
          <span className="flex items-center gap-1 text-2xl text-scooter-800 dark:text-scooter-600">
            <MdEmail />
          </span>
          <a href="mailto:info@rigneymade.com ">info@rigneymade.com</a>
        </li>
        <li className="flex items-center gap-6 my-2 font-light">
          <span className="flex items-center gap-1 text-2xl text-scooter-800 dark:text-scooter-600">
            <TbWorldWww />
          </span>
          <a href="https://www.rigneymade.com/">www.rigneymade.com</a>
        </li>
      </ul>
    </section>
  );
};

export default AboutPage;
