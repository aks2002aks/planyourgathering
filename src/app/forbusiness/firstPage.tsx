import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { FiArrowLeft } from "react-icons/fi";

interface firstPageProps {
  isLoggedIn: boolean;
  setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isVendor: boolean;
  setisVendor: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstPage = ({
  isLoggedIn,
  setisLoggedIn,
  isVendor,
  setisVendor,
}: firstPageProps) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2 },
      });
    } else {
      animation.start({ opacity: 0, y: -50 });
    }
  }, [animation, inView]);

  return (
    <div>
      <div className="bg-white " ref={ref}>
        <div className="max-w-7xl mx-auto py-0 md:pt-12 md:pb-4 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center">
            <div className="flex md:hidden ">
              <motion.img
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="w-full"
                src="/BusinessVendor.jpg"
                alt="Vendor Network"
              />
            </div>
            <div className="md:w-1/2 pb-5 md:pb-0">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="text-3xl font-extrabold text-gray-900"
              >
                <Link href="/">
            <button className="rounded-full bg-gray-200 p-2 mr-4">
              <FiArrowLeft size={24} />
            </button>
          </Link>
                Join Our Vendor Network
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="mt-4 text-lg text-gray-500"
              >
                We provide a platform for vendors to showcase their products and
                services to a wider audience. By joining our network,
                you&apos;ll get access to the following benefits:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="mt-6 list-disc pl-12 space-y-1 text-gray-500"
              >
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={animation}
                  className="flex items-start"
                >
                  <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span className="ml-3">
                    Increased visibility and exposure for your business
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={animation}
                  className="flex items-start"
                >
                  <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span className="ml-3">Access to a wider customer base</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={animation}
                  className="flex items-start"
                >
                  <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span className="ml-3">
                    Marketing and promotional support
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={animation}
                  className="flex items-start"
                >
                  <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span className="ml-3">Dedicated customer support</span>
                </motion.li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="mt-8 text-lg text-gray-500"
              >
                We take care of the technical details, so you can focus on what
                you do best - providing quality products and services to your
                customers. Join our network today and start growing your
                business!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="mt-12 flex  justify-center md:block md:justify-start"
              >
                {!isLoggedIn && (
                  <Link
                    href="/user/signup"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700"
                  >
                    Sign up now
                  </Link>
                )}
                {isLoggedIn &&
                  (isVendor ? (
                    <Link
                      href="/user/signup"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700"
                    >
                      Set up Vendor Account
                    </Link>
                  ) : (
                    <Link
                      href="/user/signup"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700"
                    >
                      Join as Vendor
                    </Link>
                  ))}
              </motion.div>
            </div>
            <div className="md:w-1/2 md:ml-10 mt-10 md:mt-0 hidden md:flex">
              <motion.img
                initial={{ opacity: 0, y: -50 }}
                animate={animation}
                className="w-full"
                src="/BusinessVendor.jpg"
                alt="Vendor Network"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
