"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const service = useSearchParams().get("service");
  //   based on service we can render the page
  return <div>page-{service}</div>;
};

export default Page;
