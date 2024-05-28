"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="btn-secondary">
      &#x2039; Back
    </button>
  );
};

export default BackButton;
