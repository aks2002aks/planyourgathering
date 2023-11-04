import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import VendorPathRight from "@/Components/VendorPath/vendorPath(right)";
import VendorPathLeft from "@/Components/VendorPath/vendorPath(left)";
import { useInView } from "react-intersection-observer";

const ThirdPage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="container bg-white mx-auto w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-center text-3xl font-extrabold text-gray-900 py-12 px-2"
        variants={itemVariants}
        ref={ref}
        animate={controls}
      >
        How Our Vendor Service Work
      </motion.h1>
      <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border md:inset-x-2/4 sm:left-[3.5%] xs:left-[4.5%] left-[5.5%]"></div>

        <VendorPathRight delay={0} title="Setup Account" />

        <VendorPathLeft delay={1} title="Catlog Visible Onsite" />

        <VendorPathRight delay={2} title="Booking Notification" />

        <VendorPathLeft delay={3} title="Manage Invoices At One Place" />
      </div>
    </motion.div>
  );
};

export default ThirdPage;
