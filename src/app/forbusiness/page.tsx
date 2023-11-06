"use client";

import React, { useState } from "react";

import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";

const Page = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isVendor, setisVendor] = useState(true);

  return (
    <>
      <FirstPage
        isLoggedIn={isLoggedIn}
        setisLoggedIn={setisLoggedIn}
        isVendor={isVendor}
        setisVendor={setisVendor}
      />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </>
  );
};

export default Page;
