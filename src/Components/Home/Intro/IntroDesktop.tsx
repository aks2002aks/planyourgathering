"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  const placeholderText = [
    { type: "heading1", text: "Plan Your Gathering" },
    {
      type: "heading3",
      text: `"Your Ultimate Destination for Memorable Celebrations"`,
    },
    { type: "heading2", text: "Animating responsive text!" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className="bg-white  hidden items-center justify-center overflow-hidden relative lg:flex">
      <div className="w-[200px] h-[100vh] bg-white absolute transform rotate-12 z-10"></div>
      <motion.div
        className="w-[200px] h-[100vh]  border-r-4 border-black absolute transform rotate-12 z-20"
        initial={{ scaleY: 0, rotate: 0 }}
        animate={{ scaleY: 1, rotate: 12 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="flex w-full">
        <div className="w-1/2 overflow-hidden relative z-20 p-8">
          <div className="bg-white h-full flex flex-col items-start justify-center overflow-hidden sapce-y-3">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl"
            >
              Plan Your Gathering
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-2xl pt-2"
            >
              &quot;Your Ultimate Destination for Memorable Celebrations&quot;
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-2"
            >
              From gatherings to lavish celebrations, our meticulously curated
              lawns are the quintessence of natural beauty and
              tranquility.Choose the perfect harmony of nature and utility for
              your special day.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-2xl pt-8"
            >
              JOIN US NOW TO MAKE YOUR GATHERING MEMORABLE
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="pt-8 space-y-6 pb-2"
            >
              <Link className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none" href="/user/signup">
                Join Us
              </Link>
              <div>
                Already a member ?{" "}
                <Link
                  href="/user/login"
                  className="text-red-500 hover:text-red-700"
                >
                  Login Now
                </Link>
              </div>
              <p>GET OUR APP NOW ON</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="flex lg:flex-row md:flex-col"
            >
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        <div className="w-1/2 overflow-hidden relative z-1 ">
          <motion.img
            src="https://lh3.googleusercontent.com/pw/ADCreHcxd3s_b7mmIid_4oFGs-VzhDXag8oJRARTiBEkV6MRQH-CRYzeOUBAvCF6A47U19NJIjPJJY4T1Ni6lFZ_7uetjZaamYLFs_Xoz9_Ou6xyEVyQvDS2P2oGZcQOyYtq1LBnKsuZyZ0Od3tpjcjOmqRwHA=w1811-h1205-s-no-gm?authuser=0"
            alt="Right Image"
            className="w-full h-full object-fill"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
}
