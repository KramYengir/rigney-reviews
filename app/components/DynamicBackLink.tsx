"use client";
import Link from "next/link";
import React from "react";
import Review from "../interfaces/ReviewType";
import { usePathname } from "next/navigation";

interface Props {
  review: Review;
}

const DynamicBackLink = ({ review }: Props) => {
  const path = usePathname();
  const link = path.includes("masterpieces")
    ? "masterpieces"
    : path.includes("hidden-gems")
      ? "hidden-gems"
      : review.format;

  return (
    <div className="flex justify-start items-center gap-2 capitalize font-extralight ">
      &gt;
      <Link href={`/`} className="hover:font-medium">
        Home
      </Link>
      &gt;
      <Link href={`/${review.format}`} className="hover:font-medium">
        {link}
      </Link>
    </div>
  );
};

export default DynamicBackLink;
