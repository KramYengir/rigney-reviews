import React from "react";
import Review from "../interfaces/ReviewType";
import { fetchMovie } from "../utils/API";

const ProductionInfo = async ({ title }: { title: string }) => {
  const details = await fetchMovie(title);
  console.log(details);
  return (
    <div className=" mt-4">
      <h2 className=" font-semibold uppercase mb-2">Info:</h2>
      <ul>
        <li>
          <span className="font-light">Directed by:</span> {details.Director}
        </li>
        <li>
          <span className="font-light">Written by:</span> {details.Writer}
        </li>
        <li className="mb-4">
          <span className="font-light">Actors</span>: {details.Actors}
        </li>
        <li>
          <span className="font-light">Release Date:</span> {details.Year}
        </li>
        <li className="mb-4">
          <span className="font-light">Runtime:</span> {details.Runtime}
        </li>
        <li>
          <span className="font-light">Genre:</span> {details.Genre}
        </li>
        {/* <li>
          <span className="font-light">Plot</span>: {details.Plot}
        </li> */}
      </ul>
    </div>
  );
};

export default ProductionInfo;
