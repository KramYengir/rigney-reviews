import Link from "next/link";
import React from "react";

const FilterBar = () => {
  return (
    <div className="flex  justify-end gap-1">
      <Link href={"/"}>All</Link>
      <Link href={"/film"}>Film</Link>
      <Link href={"/tv"}>TV</Link>
    </div>
  );
};

export default FilterBar;
