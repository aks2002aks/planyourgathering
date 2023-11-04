import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface VendorPathRightProps {
  delay: number;
  title: string;
}

const VendorPathRight: React.FC<VendorPathRightProps> = ({ delay, title }) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };

  const ChilditemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 1,
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
      className="mb-8 flex justify-between items-center  right-timeline"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="order-1 w-[0px] md:w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-black shadow-xl w-8 md:h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">
          {delay + 1}
        </h1>
      </div>
      <motion.div
        className="order-1 bg-gray-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 md:ml-0 ml-2"
        variants={ChilditemVariants}
      >
        <Image
          src={`/step${delay + 1}.svg`}
          alt={`/step${delay + 1}`}
          height={200}
          width={200}
          className="mx-auto"
        />
        <h3 className="mb-3 font-bold text-gray-800 text-xl text-center">
          {title}
        </h3>
        <p className="text-sm leading-snug tracking-wide text-black text-opacity-100 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default VendorPathRight;
