"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Lets Add Your Service to Our Platform
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg  mb-8 text-center text-red-500 flex md:space-x-4 md:flex-row flex-col justify-center items-center space-y-6"
        >
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-48 w-48"
            src="/dhol1.png"
          ></motion.img>
          <h1 className="text-center p-2">
            &quot;We appreciate your step forward in offering your wedding
            services, contributing to the digital evolution and unity of a
            technologically empowered India.&quot;
          </h1>

          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-48 w-48 hidden md:flex"
            src="/dhol2.png"
          ></motion.img>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl  mt-2 text-center p-2"
        >
          What Service Would you like to add ?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <label
            htmlFor="service-select"
            className="block  text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Vendor Service:
          </label>
          <select
            id="service-select"
            value={selectedService}
            onChange={handleServiceChange}
            className="bg-white border border-red-500 text-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3  "
          >
            <option value="">--Select Service--</option>
            <option value="Catering">Catering</option>
            <option value="Decoration">Decoration</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
          </select>
        </motion.div>
        <Link
          className="mt-4 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md sm:mx-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
          href={`/user/setUpVendor/services?service=${selectedService}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Page;
