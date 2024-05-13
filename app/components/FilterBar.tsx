"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const FilterBar = () => {
  // State to track the current path
  const [currentPath, setCurrentPath] = useState("");

  // Update the current path state when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="flex  justify-end gap-2">
      <Link
        href={"/"}
        className={`rounded-b-md px-2 py-1 ${currentPath === "/" ? " bg-scooter-600 text-scooter-50 dark:bg-scooter-50 dark:text-scooter-900" : ""}`}
      >
        All
      </Link>
      <Link
        href={"/film"}
        className={`rounded-b-md px-2 py-1 ${currentPath === "/film" ? " bg-scooter-600 text-scooter-50 dark:bg-scooter-50 dark:text-scooter-900" : ""}`}
      >
        Film
      </Link>
      <Link
        href={"/tv"}
        className={`rounded-b-md px-2 py-1 ${currentPath === "/tv" ? " bg-scooter-600 text-scooter-50 dark:bg-scooter-50 dark:text-scooter-900" : ""}`}
      >
        TV
      </Link>
    </div>
  );
};

export default FilterBar;
