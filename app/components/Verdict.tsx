import React from "react";

const Verdict = ({ rating, excerpt }: { rating: string; excerpt: string }) => {
  return (
    <div className="flex flex-wrap justify-start sm:justify-evenly text-left  my-4 max-w-2xl p-4 rounded text-scooter-50 bg-scooter-900 dark:text-scooter-900 dark:bg-scooter-50">
      <p className="flex items-center uppercase font-semibold text-5xl">
        {rating}
        <span className="font-medium text-sm">/10</span>
      </p>
      <hr className="my-4 border-b border-slate-300 w-full sm:hidden" />
      <p className="text-balance italic my-2 max-w-md ">{excerpt}</p>
    </div>
  );
};

export default Verdict;
