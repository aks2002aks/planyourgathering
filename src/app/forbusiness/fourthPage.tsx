import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FourthPage = () => {
  const containerVariants = { 
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.75, delay: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const { ref, inView } = useInView({});

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="text-gray-600 body-font"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.h1
          className="text-center text-3xl  font-extrabold title-font  text-gray-900 mb-20"
          variants={itemVariants}
        >
          Vendor Reviews
        </motion.h1>
        <motion.div
          className="flex flex-wrap -m-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.div
            className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            variants={itemVariants}
          >
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/302x302"
                width={302}
                height={302}
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin
                coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
                cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            variants={itemVariants}
          >
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/300x300"
                width={302}
                height={302}
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin
                coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
                cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                ALPER KAMU
              </h2>
              <p className="text-gray-500">UI Develeoper</p>
            </div>
          </motion.div>
          <motion.div className="lg:w-1/3 lg:mb-0 p-4" variants={itemVariants}>
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
                width={302}
                height={302}
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin
                coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
                cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HENRY LETHAM
              </h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FourthPage;
