import React from "react";
import { FaBrain, FaHeart } from "react-icons/fa6";

const QuickSynopsis = ({ head, heart }: { head: string; heart: string }) => {
  return (
    <div className=" grid gap-4 my-6 max-w-2xl ">
      <h2 className="  text-xl text-scooter-800 dark:text-scooter-50">
        Quick Synopsis
      </h2>
      <div className="flex flex-wrap p-6 sm:flex-nowrap items-center gap-4 rounded-md bg-scooter-100 dark:bg-scooter-900">
        <div className=" mx-auto text-4xl text-scooter-600 dark:text-scooter-50">
          <FaBrain />
        </div>
        <p>{head}</p>
      </div>
      <div className="flex flex-wrap p-6 sm:flex-nowrap items-center gap-4 rounded-md bg-scooter-100 dark:bg-scooter-900">
        <div className=" mx-auto text-4xl text-scooter-600 dark:text-scooter-50">
          <FaHeart />
        </div>
        <p>{heart}</p>
      </div>
    </div>
  );
};

export default QuickSynopsis;
