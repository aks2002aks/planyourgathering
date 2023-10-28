"use client";

import { motion } from "framer-motion";

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
    <div className="bg-white  items-center justify-center overflow-hidden relative  md:hidden">
      <div className="overflow-hidden relative z-1 h-[40vh]">
        <motion.img
          src="https://lh3.googleusercontent.com/pw/ADCreHcxd3s_b7mmIid_4oFGs-VzhDXag8oJRARTiBEkV6MRQH-CRYzeOUBAvCF6A47U19NJIjPJJY4T1Ni6lFZ_7uetjZaamYLFs_Xoz9_Ou6xyEVyQvDS2P2oGZcQOyYtq1LBnKsuZyZ0Od3tpjcjOmqRwHA=w1811-h1205-s-no-gm?authuser=0"
          alt="Right Image"
          className="w-full h-full object-fill"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="overflow-hidden relative z-20 p-8">
          <div className="bg-white h-full flex flex-col items-center justify-center overflow-hidden text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl"
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
              Plan Your Gathering is more than just a service – it&rsquo;s the
              harmonious union of celebration and convenience. From gatherings
              to lavish celebrations, our meticulously curated lawns are the
              quintessence of natural beauty and tranquility. Partnering with us
              isn&rsquo;t just a choice; it&rsquo;s a momentous step toward
              weaving the fabric of unforgettable experiences. Choose the
              perfect harmony of nature and utility for your special day
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
