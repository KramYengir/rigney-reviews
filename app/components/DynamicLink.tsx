"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Review from "../interfaces/ReviewType";

const DynamicLink = ({
  review,
  children,
}: {
  review: Review;
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const link = path.includes("masterpieces")
    ? "masterpieces"
    : path.includes("hidden-gems")
      ? "hidden-gems"
      : review.format;
  return <Link href={`/${link}/${review.slug.current}`}>{children}</Link>;
};

export default DynamicLink;
